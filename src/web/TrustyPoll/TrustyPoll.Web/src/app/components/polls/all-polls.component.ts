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
        const firstPollId = 1;
        this.getNextPoll(firstPollId);
    }

    private getNextPoll(pollId: number) {
        this.trustyPollService.getPollById(pollId).subscribe(title => {
            if (/^\s*$/.test(title)) {
                return;
            }

            this.polls.push({ id: pollId, title });
            const nextPollId = pollId + 1;
            this.getNextPoll(nextPollId);
        });
    }
}
