import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { TreeViewComponent } from '../../tree-view/tree-view.component';
import { Directory } from '../../services/directory';
import { ReadFileHttpClientService } from '../../services/read-file.httpclient.service';
import { ParseProjectFiles } from '../../services/parser-filelist';

@Component({
  selector: 'app-angular-file-menu',
  templateUrl: './file-menu.component.html',
  styleUrls: ['./file-menu.component.css']
})
export class AngularFileMenuComponent implements OnInit, OnDestroy {
  directories: Array<Directory>;
  htmlPythonFilelist: string = '';
  source = '/angular/project';

  fileIsReady = new Subject<string>();

  constructor(private readFileService: ReadFileHttpClientService) { }

  ngOnInit() {
    // path is: https://raw.githubusercontent.com/tsemach/pyexamples/master/pyexamples.list
    this.readFileService.setProject('angular-http-client');

    this.fileIsReady.subscribe(
      (data: string) => {
        this.directories = this.parse(data);
      }
    );
    this.readFileService.getFile('project.list', this.fileIsReady);
  }

  parse(filelist) {    
    let filesArray = filelist.split(/\r?\n/);

    let directories = new Array<Directory>();
    let parser = new ParseProjectFiles();

    let basedir = parser.parse(filesArray); 
    basedir.print();

    return [basedir];     
  }

  ngOnDestroy() {
    this.fileIsReady.unsubscribe();    
  }
}
