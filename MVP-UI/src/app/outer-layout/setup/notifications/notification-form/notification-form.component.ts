import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-notification-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.css']
})
export class NotificationFormComponent implements OnInit {
  notificationtype: SelectItem[];
  contracttype: SelectItem[];
  triggerbasedon: SelectItem[];
  sendto: SelectItem[];
  ccto: SelectItem[];
  selectedCars1: string[] = [];
  dragmedatadalist: SelectItem[];
  selectedCar: string = 'BMW';



  constructor() {
    this.notificationtype = [
      {label: 'Action Based', value: 'Action Based'},
      {label: 'Event Based', value: 'Event Based'},
      {label: 'All', value: 'All'},
   ];    //  end of Notification_Type Multiselect1
   this.contracttype = [
    {label: 'All', value: 'All'},
    {label: 'NDA', value: 'NDA'},
    {label: 'SOW', value: 'SOW'},
    {label: 'MSA', value: 'MSA'},
    {label: 'Offer Letter', value: 'Offer Letter'},
 ];    //  end of Contract_Type_Multiselect2
 this.triggerbasedon = [
  {label: 'All', value: 'All'},
  {label: 'Approval Submission', value: 'Approval Submission'},
  {label: 'Review Submission', value: 'Review Submission'},
  {label: 'Approved', value: 'Approved'},
  {label: 'Sent for Signature', value: 'Sent for Signature'},
  {label: 'Completed Review', value: 'Completed Review'},
  {label: 'Declined review', value: 'Declined review'},
  {label: 'Completed Signature', value: 'Completed Signature'},
  {label: 'Expired', value: 'Expired'},
];    //  end of Trigeer_Multiselect3
this.sendto = [
  {label: 'All', value: 'All'},
  {label: 'swapnajadhav396@gmail.com', value: 'swapnajadhav396@gmail.com'},
  {label: 'rajesapna8448@gmail.com', value: 'rajesapna8448@gmail.com'},
  {label: 'satyamjoshi11@gmail.com', value: 'satyamjoshi11@gmail.com'},
  {label: 'dheerug@hotmail.com', value: 'dheerug@hotmail.com'},
  {label: 'yadav.sandeep1920@gmail.com', value: 'Completed Review'},
];    //  end of sendto_Multiselect4
this.ccto = [
  {label: 'All', value: 'All'},
  {label: 'swapnajadhav396@gmail.com', value: 'swapnajadhav396@gmail.com'},
  {label: 'rajesapna8448@gmail.com', value: 'rajesapna8448@gmail.com'},
  {label: 'satyamjoshi11@gmail.com', value: 'satyamjoshi11@gmail.com'},
  {label: 'dheerug@hotmail.com', value: 'dheerug@hotmail.com'},
  {label: 'yadav.sandeep1920@gmail.com', value: 'Completed Review'},
];    //  end of ccto_Multiselect5
this.dragmedatadalist = [
  {label: 'Audi', value: 'Audi'},
  {label: 'BMW', value: 'BMW'},
  {label: 'Fiat', value: 'Fiat'},
  {label: 'Ford', value: 'Ford'},
  {label: 'Honda', value: 'Honda'},
  {label: 'Jaguar', value: 'Jaguar'},
  {label: 'Mercedes', value: 'Mercedes'},
  {label: 'Renault', value: 'Renault'},
  {label: 'VW', value: 'VW'},
  {label: 'Volvo', value: 'Volvo'}
];   //  end of dragmedatadalist
}   //  end of construcor() method

  ngOnInit(): void {
  }

}
