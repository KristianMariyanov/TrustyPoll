import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import { TrustyPollService, NotificationsService, UtilsService } from '../../services/index'
//import { IpfsApi } from '../../../typings';

@Component({
    templateUrl: './poll-create.component.html',
    styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent {

    constructor(
        private router: Router,
        private trustyPollService: TrustyPollService) { }

    public poll: any = {};

    public create() {
        if (this.poll.title) {
            NotificationsService.confirm(
                `Are you sure you want to create poll with title: ${this.poll.title}. This will cost you ${
                TrustyPollService.FEE_NUMBER} TRT Tokens?`,
                () => this.trustyPollService.createPoll(this.poll.title, 50).subscribe(tx => {
                    console.log(tx);
                    this.router.navigate(['/polls']);
                }));
        } else {
            NotificationsService.error('Invalid Title');
        }

        //this.uploadPollImage(this.poll.image).subscribe(a => console.log(a));
    }

    public uploadPollImage(file) {
        if (!window['IpfsApi']) {
            Observable.empty();
        }

        const ipfs = window['IpfsApi']('localhost', '5001');
        const buffer = ipfs.buffer;

        return UtilsService.observableFromCb(done => {
            var reader = new FileReader();

            reader.onload = () => {
                const fileBuffer = buffer.from(reader.result);
                return ipfs.files.add(fileBuffer,
                    (err, result) => {
                        if (err) {
                            done(false, err);
                            return;
                        }

                        if (result && result.length) {
                            done(true, result[0].hash);
                        }
                    });
            }

            reader.readAsArrayBuffer(file);
        });
    }
}
