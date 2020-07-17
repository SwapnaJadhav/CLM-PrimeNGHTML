import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
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
  visibleSidebar1;
  sundeussidemenu: MenuItem[];
  

ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-fw pi-bell',
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
          // label: 'Sundeus Technology',
          icon: 'pi pi-fw pi-user',
          items: [
              {
                  label: 'User Preferences',
                  icon: 'pi pi-fw pi-user',
                  // items: [
                  //     {label: 'Save', icon: 'pi pi-fw pi-save'},
                  //     {label: 'Update', icon: 'pi pi-fw pi-save'},
                  // ]
              },
              {
                  label: 'Customize Dashboard',
                  icon: 'pi pi-fw pi-cog',
                 
              },
              {
                label: 'Change Password',
                icon: 'pi pi-fw pi-lock',
              
            },
            {
              label: 'Logout',
              icon: 'pi pi-fw pi-power-off',
             
          }
          ]
      },
      {separator:true},
      {
           icon: 'pi pi-fw pi-question-circle'
      }
  ];
  
// siderbar menu with tieredmenu
this.sundeussidemenu = [
  {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',

      // items: [{
      //         label: 'New', 
      //         icon: 'pi pi-fw pi-plus',
      //         items: [
      //             {label: 'Project'},
      //             {label: 'Other'},
      //         ]
      //     },
      //     {label: 'Open'},
      //     {label: 'Quit'}
      // ]
  },
  {separator:true},
  {
      label: 'Contracts',
      icon: 'pi pi-fw pi-file-o',
      // items: [
      //     {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      //     {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      // ]
  },
  {
    label: 'Reports',
    icon: 'pi pi-fw pi-file',
    // items: [
    //     {label: 'Delete', icon: 'pi pi-fw pi-trash'},
    //     {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
    // ]
},
{
  label: 'Search',
  icon: 'pi pi-fw pi-search-plus',
  // items: [
  //     {label: 'Delete', icon: 'pi pi-fw pi-trash'},
  //     {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
  // ]
},
{
  label: 'User Management',
  icon: 'pi pi-fw pi-file',
  items: [
      {label: 'Users'},
      {label: 'Role & permissions'}
  ]
},
{
  label: 'Setup',
  icon: 'pi pi-fw pi-cog',
  items: [
      {label: 'Alerts & Notification'},
      {label: 'Contract Type'},
      {label: 'Clauses'},
      {label: 'Templates'},
      {label: 'Organisation Details'},

  ]
}
];

}

}
