import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
// import  { MenubarModule} from 'customprimeng/menubar/public_api';
import {SidebarModule} from 'primeng/sidebar';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-outer-layout',
  templateUrl: './outer-layout.component.html',
  styleUrls: ['./outer-layout.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OuterLayoutComponent implements OnInit {
constructor() { }

  items: MenuItem[];
  visibleSidebar1 = false;
  sundeussidemenu: MenuItem[];
  

ngOnInit(): void {
    this.items = [
      {
        icon: "Sundeusheaderlogo"
    },
      {separator:true},

      {
        icon: 'fa fa-bell',
        styleClass: 'downarrowiconremove',
          items: [{
                  label: 'Notifications',
                },
              {label: 'Open'},
              {separator:true},
              {label: 'Quit'}
          ]
      },
      {separator:true},
    
      {
          label: 'John Doe',
          // sublabel: 'Sundeus Technology',
          icon: 'SundeusLogout',
          items: [
              {
                  label: 'User Preferences',
                  icon: 'fa fa-user-circle-o',
                  // items: [
                  //     {label: 'Save', icon: 'pi pi-fw pi-save'},
                  //     {label: 'Update', icon: 'pi pi-fw pi-save'},
                  // ]
              },
              {
                  label: 'Customize Dashboard',
                  icon: 'fa fa-cog',
                 
              },
              {
                label: 'Change Password',
                icon: 'fa fa-lock',
              
            },
            {
              label: 'Logout',
              icon: 'fa fa-power-off',
             
          }
          ]
      },
      {separator:true},
      {
           icon: 'fa fa-question-circle'
      }
  ];
  
// siderbar menu with tieredmenu
this.sundeussidemenu = [
  {
      label: 'Dashboard',
      styleClass: 'expandcontent',
      icon: 'dashimg',
      routerLink: ['/app/dashboard'],
      // routerLinkActive: 'active'
},
  {separator:true},
  {
      label: 'Contracts',
      styleClass: 'expandcontent',
      icon: 'contractimg',
      
  },
  {separator:true},
  {
    label: 'Reports',
    styleClass: 'expandcontent',
    icon: 'reportsimag',
    
},
{separator:true},
{
  label: 'Search',
  styleClass: 'expandcontent',
  icon: 'pi pi-fw pi-search-plus',
  
},
{separator:true},
{
  label: 'User Management',
  styleClass: 'expandcontent',
  icon: 'usermtimg',
items: [
      {label: 'Users'},
      {separator:true},
      {label: 'Role & permissions'}
  ]
},
{separator:true},
{
  label: 'Setup',
  styleClass: 'expandcontent',
  icon: 'setupimg',
  // routerLink: ['/app/setup/notifications/notification-list'],
  items: [
      {label: 'Alerts & Notification', routerLink: ['/app/setup/notifications/notification-list'] },
      {separator:true},
      {label: 'Contract Type', routerLink: ['/app/setup/contract-type/contracttype-list'] },
      {separator:true},
      {label: 'Clauses'},
      {separator:true},
      {label: 'Templates'},
      {separator:true},
      {label: 'Organisation Details'},

  ]
},
{separator:true},

];

}

}
