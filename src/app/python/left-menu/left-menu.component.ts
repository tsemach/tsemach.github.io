import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { TreeViewComponent } from '../../tree-view/tree-view.component';
import { Directory } from '../../services/directory';

@Component({
  selector: 'app-python-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class PythonLeftMenuComponent implements OnInit {
  
  directories = new Array<Directory>();

  constructor() {     
    
    // let fall2014 = new Directory('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);
    // let summer2014 = new Directory('Summer 2014',[],['image10.jpg','image20.jpg','image30.jpg']);
    // let pics = new Directory('Pictures',[summer2014,fall2014],[]);
    // let music = new Directory('Music',[],['song1.mp3','song2.mp3']);
    // this.directories = [pics,music];    

    let decorators = new Directory('decorators',[],['decorator_01.py','decorator_02.py']);
    let metaclasses = new Directory('metaclasses',[], ['metaclasses_01.py', 'metaclasses_02.py']);
    let pyexamples = new Directory('pyexamples',[decorators, metaclasses],['main.py']);
    this.directories = [pyexamples]; 

    console.log("directories = " + JSON.stringify(this.directories, undefined, 2));
  }

  ngOnInit() {
  }

  // onDropdown($event){
  //   let thisPElem = $event.target;
  //   let thisPSibling = thisPElem.nextSibling;
    
  //   if (thisPSibling == null) {
  //     thisPSibling = thisPElem.parentNode.nextSibling;
  //     if (thisPSibling == null) {
  //     console.log("onDropdown: thisPSibling is null, event = " + JSON.stringify(event));
      
  //     return;
  //     }
  //   }

  //   if (thisPSibling.style.display === "block") {
  //     thisPSibling.style.display = "none";
  //   } 
  //   else {
  //     thisPSibling.style.display = "block";
  //   }
  // }
}
