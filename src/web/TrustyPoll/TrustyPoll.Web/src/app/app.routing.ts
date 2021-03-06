import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    HomeComponent,
    AllPollsComponent,
    PollDetailsComponent,
    PollCreateComponent,
    OptionCreateComponent,
    ProfileComponent,
    CreateAccountComponent,
    ImportAccountComponent,
} from './components/index';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'polls', component: AllPollsComponent },
    { path: 'poll-details/:id', component: PollDetailsComponent },
    { path: 'poll-create', component: PollCreateComponent },
    { path: 'option-create/:id', component: OptionCreateComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'import-account', component: ImportAccountComponent },

    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
