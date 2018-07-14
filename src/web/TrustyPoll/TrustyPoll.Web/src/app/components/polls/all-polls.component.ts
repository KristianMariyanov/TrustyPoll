import { Component, OnInit } from '@angular/core';

import { TrustyPollService, PollsService } from '../../services/index'

@Component({
    templateUrl: './all-polls.component.html',
    styleUrls: ['./all-polls.component.css']
})
export class AllPollsComponent implements OnInit {

    constructor(
        private pollsService: PollsService,
        private trustyPollService: TrustyPollService) { }

    public polls = [];

    ngOnInit() {
        this.pollsService.populateAllPolls(this.polls);
    }
}
