import { Component } from '@angular/core';

import {
    IdentityService,
    LoggerService,
    NotificationsService,
    UtilsService,
    Web3Service
} from '../../services/index';

@Component({
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateAccountComponent {
    constructor(
        private ethService: Web3Service,
        private identityService: IdentityService,
        private loggerService: LoggerService) { }

    public mode: string = ''; // safe / unsafe / unsafeconfirmed

    public copyAddressBtnText: string = 'COPY';

    public siteUrlConfirmed: boolean = false;

    public step;
    public unsafePk: string = '';
    public unsafePkRepeat: string = '';

    public changeStep(step: number) {
        this.step = step;
    }

    public unsafeGeneratePk() {
        this.unsafePk = this.ethService.generatePk();
    }

    public unsafeCreate() {
        if (!Web3Service.isValidPk(this.unsafePk)) {
            NotificationsService.error('Invalid private key');
            return;
        }

        const address = this.ethService.addressFromPk(this.unsafePk);
        if (!this.ethService.isValidAddress(address)) {
            NotificationsService.error('Invalid private key');
            return;
        }

        // Will reload the app
        this.identityService.setAddress(address);
        this.identityService.setPk('0x' + this.unsafePk);
    }

    public unsafeCopyPk() {
        UtilsService.copyToClipboard(this.unsafePk);
        this.copyAddressBtnText = 'COPIED!';
        setTimeout(() => this.copyAddressBtnText = 'COPY', 2000);
    }

    private log(message: string) {
        this.loggerService.debugOrError('[C]CREATEACCOUNT', message);
    }
}
