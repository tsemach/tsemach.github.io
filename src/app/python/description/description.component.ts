import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-python-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class PythonDescriptionComponent implements OnInit {
  @Input() description = '';

  config={
    mode: "text",
    // lineNumbers: false,
    // theme: "eclipse",
    // tabSize: 2,  
    readOnly: true    
  };

  constructor() { }

  ngOnInit() {
  }

}
