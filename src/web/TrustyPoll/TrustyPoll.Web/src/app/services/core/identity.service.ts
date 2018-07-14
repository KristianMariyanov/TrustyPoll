import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { StorageService } from './storage.service';
import { LoggerService } from './logger.service';
import { UtilsService } from './utils.service';
import { Web3Service } from '../eth/web3.service';
import { NotificationsService } from './notifications.service';

@Injectable()
export class IdentityService {
    private static readonly ADDRESS_KEY = 'ADDRESS_KEY';
    private static readonly PRIVATE_KEY = 'PRIVATE_KEY';

    constructor(
        private web3Service: Web3Service,
        private loggerService: LoggerService,
        private storageService: StorageService) { }

    private address: string;
    private pwd: string;
    private pwdActiveTo: Date;
    private pwdCleanHandle: any;
    
    public isLoggedIn(): Observable<boolean> {
        return this.getAddress().map(address => !!address);
    }

    public getAddress(): Observable<string> {
        if (!Web3Service.USING_HTTP_NODE) {
            return this.web3Service.walletAccount();
        }

        if (!this.address) {
            const persistedDisplayName = this.storageService.getItem(IdentityService.ADDRESS_KEY);
            if (persistedDisplayName) {
                this.address = persistedDisplayName;
            }
        }

        return Observable.of(this.address);
    }

    public setAddress(address: string) {
        this.address = address.toLowerCase();
        this.storageService.setItem(IdentityService.ADDRESS_KEY, this.address);
        window.location.href = '/';
    }

    public setPk(pk: string) {
        this.storageService.setItem(IdentityService.PRIVATE_KEY, pk);
        window.location.href = '/';
    }

    public removeAddress() {
        this.address = null;
        this.storageService.removeItem(IdentityService.ADDRESS_KEY);
        window.location.href = '/';
    }

    public removePk() {
        this.storageService.removeItem(IdentityService.PRIVATE_KEY);
    }

    public getPk(): Observable<any> {
        const pk = this.storageService.getItem(IdentityService.PRIVATE_KEY);
        return Observable.of(pk);
    }

    private log(message: string, isError: boolean = false) {
        this.loggerService.debugOrError('[S]IDENTITY', message, isError);
    }
}
