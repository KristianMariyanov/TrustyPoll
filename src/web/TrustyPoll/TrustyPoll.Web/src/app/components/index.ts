import { AppComponent } from './app.component';

import { FooterMenuComponent } from './footermenu/footermenu.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './navmenu/navmenu.component';

import { AllPollsComponent } from './polls/all-polls.component';
import { PollDetailsComponent } from './polls/poll-details.component';
import { PollCreateComponent } from './polls/poll-create.component';

import { OptionCreateComponent } from './options/option-create.component';

import { ProfileComponent } from './account/profile.component';
import { ImportAccountComponent } from './account/import.component';
import { CreateAccountComponent} from './account/create.component';

import { LoaderComponent } from './shared/loader/loader.component';
import { WizardComponent } from './shared/wizard/wizard.component';


export * from './app.component';

export * from './footermenu/footermenu.component';
export * from './home/home.component';
export * from './navmenu/navmenu.component';

export * from './polls/all-polls.component';
export * from './polls/poll-details.component';
export * from './polls/poll-create.component';

export * from './options/option-create.component';

export * from './account/profile.component';
export * from './account/import.component';
export * from './account/create.component';

export * from './shared/loader/loader.component';
export * from './shared/wizard/wizard.component';



export const APP_COMPONENTS = [
    AppComponent,

    FooterMenuComponent,
    HomeComponent,
    NavMenuComponent,
    AllPollsComponent,
    PollDetailsComponent,
    PollCreateComponent,
    OptionCreateComponent,
    ProfileComponent,
    CreateAccountComponent,
    ImportAccountComponent,

    LoaderComponent,
    WizardComponent
];
