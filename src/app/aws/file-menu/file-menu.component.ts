import { Component, OnInit } from '@angular/core';
import { Directory } from '../../services/directory';

@Component({
  selector: 'app-aws-file-menu',
  templateUrl: './file-menu.component.html',
  styleUrls: ['./file-menu.component.css']
})
export class AwsFileMenuComponent implements OnInit {
  dirbase = new Directory('.');
  directories: Array<Directory>;

  source = '/aws';

  constructor() { }

  ngOnInit() {
    let cfdir = this.dirbase.addDirectory('CloudFormation');
    cfdir.addFile('aws-cf-userdata-93.yml', '650757635de8b7bd2122fe706c1fc91b');
    cfdir.addFile('aws-cf-userdata-92.yml', '1e12f52eda8a37b7ece8b120eb6a1175');


    let s3dir = this.dirbase.addDirectory('S3');
    s3dir.addFile('aws-cf-conditions-71.yml', 'e33af3cd1520ed3661a82a4a6361e0cf');
    s3dir.addFile('aws-cf-userdata-91.sh', '3af2e8250358473df596b3cfddf89447');

    this.dirbase.setDirectories();

    this.directories = [this.dirbase];        
  }

}
