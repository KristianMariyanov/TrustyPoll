import { Component } from '@angular/core';

import {
    IdentityService,
    LoggerService,
    NotificationsService,
    Web3Service
} from '../../services/index';

@Component({
    templateUrl: './import.component.html',
    styleUrls: ['./import.component.css']
})
export class ImportAccountComponent {
    constructor(
        private ethService: Web3Service,
        private identityService: IdentityService,
        private loggerService: LoggerService) { }

    public rawPkPk: string = null;

    public rawPkImport() {
        if (!Web3Service.isValidPk(this.rawPkPk)) {
            NotificationsService.error('Invalid private key');
            return;
        }

        if (!this.rawPkPk.startsWith('0x')) {
            this.rawPkPk = '0x' + this.rawPkPk;
        }

        const address = this.ethService.addressFromPk(this.rawPkPk);
        if (!this.ethService.isValidAddress(address)) {
            NotificationsService.error('Invalid private key');
            return;
        }

        // Will reload the app
        this.identityService.setAddress(address);
        this.identityService.setPk(this.rawPkPk);
    }

    private log(message: string) {
        this.loggerService.debugOrError('[C]IMPORTACCOUNT', message);
    }
}
