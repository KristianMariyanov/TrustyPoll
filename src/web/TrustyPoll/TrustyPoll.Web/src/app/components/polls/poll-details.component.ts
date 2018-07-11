import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrustyPollService, IdentityService } from '../../services/index'

@Component({
    templateUrl: './poll-details.component.html',
    styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {

    constructor(
        private trustyPollService: TrustyPollService,
        private identityService: IdentityService,
        protected activatedRoute: ActivatedRoute) { }

    public poll: any = {};

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            const pollId = params['id'];
            this.getPollInfo(pollId);
            //this.createOption(pollId);
        });
    }

    public vote(optionId: number) {
        this.trustyPollService.vote(this.poll.id, optionId, 35).subscribe(console.log);
    }

    //createOption(pollId: number) {
    //    this.trustyPollService.createOption(pollId, "Option", 40).subscribe(
    //        tx => console.log(tx));
    //}

    private getPollInfo(pollId: number) {
        this.trustyPollService.getPollById(pollId).subscribe(title => {
            if (/^\s*$/.test(title)) {
                return;
            }

            debugger;

            this.poll.id = pollId;
            this.poll.title = title;
            this.poll.options = [];

            const firstOptionIndex = 0;
            this.populateNextOption(pollId, firstOptionIndex);
        });
    }

    private populateNextOption(pollId: number, optionIndex: number) {
        this.trustyPollService.getPollOptionId(pollId, optionIndex).subscribe(optionId => {
            if (optionId === 0) {
                const pollVotesCount = this.poll.options.map(o => o.votesCount).reduce((sum, element) => sum + element);
                this.poll.votesCount = pollVotesCount;
                this.poll.options.forEach(element => element.percentage = element.votesCount / pollVotesCount * 100);
                return;
            }

            this.trustyPollService.getPollOptionTitle(pollId, optionIndex).subscribe(optionTitle => {
                if (/^\s*$/.test(optionTitle)) {
                    return;
                }

                this.trustyPollService.getOptionVotesCount(pollId, optionId).subscribe(votesCount => {
                    this.identityService.getAddress().subscribe(addrtess => {
                        this.trustyPollService.getUserVotedOptionForPoll(pollId, addrtess).subscribe(userOption => {
                            var optionObj: any = { title: optionTitle, id: optionId, votesCount };
                            if (userOption === optionId) {
                                optionObj.userVote = true;
                            }
                            this.poll.options.push(optionObj);
                            const nextOptionIndex = optionIndex + 1;
                            this.populateNextOption(pollId, nextOptionIndex);
                        });
                    });
                });
            });
        });
    }
}
