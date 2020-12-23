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
import { SummaryComponent } from './outer-layout/contract/contract-form/contract-form-validate/summary/summary.component';
import { DetailsComponent } from './outer-layout/contract/contract-form/contract-form-validate/details/details.component';
import { TeamsComponent } from './outer-layout/contract/contract-form/contract-form-validate/teams/teams.component';
import { ValidateClauseComponent } from './outer-layout/contract/contract-form/contract-form-validate/validate-clause/validate-clause.component';
import { SupportingDocComponent } from './outer-layout/contract/contract-form/contract-form-validate/supporting-doc/supporting-doc.component';
import { ObligationsComponent } from './outer-layout/contract/contract-form/contract-form-validate/obligations/obligations.component';
import { HistoryComponent } from './outer-layout/contract/contract-form/contract-form-validate/history/history.component';
import { NotesComponent } from './outer-layout/contract/contract-form/contract-form-validate/notes/notes.component';
import { AuditLogComponent } from './outer-layout/contract/contract-form/contract-form-validate/history/audit-log/audit-log.component';
import { VersionComponent } from './outer-layout/contract/contract-form/contract-form-validate/history/version/version.component';
import { ApproverComponent } from './outer-layout/contract/contract-form/contract-form-validate/teams/approver/approver.component';
import { ReviewerComponent } from './outer-layout/contract/contract-form/contract-form-validate/teams/reviewer/reviewer.component';
import { UserMgmtComponent } from './outer-layout/user-mgmt/user-mgmt.component';
import { UsersComponent } from './outer-layout/user-mgmt/users/users.component';
import { RoleComponent } from './outer-layout/user-mgmt/role/role.component';
import { UsersListComponent } from './outer-layout/user-mgmt/users/users-list/users-list.component';
import { UserFormComponent } from './outer-layout/user-mgmt/users/user-form/user-form.component';
import { RoleListComponent } from './outer-layout/user-mgmt/role/role-list/role-list.component';
import { RoleFormComponent } from './outer-layout/user-mgmt/role/role-form/role-form.component';
import { RolesComponent } from './outer-layout/user-mgmt/role/role-form/roles/roles.component';
import { PermissionsComponent } from './outer-layout/user-mgmt/role/role-form/permissions/permissions.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
{path: 'login' , component: LoginComponent},
  { 
    path: 'app', component: OuterLayoutComponent,
    children:[
      { path : '', redirectTo: '/app/dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'contract', component: ContractComponent,
      children: [
        { path: 'list', component: ContractListComponent },
        { path: 'form', component: ContractFormComponent,
        children: [
          { path: '' , redirectTo: 'step1', pathMatch: 'full'},
          { path: 'step1', component: ContractFormContractTypeComponent },
          { path: 'step2', component: ContractFormEnterDataComponent },
          { path: 'step3', component: ContractFormContractTemplateComponent },
          { path: 'step4', component: ContractFormValidateComponent,
          children: [
            { path: '', redirectTo: 'summary', pathMatch: 'full' },
            { path: 'summary', component: SummaryComponent },
            { path: 'details', component: DetailsComponent },
            { path: 'teams', component: TeamsComponent,
            children: [
              { path: '', redirectTo: 'reviewer', pathMatch: 'full' },
              { path: 'reviewer', component: ReviewerComponent },
              { path: 'approver', component: ApproverComponent },
            ]
           },
            { path: 'validateclause', component: ValidateClauseComponent },
            { path: 'document', component: SupportingDocComponent },
            { path: 'obligations', component: ObligationsComponent },
            { path: 'history', component: HistoryComponent,
            children: [
              { path: '', redirectTo: 'auditlog', pathMatch: 'full' },
              { path: 'auditlog', component: AuditLogComponent },
              { path: 'version', component: VersionComponent },
            ]
           },
            { path: 'notes', component: NotesComponent },
          ]
        },
        ]
       },
      ]
     },

     { path: 'usermgmt', component: UserMgmtComponent,
     children: [
      { path: 'users', component: UsersComponent,
      children: [
        { path: 'list', component: UsersListComponent },
        { path: 'form', component: UserFormComponent },
      ]
    },
      { path: 'role', component: RoleComponent,
      children: [
        { path: 'list', component: RoleListComponent },
        { path: 'form', component: RoleFormComponent,
        children: [
          { path: 'createrole', component: RolesComponent },
          { path: 'permission', component: PermissionsComponent },
        ]
       },
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
