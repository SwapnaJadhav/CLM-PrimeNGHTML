import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';


@Component({
  selector: 'app-outer-layout',
  templateUrl: './outer-layout.component.html',
  styleUrls: ['./outer-layout.component.css']
})
export class OuterLayoutComponent implements OnInit {
constructor() { }

  items: MenuItem[];
  visibleSidebar1;

  sidemenuitem : MenuItem[];
  

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
          icon: 'pi pi-fw pi-user',
          items: [
              {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {label: 'Save', icon: 'pi pi-fw pi-save'},
                      {label: 'Update', icon: 'pi pi-fw pi-save'},
                  ]
              },
              {
                  label: 'Other',
                  icon: 'pi pi-fw pi-tags',
                  items: [
                      {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                  ]
              }
          ]
      },
      {separator:true},
      {
           icon: 'pi pi-fw pi-question-circle'
      }
  ];
  
//   visibleSidebar1;
  this.sidemenuitem = [
    {label: 'Dashboard', icon: 'pi pi-fw pi-plus'},
    {separator:true},

    {label: 'Contract', icon: 'pi pi-fw pi-download'},
    {separator:true},

    {label: 'Reports', icon: 'pi pi-fw pi-refresh'},
    {separator:true},

    {label: 'Search', icon: 'pi pi-fw pi-download'},
    {separator:true},
    {label: 'User Management', icon: 'pi pi-fw pi-download'},
    {separator:true},
    {label: 'SetUp', icon: 'pi pi-fw pi-download'},

    
];

}

}
