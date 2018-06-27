import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  cards = [
    [
      {
        title: 'Observer',
        heading: 'An example of using Observers and Subjects',
        name: 'observers',
        project: 'anguar-observer'
      },
      {
        title: 'Http Client',
        heading: 'An example of using Observers and Subjects',
        name: 'http-client',
        project: 'angular-http-client'
      },
      {
        title: 'Routing',
        heading: 'An example of using Observers and Subjects',
        name: 'routing',
        project: 'angular-routing'
      }
    ],
    [
      {
        title: 'RabbitMQ',
        heading: 'An example of using Observers and Subjects',
        name: 'rabbitmq',
        project: 'angular-rabbitmq'
      },
      {
        title: 'Leaflet Mapper',
        heading: 'An example of using Observers and Subjects',
        name: 'leaflet-mapper',
        project: 'angular-leaflet-mapper'
      },
    ],
  ];
  constructor() { }

  ngOnInit() {
  }

}
