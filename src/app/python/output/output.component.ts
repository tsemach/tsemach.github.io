import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-python-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class PythonOutputComponent implements OnInit {
  @Input() code = '';

  constructor() { }

  ngOnInit() {
  }

}
