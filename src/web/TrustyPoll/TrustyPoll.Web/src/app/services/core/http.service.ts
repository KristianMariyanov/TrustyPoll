import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { IdentityService } from './identity.service';
import { LoggerService } from './logger.service';
import { UtilsService } from './utils.service';

import { environment } from '../../../environments/environment';

@Injectable()
export class HttpService {
    constructor(
        private http: Http,
        private identityService: IdentityService,
        private loggerService: LoggerService) { }

    public get(url: string, options: RequestOptionsArgs = null): Observable<any> {
        this.log('GET -> ' + url);

        return this.identityService.getAddress().flatMap(address =>
            this.http.get(environment.apiUrl + 'api/' + url, this.buildOptions(options, address))
                .map((res: Response) => {
                    this.log('GET SUCCESS -> ' + url);
                    return this.extractData(res);
                })
                .catch(err => {
                    this.log('GET ERROR -> ' + url);
                    return this.handleError(err);
                }));
    }

    public post(url: string, data: any, options: RequestOptionsArgs = null): Observable<any> {
        this.log('GET -> ' + url);

        return this.identityService.getAddress().flatMap(address =>
            this.http.post(environment.apiUrl + 'api/' + url, data, this.buildOptions(options, address))
                .map((res: Response) => {
                    this.log('POST SUCCESS -> ' + url);
                    return this.extractData(res);
                })
                .catch(err => {
                    this.log('POST ERROR -> ' + url);
                    this.loggerService.debug(err);
                    return this.handleError(err);
                }));
    }

    private extractData(res: Response) {
        if (res.text()) {
            const body = res.json();
            if (body && body.data) {
                return body.data;
            }

            return body;
        }

        return res;
    }

    private handleError(error: any): Observable<any> {
        if (!error) {
            return Observable.throw('An unknown error has occurred.');
        }

        let errMsg = '';
        if (error.text) {
            errMsg = error.text();
            if (errMsg) {
                try {
                    const parsed = JSON.parse(errMsg);
                    if (parsed) {
                        const keys = Object.getOwnPropertyNames(parsed);
                        if (keys.length) {
                            const message = parsed[keys[0]];
                            if (typeof (message) === 'string') {
                                errMsg = message;
                            } else if (typeof (message) === 'object' && message.length) {
                                errMsg = message[0];
                            } else if (message) {
                                errMsg = message;
                            }
                        }
                    }
                } catch (e) {
                    // No need errMsg to be parsed
                }
            }
        } else {
            errMsg = error.message || error.status || error.statusText;
        }

        this.loggerService.error(errMsg);

        return Observable.throw(errMsg);
    }

    private buildOptions(options: RequestOptionsArgs, address: string): RequestOptionsArgs {
        options = options || {};
        options.headers = options.headers || new Headers();

        if (!options.headers.has('Content-Type')) {
            options.headers.append('Content-Type', 'application/json');
        }

        if (address) {
            options.headers.set('User', address);
        }

        return options;
    }

    private log(message: string, isError: boolean = false) {
        this.loggerService.debugOrError('[S]HTTP', message, isError);
    }
}
