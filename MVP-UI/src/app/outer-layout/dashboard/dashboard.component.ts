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
  options: any;
  data1: any;
  // options1: any;
  data2: any;
  data3: any;


 constructor() {
   // Bar Chart
  this.data = {
    labels: ['Consulting', 'MSA', 'NDA', 'NDVA', 'SOW', 'VA', 'DA'],
    datasets: [
        {
            label: 'My First dataset',
            // backgroundColor: '#42A5F5',
            backgroundColor: ['#42A5F5',
                          "#9966FF",  
                         "#4C4CFF",  
                         "#00FFFF",  
                         "#f990a7",
                         "#F39C12",
                        "#FF6347"
                      ],
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
}                                  //  end-of-data as bar_chart in secondRow dashboard
//  this.options = {
//   legend: {
//         position: 'top'
//     }
//   };

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

    // Circle/pie_chart_2
  this.data2 = {
    labels: ['A','B','C', 'D', 'E', 'F'],
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
    
    // Circle/ Doughnut_chart_3
  this.data3 = {
    labels: ['A','B','C'],
    datasets: [
        {
        
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
   }   //  end-of-constructorMethod-bracket

  ngOnInit(): void {
    this.contracttask =  [
      {"Subject": "CRN12345"},
      {"Subject": "CRN12345"},
      {"Subject": "CRN12345"},
      {"Subject": "CRN12345"},
      {"Subject": "CRN12345"},
      {"Subject": "CRN12345"},
      {"Subject": "CRN12345"},
      {"Subject": "CRN12345"},
      {"Subject": "CRN12345"}
    
  ];
this.scrollableCols = [
      { field: 'Subject', header: 'Subject' },
      { field: 'image', header: 'Action' }
];

  }    //end bracket of void()_method

}    // end bracket_of_Oninit
