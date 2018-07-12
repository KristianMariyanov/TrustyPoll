import { Component } from '@angular/core';

import { TrustyPollService, NotificationsService } from '../../services/index'

@Component({
    templateUrl: './poll-create.component.html',
    styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent {

    constructor(private trustyPollService: TrustyPollService) { }

    public poll: any = {};


    public create() {
        if (this.poll.title) {
            NotificationsService.confirm(
                `Are you sure you want to create poll with title: ${this.poll.title}. This will cost you ${
                TrustyPollService.FEE_NUMBER} TRT Tokens?`,
                () => this.trustyPollService.createPoll(this.poll.title, 50).subscribe(tx => console.log(tx)));
        } else {
            NotificationsService.error('Invalid Title');
        }
        
    }
}
