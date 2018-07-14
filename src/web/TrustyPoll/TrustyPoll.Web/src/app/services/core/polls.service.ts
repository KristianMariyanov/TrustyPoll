import { Injectable } from '@angular/core';

import { TrustyPollService } from '../eth/trusty-poll.service';
import { IdentityService } from './identity.service';

@Injectable()
export class PollsService {

    constructor(
        private trustyPollService: TrustyPollService,
        private identityService: IdentityService) { }

    public getPollInfo(pollId: number, poll: any) {
        this.trustyPollService.getPollById(pollId).subscribe(title => {
            this.trustyPollService.getPollAuthor(pollId).subscribe(author => {
                if (/^\s*$/.test(title)) {
                    return;
                }

                poll.id = pollId;
                poll.title = title;
                poll.author = author.toLowerCase();
                poll.options = [];

                const firstOptionIndex = 0;
                this.populateNextOption(pollId, firstOptionIndex, poll);
            });
        });
    }

    public populateAllPolls(polls: any[]) {
        const firstPollId = 1;
        this.getNextPoll(firstPollId, polls);
    }

    private getNextPoll(pollId: number, polls: any[]) {
        this.trustyPollService.getPollById(pollId).subscribe(title => {
            if (/^\s*$/.test(title)) {
                return;
            }

            polls.push({ id: pollId, title });
            const nextPollId = pollId + 1;
            this.getNextPoll(nextPollId, polls);
        });
    }

    private populateNextOption(pollId: number, optionIndex: number, poll: any, ) {
        this.trustyPollService.getPollOptionId(pollId, optionIndex).subscribe(optionId => {
            if (optionId === 0) {
                const pollVotesCount = poll.options.length && poll.options.map(o => o.votesCount).reduce((sum, element) => sum + element);
                poll.votesCount = pollVotesCount;
                poll.options.forEach(element => element.percentage = (element.votesCount / pollVotesCount * 100) || 0);
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
                            poll.options.push(optionObj);
                            const nextOptionIndex = optionIndex + 1;
                            this.populateNextOption(pollId, nextOptionIndex, poll);
                        });
                    });
                });
            });
        });
    }
}
