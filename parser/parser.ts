import * as _path from 'path';
/**
pyexamples/objects/attribute_02.py
pyexamples/objects/attribute_05.py
pyexamples/metaclasses/singelton_01.py
pyexamples/metaclasses/singelton_02.py
pyexamples/decorators/property_03.py
pyexamples/decorators/descriptor_02..py

Output is 
  let decorators = new Directory('decorators',[],['decorator_01.py','decorator_02.py']);
  let metaclasses = new Directory('metaclasses',[], ['metaclasses_01.py', 'metaclasses_02.py']);
  let pyexamples = new Directory('pyexamples',[decorators, metaclasses],['main.py']);
  this.directories = [pyexamples]; 
 */

let filelist = [
  'pyexamples/objects/attribute_02.py', 
  'pyexamples/objects/attribute_05.py',
  'pyexamples/metaclasses/singelton_01.py',
  'pyexamples/metaclasses/singelton_02.py',
  'pyexamples/decorators/property_03.py',
  'pyexamples/decorators/descriptor_02.py'];

class Directory {
  name: string;
  directories = new Map<string, Directory>();  
  files: Array<string> = new Array<string>();

  constructor(name) {
      this.name = name;
  }
  
  addDirectory(name: string) {
    if (this.directories.get(name)) {
      return this.directories.get(name);
    }        
    this.directories.set(name, new Directory(name));    

    return this.getDirectory(name);
  }

  getDirectory(name: string) {
    if (this.directories.get(name) === undefined) {
      throw new Error(`unable to find directory '${name}' in '${this.name}'`);
    }
    return this.directories.get(name);
  }
  
  addFile(name: string) {
    this.files.push(name);
  }

  print() {
    console.log("dirname: " + this.name + " has files = " + this.files);
    this.directories.forEach((value: Directory, key: string) => {
      console.log("dirname = " + this.name + ": has directory: " + value.name);
      value.print();
    });
  }
}

class ParseProjectFiles {
  dirbase = new Directory('.');

  constructor() {

  }

  parseFilePath(filepath: Array<string>, directory: Directory) {
    //let path = filepath.split('/');
    let name = filepath.shift();

    // check if end of the recusive 
    if (filepath.length === 0) {
      directory.addFile(name);

      return;
    }
    
    let subdir = directory.addDirectory(name);
    this.parseFilePath(filepath, subdir);
  }

  parse(filelist: Array<string>) {    
    filelist.forEach(path => {
      this.parseFilePath(path.split('/'), this.dirbase);
    });
  }

  print() {    
    this.dirbase.print();
  }
}

let parser = new ParseProjectFiles();
parser.parse(filelist);
parser.print();


// let pyexamples = new Directory('pyexamples');
// pyexamples.addDirectory('decorators');
// pyexamples.addDirectory('metaclasses');

// let decorators = pyexamples.getDirectory('decorators');
// decorators.addFile('decorator_01.py');
// decorators.addFile('decorator_02.py');

// let metaclasses = pyexamples.getDirectory('metaclasses');
// metaclasses.addFile('metaclasses_01.py');
// metaclasses.addFile('metaclasses_02.py');

// let parser = new ParseProjectFiles();
// parser.parse(filelist);

// // let decorators = new Directory('decorators',[],['decorator_01.py','decorator_02.py']);
// // let metaclasses = new Directory('metaclasses',[], ['metaclasses_01.py', 'metaclasses_02.py']);
// // let pyexamples = new Directory('pyexamples',[decorators, metaclasses],['main.py']);
// //let directories = pyexamples; 



// console.log("pyexamples = " + JSON.stringify(pyexamples, undefined, 2));
// console.log(JSON.stringify(pyexamples.getDirectory('decorators'), undefined, 2));
// console.log(JSON.stringify(pyexamples.getDirectory('metaclasses'), undefined, 2));

// pyexamples.directories.forEach(d => {
//   console.log(`${d.name} = ${JSON.stringify(d.files)}`);
// });
// console.log(JSON.stringify(pyexamples.directories.values(), undefined, 2));

// let a = 'dsvsv'.split('/');
// console.log(a);