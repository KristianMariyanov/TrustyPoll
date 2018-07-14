import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TrustyPollService, IdentityService, PollsService, NotificationsService } from '../../services/index'

@Component({
    templateUrl: './poll-details.component.html',
    styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {

    constructor(
        private router: Router,
        private trustyPollService: TrustyPollService,
        private identityService: IdentityService,
        private pollsService: PollsService,
        private activatedRoute: ActivatedRoute) { }

    public poll: any = {};
    public loggedUserAddress: string;

    ngOnInit() {
        this.identityService.getAddress()
            .subscribe(address => {
                this.loggedUserAddress = address.toLowerCase();
            });

        this.activatedRoute.params.subscribe(params => {
            const pollId = params['id'];
            this.pollsService.getPollInfo(pollId, this.poll);
        });
    }

    public vote(optionId: number) {
        NotificationsService.success('Vote transaction was send', null, 'Success', 5000);
        this.trustyPollService.vote(this.poll.id, optionId, 35).subscribe(tx => {
            console.log(tx);
            var pollId = this.poll.id;
            this.poll = {};
            this.pollsService.getPollInfo(pollId,  this.poll);
        });
    }
}
