import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contracttask: any[];
  scrollableCols: any[];
  data: any;
  data1: any;
  data2: any;
  data3: any;

 constructor() {
   // Bar Chart
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }      //  end-of-data as bar_chart in secondRow dashboard
  // Circle/ Doughnut_chart_1
  this.data1 = {
    labels: ['A','B','C', 'D', 'E'],
    datasets: [
        {
            data: [200, 170, 120, 80, 50],
            backgroundColor: [
                "#FF6384",
                "#FFCE56",
                "#36A2EB",
                "#8AE873",
                "#9F9E95"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#FFCE56",
                "#36A2EB",
                "#8AE873",
                "#9F9E95"
               
            ]
        }]    
    };    // end-of-dought_chart1_col_1 in 3rd_Row
  this.data2 = {
    // labels: ['A','B','C', 'D', 'E', 'F'],
    datasets: [
        {
            data: [100, 90, 80, 60, 40, 15],
            backgroundColor: [
                "#BCF1EC",
                "#9274E1",
                "#ADACAF",
                "#F4ED19",
                "#ADE2A0",
                "#147BAF"
            ],
            hoverBackgroundColor: [
                "#BCF1EC",
                "#9274E1",
                "#ADACAF",
                "#F4ED19",
                "#ADE2A0",
                "#147BAF"
            ]
        }]    
    };     //end of data2 piechart2 col_2 in 3rd_Row
  this.data3 = {
    labels: ['A','B','C'],
    datasets: [
        {
            // data: [130, 180, 200,],
            data: [27.45, 35.26, 38.07,],
            backgroundColor: [
                "#F933FF",
                "#A10B08",
                "#0A1C76",
            ],
            hoverBackgroundColor: [
                "#F933FF",
                "#A10B08",
                "#0A1C76",
            ]
        }]    
    };    //end-of data3 doughnut_chart3 col_3 in 3rd_Row
   }   //  end-of-constructor-bracket

  ngOnInit(): void {
    this.contracttask =  [
      {"Subject": "Approval request assigned for CRN12345", "image": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg"},
      {"Subject": "Approval request assigned for CRN12345", "image": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg"},
      {"Subject": "Approval request assigned for CRN12345","image": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg"},
      {"Subject": "Approval request assigned for CRN12345", "image": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg"},
      {"Subject": "Approval request assigned for CRN12345", "image": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg"},
      {"Subject": "Approval request assigned for CRN12345", "image": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg"},
      {"Subject": "Approval request assigned for CRN12345", "image": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg"},
      {"Subject": "Approval request assigned for CRN12345","image": "dist/SundeusCLMImg/List Page icons/Viewlatest.svg"}

      // {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
   
    //   {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
  ];
this.scrollableCols = [
      { field: 'Subject', header: 'Subject' },
      { field: 'image', header: 'Action' }
];

  }    //end bracket of void

}    // end bracket_of_Oninit
