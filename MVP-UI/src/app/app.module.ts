import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuterLayoutComponent } from './outer-layout/outer-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
// import  { MenubarModule} from 'customprimeng/menubar/public_api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { DashboardComponent } from './outer-layout/dashboard/dashboard.component';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import { SetupComponent } from './outer-layout/setup/setup.component';
import { NotificationsComponent } from './outer-layout/setup/notifications/notifications.component';
import { NotificationListComponent } from './outer-layout/setup/notifications/notification-list/notification-list.component';
import { NotificationFormComponent } from './outer-layout/setup/notifications/notification-form/notification-form.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ListboxModule} from 'primeng/listbox';
import {TooltipModule} from 'primeng/tooltip';





// import {MenuItem} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    OuterLayoutComponent,
    DashboardComponent,
    SetupComponent,
    NotificationsComponent,
    NotificationListComponent,
    NotificationFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   MenubarModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    TieredMenuModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ChartModule,
    ToggleButtonModule,
    MultiSelectModule,
    InputTextareaModule,
    ListboxModule,
    TooltipModule
    // MenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
