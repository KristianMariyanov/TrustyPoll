import { Component, OnInit } from '@angular/core';

import { TrustyPollService, NotificationsService, IdentityService, UtilsService } from '../../services/index'

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(
        private trustyPollService: TrustyPollService,
        private identityService: IdentityService) { }

    public profile: any = {};

    ngOnInit() {
        this.identityService.getAddress().subscribe(address => this.profile.address = address);
        // get eth balance
        // get trt balance

        // get user votes
        // get my polls
    }

    public copyAddress() {
        UtilsService.copyToClipboard(this.profile.address);
        NotificationsService.success('Copied!');
    }
}
