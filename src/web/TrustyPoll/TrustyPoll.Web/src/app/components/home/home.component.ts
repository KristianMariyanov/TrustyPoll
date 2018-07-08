import { Component } from '@angular/core';

import { TrustyPollService } from '../../services/index'

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private trustyPollService: TrustyPollService) { }

    createPoll() {
        const title = 'title';
        const gas = 30;
        this.trustyPollService.createPoll(title, gas).subscribe(tx => console.log(tx));
    }
}
