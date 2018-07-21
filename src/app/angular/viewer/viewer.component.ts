import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { AngularProjectNameService } from '../project/project-name.service';
import { CodeMirror } from 'codemirror';
import { ReadFileHttpClientService } from '../../services/read-file.httpclient.service';

@Component({
  selector: 'app-angular-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],  
})
export class AngularViewerComponent implements OnInit {
  code: string = '';
  description = '';
  output = '';  

  name: string;
  filename: string;

  config={
    mode: "javascript",
    lineNumbers: true,
    theme: "eclipse",
    tabSize: 2,  
    readOnly: true
  };

  fileIsReady = new Subject<string>();

  editor: CodeMirror.Editor;
  
  constructor(private route: ActivatedRoute,
              private projectNameService: AngularProjectNameService, 
              private readFileService: ReadFileHttpClientService) { }

  ngOnInit() {    
    this.filename = this.route.snapshot.params['filename'];
    this.name = this.projectNameService.name;
    
    this.route.params.subscribe(
      (params: Params) => {
        
        this.filename = params['filename'];        
        this.getFile(this.filename);
      }
    );

    this.projectNameService.nameUpdated.subscribe(
      (name: string) => { 
        this.name = name;
      });
  }

  getFile(filename) {
    this.readFileService.setProject(this.name);
  
    this.fileIsReady.subscribe(
      (data: string) => {
        this.code = data;        
      }
    );
    this.readFileService.getFile(filename, this.fileIsReady);
  }
}
