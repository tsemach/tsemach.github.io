import { Component, OnInit, Input} from '@angular/core';
import { Directory } from '../../services/directory';

@Component({
  selector: 'app-aws-tree-view',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class AwsTreeViewComponent implements OnInit {

  @Input() directories: Array<Directory>;
  @Input() source: string;  

  constructor() { }

  ngOnInit() {
  }

}
