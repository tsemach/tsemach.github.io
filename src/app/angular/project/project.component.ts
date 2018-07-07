import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ReadFileHttpClientService } from '../../services/read-file.httpclient.service';
import { Subject } from 'rxjs/Subject';
import { Directory } from '../../services/directory';
import { ParseProjectFiles } from '../../services/parser-filelist';
import { AngularProjectNameService } from '../project/project-name.service';

@Component({
  selector: 'app-angular-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [AngularProjectNameService]
})
export class AngularProjectComponent implements OnInit, OnDestroy {
  fileIsReady = new Subject<string>();

  directories: Array<Directory>;
  htmlProjectFilelist: string = '';
  source: string;

  constructor(private route:ActivatedRoute, 
              private readFileService: ReadFileHttpClientService,
              private projectNameService: AngularProjectNameService) { }

  ngOnInit() {    
    this.route.params.subscribe(
      (params: Params) => {
        this.projectNameService.name = params['name'];
        this.projectNameService.nameUpdated.emit(this.projectNameService.name);
        this.source = '/angular/project/' + this.projectNameService.name;
        console.log("AngularProjectComponent: name = "  + this.projectNameService.name);
        console.log("AngularProjectComponent: source = " + this.source);
        this.getFile(this.projectNameService.name);        
      }
     )
  }

  getFile(name) {    
    this.readFileService.setProject(name);
  
    this.fileIsReady.subscribe(
      (data: string) => {
        //console.log("AngularProjectComponent: data = " + data);
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
    
    return [basedir];     
  }
  
  ngOnDestroy() {
    this.fileIsReady.unsubscribe();    
  }

}
