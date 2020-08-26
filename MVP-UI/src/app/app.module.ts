import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuterLayoutComponent } from './outer-layout/outer-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
 //import  { MenubarModule} from './customprimengmodules/menubar/public_api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
//import {TieredMenuModule} from 'primeng/tieredmenu';
import {TieredMenuModule} from './customprimengmodules/tieredmenu/public_api';
import { DashboardComponent } from './outer-layout/dashboard/dashboard.component';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import {TableModule} from 'primeng/table';
import {TableModule} from './customprimengmodules/table/public_api';
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
import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { ContractTypeComponent } from './outer-layout/setup/contract-type/contract-type.component';
import { ContracttypeListComponent } from './outer-layout/setup/contract-type/contracttype-list/contracttype-list.component';
import { ContracttypeFormComponent } from './outer-layout/setup/contract-type/contracttype-form/contracttype-form.component';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {ChipsModule} from 'primeng/chips';
import {CheckboxModule} from 'primeng/checkbox';





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
    ContractTypeComponent,
    ContracttypeListComponent,
    ContracttypeFormComponent,

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
    TooltipModule,
    DropdownModule,
    EditorModule,
    ScrollPanelModule,
    TabViewModule,
    AccordionModule,
    ChipsModule,
    CheckboxModule
   
    // MenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
