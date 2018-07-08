import { Component, OnInit } from '@angular/core';

import {
    IdentityService
} from '../../services/index';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {

    constructor(
        private identityService: IdentityService) {
    }

    public imgUrl = '';
    public isLoggedIn;
    public user;


    ngOnInit() {
        this.identityService.getAddress().subscribe(address => this.user = address);
        this.identityService.isLoggedIn().subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    }
}
