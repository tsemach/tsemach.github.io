import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-python-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class PythonDescriptionComponent implements OnInit {
  @Input() code = '';

  constructor() { }

  ngOnInit() {
  }

}
