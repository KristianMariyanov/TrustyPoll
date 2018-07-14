import { Component, OnInit } from '@angular/core';

import { TrustyPollService, PollsService } from '../../services/index'

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private pollsService: PollsService,
        private trustyPollService: TrustyPollService) { }

    private allPolls = [];
    private lastPoll: any;

    ngOnInit() {
        this.pollsService.populateAllPolls(this.allPolls);
    }
}
