import {Routes} from '@angular/router';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
@Component{
    selector: 'app-user';
    template: ``;
}
export const  appConfig: ApplicationConfig = {
  providers: [providerRouter(riutes)]  
};