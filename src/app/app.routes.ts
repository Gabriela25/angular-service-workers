import { Routes } from '@angular/router';
import { NotificationComponent } from './page/notification/notification.component';

export const routes: Routes = [

    {
        path:'notification',
        component: NotificationComponent
    },
    {
        path:'',
        redirectTo:'notification',
        pathMatch:'full'
    },{
        path:'**',
        redirectTo:'notification',
        pathMatch:'full'
    }
];
