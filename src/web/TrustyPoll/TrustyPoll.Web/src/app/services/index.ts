import { AppService } from './core/app.service';
import { DateTimeService } from './core/datetime.service';
import { GridService } from './core/grid.service';
import { HttpService } from './core/http.service';
import { IdentityService } from './core/identity.service';
import { LoaderService } from './core/loader.service';
import { LoggerService } from './core/logger.service';
import { NotificationsService } from './core/notifications.service';
import { RouterService } from './core/router.service';
import { StorageService } from './core/storage.service';
import { UtilsService } from './core/utils.service';
import { PollsService } from './core/polls.service';
import { Web3Service } from './eth/web3.service';
import { TrustyPollService } from './eth/trusty-poll.service';

export * from './core/app.service';
export * from './core/datetime.service';
export * from './core/grid.service';
export * from './core/http.service';
export * from './core/identity.service';
export * from './core/loader.service';
export * from './core/logger.service';
export * from './core/notifications.service';
export * from './core/router.service';
export * from './core/storage.service';
export * from './core/utils.service';
export * from './core/polls.service';
export * from './eth/web3.service';
export * from './eth/trusty-poll.service';

export const APP_SERVICES = [
    AppService,
    DateTimeService,
    GridService,
    HttpService,
    IdentityService,
    LoaderService,
    LoggerService,
    NotificationsService,
    RouterService,
    StorageService,
    UtilsService,
    PollsService,
    Web3Service,
    TrustyPollService
];
