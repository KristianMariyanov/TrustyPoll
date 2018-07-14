import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TrustyPollService, NotificationsService } from '../../services/index'

@Component({
    templateUrl: './option-create.component.html',
    styleUrls: ['./option-create.component.css']
})
export class OptionCreateComponent implements OnInit{

    constructor(
        private router: Router,
        private trustyPollService: TrustyPollService,
        private activatedRoute: ActivatedRoute) { }

    public option: any = {};
    public pollId: any = {};

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.pollId = params['id'];
        });
    }

    public create() {
        if (this.option.title) {
            NotificationsService.confirm(
                `Are you sure you want to create option with title: ${this.option.title}`,
                () => this.trustyPollService.createOption(this.pollId, this.option.title, 50).subscribe(tx => {
                    NotificationsService.success('You successfully added option to this poll.');
                    this.option = {};
                    this.router.navigate(['/poll-details/' + this.pollId]);
                }));
        } else {
            NotificationsService.error('Invalid Title');
        }
        
    }
}
