import 'codemirror/mode/python/python'; 
import { CodeMirror } from 'codemirror';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { ReadFileHttpClientService } from '../../services/read-file.httpclient.service';

/**
 * checkout https://stackoverflow.com/questions/36467020/codemirror-as-angular2-component
 */

@Component({
  selector: 'app-python-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class PythonViewerComponent implements OnInit {

  filename: string;
  code: string = '';
  config={
    mode: "python",
    lineNumbers: true,
    theme: "eclipse",
    tabSize: 2,  
    readOnly: true
  };

  editor:CodeMirror.Editor;

  fileIsReady = new Subject<string>();

  constructor(private route: ActivatedRoute, private readFileService: ReadFileHttpClientService) {     
  }

  ngOnInit() {
    this.filename = this.route.snapshot.params['filename'];
    
    this.route.params.subscribe(
      (params: Params) => {
        //console.log("PythonViewerComponent: file = " + params['filename']);
        this.filename = params['filename'];
        this.getFile(this.filename);
      }
    )
  }
  
  getFile(filename) {
    this.readFileService.setProject('pyexamples');
  
    this.fileIsReady.subscribe(
      (data: string) => {
        this.code = data;    
      }
    );
    //this.readFileService.getFile('pyexamples/coroutines/coroutine_03.py');
    this.readFileService.getFile(filename, this.fileIsReady);
    }

}
