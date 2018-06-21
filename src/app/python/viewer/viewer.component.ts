import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-python-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class PythonViewerComponent implements OnInit {

  filename: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.filename = this.route.snapshot.params['filename'];

    this.route.params.subscribe(
      (params: Params) => {
        console.log("PythonViewerComponent: file = " + params['filename']);
        this.filename = params['filename'];
      }
    )
  }

}
