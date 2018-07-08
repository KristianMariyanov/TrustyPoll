import { Component, OnInit } from '@angular/core';

import { TrustyPollService } from '../../services/index'

@Component({
    templateUrl: './all-polls.component.html',
    styleUrls: ['./all-polls.component.css']
})
export class AllPollsComponent implements OnInit {

    constructor(private trustyPollService: TrustyPollService) { }

    public polls = [];


    ngOnInit() {
        const firstPollIndex = 0;
        this.getNextPoll(firstPollIndex);
    }

    private getNextPoll(pollId: number) {
        this.trustyPollService.getPollWithIndex(pollId).subscribe(poll => {
            debugger;
            if (!poll.id) {
                return;
            }
            this.polls.push(poll);
            this.getNextPoll(pollId++);
        });
    }
}
