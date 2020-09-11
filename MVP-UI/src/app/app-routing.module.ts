import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuterLayoutComponent } from './outer-layout/outer-layout.component';
import { DashboardComponent } from './outer-layout/dashboard/dashboard.component';
import { SetupComponent } from './outer-layout/setup/setup.component';
import { NotificationsComponent } from './outer-layout/setup/notifications/notifications.component';
import { NotificationListComponent } from './outer-layout/setup/notifications/notification-list/notification-list.component';
import { NotificationFormComponent } from './outer-layout/setup/notifications/notification-form/notification-form.component';
import { ContractTypeComponent } from './outer-layout/setup/contract-type/contract-type.component';
import { ContracttypeListComponent } from './outer-layout/setup/contract-type/contracttype-list/contracttype-list.component';
import { ContracttypeFormComponent } from './outer-layout/setup/contract-type/contracttype-form/contracttype-form.component';
import { ClausesComponent } from './outer-layout/setup/clauses/clauses.component';
import { ClausesListComponent } from './outer-layout/setup/clauses/clauses-list/clauses-list.component';
import { AddclauseFormComponent } from './outer-layout/setup/clauses/addclause-form/addclause-form.component';
import { TemplatesComponent } from './outer-layout/setup/templates/templates.component';
import { TemplatesListComponent } from './outer-layout/setup/templates/templates-list/templates-list.component';
import { OrganisationDetailsComponent } from './outer-layout/setup/organisation-details/organisation-details.component';
import { OrganisationdetailsFormComponent } from './outer-layout/setup/organisation-details/organisationdetails-form/organisationdetails-form.component';
import { ContractComponent } from './outer-layout/contract/contract.component';
import { ContractListComponent } from './outer-layout/contract/contract-list/contract-list.component';
import { ContractFormComponent } from './outer-layout/contract/contract-form/contract-form.component';
import { ContractFormContractTypeComponent } from './outer-layout/contract/contract-form/contract-form-contract-type/contract-form-contract-type.component';
import { ContractFormEnterDataComponent } from './outer-layout/contract/contract-form/contract-form-enter-data/contract-form-enter-data.component';
import { ContractFormContractTemplateComponent } from './outer-layout/contract/contract-form/contract-form-contract-template/contract-form-contract-template.component';
import { ContractFormValidateComponent } from './outer-layout/contract/contract-form/contract-form-validate/contract-form-validate.component';


const routes: Routes = [
  { 
    path: 'app', component: OuterLayoutComponent,
    children:[
      { path: 'dashboard', component: DashboardComponent },
      { path: 'contract', component: ContractComponent,
      children: [
        { path: 'list', component: ContractListComponent },
        { path: 'form', component: ContractFormComponent,
        children: [
          { path: '' , redirectTo: 'step1', pathMatch: 'full'},
          { path: 'step1', component: ContractFormContractTypeComponent },
          { path: 'step2', component: ContractFormEnterDataComponent },
          { path: 'contract-form-contract-template', component: ContractFormContractTemplateComponent },
          { path: 'contract-form-validate', component: ContractFormValidateComponent },
        ]
       },
      ]
     },

      { path: 'setup', component: SetupComponent ,
      children: [
        { path: 'notifications', component: NotificationsComponent,
        children: [
          { path: 'list', component: NotificationListComponent },
          { path: 'form', component: NotificationFormComponent },
        ] 
      },
      { path: 'contract-type', component: ContractTypeComponent,
        children: [
          { path: 'list', component: ContracttypeListComponent },
          { path: 'form', component: ContracttypeFormComponent },
        ] 
      },
      { path: 'clauses', component: ClausesComponent,
      children: [
        { path: 'list', component: ClausesListComponent },
        { path: 'create', component: AddclauseFormComponent },
        { path: 'editclause', component: AddclauseFormComponent },
      ] 
    },
    { path: 'templates', component: TemplatesComponent,
    children: [
      { path: 'list', component: TemplatesListComponent },
    ] 
  },
  { path: 'organisation-details', component: OrganisationDetailsComponent,
  children: [
    { path: 'form', component: OrganisationdetailsFormComponent },
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
