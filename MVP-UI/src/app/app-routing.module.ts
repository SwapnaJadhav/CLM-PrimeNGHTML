import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuterLayoutComponent } from './outer-layout/outer-layout.component';
import { DashboardComponent } from './outer-layout/dashboard/dashboard.component';
import { SetupComponent } from './outer-layout/setup/setup.component';
import { NotificationsComponent } from './outer-layout/setup/notifications/notifications.component';
import { NotificationListComponent } from './outer-layout/setup/notifications/notification-list/notification-list.component';
import { NotificationFormComponent } from './outer-layout/setup/notifications/notification-form/notification-form.component';

 

const routes: Routes = [
  { 
    path: 'app', component: OuterLayoutComponent,
    children:[
      { path: 'dashboard', component: DashboardComponent },
      { path: 'setup', component: SetupComponent ,
      children: [
        { path: 'notifications', component: NotificationsComponent,
        children: [
          { path: 'notification-list', component: NotificationListComponent },
          { path: 'notification-form', component: NotificationFormComponent },
        ] 
      },
      ]
    },
    ]
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
