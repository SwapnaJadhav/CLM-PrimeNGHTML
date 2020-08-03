import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';


@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  customtabledata: any[];
  cols: any[];
  first = 0;
  rows = 10;
 

  constructor() { }    // end bracket of Constructor() Method

  ngOnInit(): void {
    this.customtabledata = [
      {"Notification Name": "Submit For Approval", "ID": 1111, "checked": false, "Type": "Action Based", "Object Name": "Contract", "Created By": "Admin", "Created On": "23/04/21", "Status": "", "image": "dist/SundeusCLMImg/List Page icons/Editlatest.svg","image1": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg","image2": "dist/SundeusCLMImg/List Page icons/Deletelatest.svg"},
      {"Notification Name": "Submit For Review", "ID": 1111, "checked": false,"Type": "Action Based", "Object Name": "Contract", "Created By": "Admin", "Created On": "23/04/21", "Status": "", "image": "dist/SundeusCLMImg/List Page icons/Editlatest.svg","image1": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg","image2": "dist/SundeusCLMImg/List Page icons/Deletelatest.svg"},
      {"Notification Name": "Approved", "ID": 1111,"checked": false, "Type": "Action Based", "Object Name": "Contract", "Created By": "Admin", "Created On": "23/04/21", "Status": "", "image": "dist/SundeusCLMImg/List Page icons/Editlatest.svg","image1": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg","image2": "dist/SundeusCLMImg/List Page icons/Deletelatest.svg"},
      {"Notification Name": "Sent For Signature", "ID": 1111,"checked": false, "Type": "Action Based", "Object Name": "Contract", "Created By": "Admin", "Created On": "23/04/21", "Status": "", "image": "dist/SundeusCLMImg/List Page icons/Editlatest.svg","image1": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg","image2": "dist/SundeusCLMImg/List Page icons/Deletelatest.svg"},
      {"Notification Name": "Reviewed", "ID": 1111,"checked": false, "Type": "Action Based", "Object Name": "Contract", "Created By": "Admin", "Created On": "23/04/21", "Status": "", "image": "dist/SundeusCLMImg/List Page icons/Editlatest.svg","image1": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg","image2": "dist/SundeusCLMImg/List Page icons/Deletelatest.svg"},
      {"Notification Name": "Completed Review", "ID": 1111,"checked": false, "Type": "Action Based", "Object Name": "Contract", "Created By": "Admin", "Created On": "23/04/21", "Status": "", "image": "dist/SundeusCLMImg/List Page icons/Editlatest.svg","image1": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg","image2": "dist/SundeusCLMImg/List Page icons/Deletelatest.svg"},
      {"Notification Name": "Declined Review", "ID": 1111,"checked": false, "Type": "Action Based", "Object Name": "Contract", "Created By": "Admin", "Created On": "23/04/21", "Status": "", "image": "dist/SundeusCLMImg/List Page icons/Editlatest.svg","image1": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg","image2": "dist/SundeusCLMImg/List Page icons/Deletelatest.svg"},
      {"Notification Name": "Submit For Approval", "ID": 1111, "checked": false,"Type": "Action Based", "Object Name": "Contract", "Created By": "Admin", "Created On": "23/04/21", "Status": "", "image": "dist/SundeusCLMImg/List Page icons/Editlatest.svg","image1": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg","image2": "dist/SundeusCLMImg/List Page icons/Deletelatest.svg"},
      {"Notification Name": "Completed Sidgnature", "ID": 1111,"checked": false, "Type": "Action Based", "Object Name": "Contract", "Created By": "Admin", "Created On": "23/04/21", "Status": "", "image": "dist/SundeusCLMImg/List Page icons/Editlatest.svg","image1": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg","image2": "dist/SundeusCLMImg/List Page icons/Deletelatest.svg"},
      {"Notification Name": "Completed Approval", "ID": 1111,"checked": false, "Type": "Action Based", "Object Name": "Contract", "Created By": "Admin", "Created On": "23/04/21", "Status": "", "image": "dist/SundeusCLMImg/List Page icons/Editlatest.svg","image1": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg","image2": "dist/SundeusCLMImg/List Page icons/Deletelatest.svg"},
      {"Notification Name": "Expired", "ID": 1111, "checked": false,"Type": "Action Based", "Object Name": "Contract", "Created By": "Admin", "Created On": "23/04/21", "Status": "", "image": "dist/SundeusCLMImg/List Page icons/Editlatest.svg","image1": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg","image2": "dist/SundeusCLMImg/List Page icons/Deletelatest.svg"}
  ];
    this.cols = [
      { field: 'Notification Name', header: 'Notification Name' },
      { field: 'ID', header: 'ID' },
      { field: 'Type', header: 'Type' },
      { field: 'Object Name', header: 'Object Name'},
      { field: 'Created By', header: 'Created By'},
      { field: 'Created On', header: 'Created On'},
      { field: 'Status', header: 'Status'},
      { field: 'image', header: 'Action'}
  ];
  }  // end bracket of ngOnInit() Method
  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
} // end bracket of customSort method() 

// Start pagination section code
 next() {
  this.first = this.first + this.rows;
}
prev() {
  this.first = this.first - this.rows;
}
reset() {
  this.first = 0;
}
isLastPage(): boolean {
  return this.first === (this.customtabledata.length - this.rows);
}
isFirstPage(): boolean {
  return this.first === 0;
}
// end pagination

}         // end bracket of export class 
