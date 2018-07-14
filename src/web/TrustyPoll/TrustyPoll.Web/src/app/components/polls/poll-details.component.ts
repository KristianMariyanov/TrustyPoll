import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrustyPollService, IdentityService, PollsService } from '../../services/index'

@Component({
    templateUrl: './poll-details.component.html',
    styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {

    constructor(
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
        this.trustyPollService.vote(this.poll.id, optionId, 35).subscribe(console.log);
    }
}
