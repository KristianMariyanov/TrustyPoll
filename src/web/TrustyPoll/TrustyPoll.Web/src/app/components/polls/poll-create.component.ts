import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { TrustyPollService, NotificationsService } from '../../services/index'

@Component({
    templateUrl: './poll-create.component.html',
    styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent {

    constructor(
        private router: Router,
        private trustyPollService: TrustyPollService) { }

    public poll: any = {};

    public create() {
        if (this.poll.title) {
            NotificationsService.confirm(
                `Are you sure you want to create poll with title: ${this.poll.title}. This will cost you ${
                TrustyPollService.FEE_NUMBER} TRT Tokens?`,
                () => this.trustyPollService.createPoll(this.poll.title, 50).subscribe(tx => {
                    console.log(tx);
                    this.router.navigate(['/polls']);
                }));
        } else {
            NotificationsService.error('Invalid Title');
        }
        
    }
}
