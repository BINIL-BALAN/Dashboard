import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.css']
})
export class WidgetChartComponent {
  Highcharts=Highcharts
  chartOptions:any={}
  constructor(){
    this.chartOptions={
      chart: {
          type: 'spline'
      },
      title: {
          text: 'Sample chart'
      },
      subtitle: {
          text: 'Source: ' +
              '<a href="#" ' +
              'target="_blank">Luminar technolab</a>'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          accessibility: {
              description: 'Months of the year'
          }
      },
      yAxis: {
          title: {
              text: 'Placements'
          },
      },
      tooltip: {
          crosshairs: true,
          shared: true
      },
      plotOptions: {
          spline: {
              marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 1
              }
          }
      },
      series: [{
          name: 'MEARN',
          marker: {
              symbol: 'square'
          },
          data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0,26.4, 22.8, 17.5, 12.1, 7.6]
  
      }, {
          name: 'Data science',
          marker: {
              symbol: 'diamond'
          },
          data: [1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
      },
      {
        name: 'Flutter',
        marker: {
            symbol: 'circle'
        },
        data: [1.6, 4.3, 10.9, 9.5, 15.5, 14.5, 12.4, 10.5, 15.7, 15.7, 2.6]
    }]
  },
  HC_exporting(Highcharts);
  }
}

