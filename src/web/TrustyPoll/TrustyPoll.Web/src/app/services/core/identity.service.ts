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

    constructor(
        private web3Service: Web3Service,
        private loggerService: LoggerService,
        private storageService: StorageService) { }

    private address: string;
    private pwd: string;
    private pwdActiveTo: Date;
    private pwdCleanHandle: any;

    public tempToggleLogin() {
        if (this.address) {
            this.removeAddress();
        }
        else {
            this.setAddress('0x0000000000000000000000000000000000000000');
        }
    }

    public isLoggedIn(): Observable<boolean> {
        return this.getAddress().map(address => !!address);
    }

    public getAddress(): Observable<string> {
        if (this.web3Service.walletAccount()) {
            return this.web3Service.walletAccount();
        }

        if (!this.address) {
            const persistedDisplayName = this.storageService.getItem(IdentityService.ADDRESS_KEY);
            if (persistedDisplayName) {
                this.address = persistedDisplayName;
            }
        }

        return Observable.from(this.address);
    }

    public setAddress(address: string) {
        this.address = address.toLowerCase();
        this.storageService.setItem(IdentityService.ADDRESS_KEY, this.address);
        window.location.href = '/';
    }

    public removeAddress() {
        this.address = null;
        this.storageService.removeItem(IdentityService.ADDRESS_KEY);
        window.location.href = '/';
    }

    public getPk(): Observable<any> {
        // TODO: Dynamic?
        this.pwd = '0x01759e83dfae7067a1151233e52092e75b58b14e7fa5f92ddc5c999235d6ba48';
        return UtilsService.observableFrom(this.pwd);
    }

    private log(message: string, isError: boolean = false) {
        this.loggerService.debugOrError('[S]IDENTITY', message, isError);
    }
}
