
/**
 * @deprecated
 */
export class DirectoryOld {
  name: string;
  directories: Array<string>;
  files: Array<string>;
  

  constructor(name, directories, files) {
      this.name = name;
      this.files = files;
      this.directories = directories;
      
  }

}

export class Directory {
  name: string;
  dirmap = new Map<string, Directory>();  
  directories: Array<Directory>;
  files: Array<string> = new Array<string>();
  fullpath = '';

  constructor(name, fullpath?) {
      this.name = name;
      if (fullpath === undefined || fullpath === '.') {
        this.fullpath = name;        
      }
      else {
        this.fullpath = fullpath + '/' + name;
      }
  }

  getGetDirMap() {
    return this.dirmap;
  }

  setDirectories() {
    this.directories = new Array<Directory>();
    
    this.dirmap.forEach((sub: Directory, dir: string) => {
      
      this.directories.push(sub);
      sub.setDirectories();
    });         
  }

  addDirectory(name: string) {
    if (this.dirmap.get(name)) {
      return this.dirmap.get(name);
    }
    this.dirmap.set(name, new Directory(name, this.fullpath));

    return this.getDirectory(name);
  }

  getDirectory(name: string) {
    if (this.dirmap.get(name) === undefined) {
      throw new Error(`unable to find directory '${name}' in '${this.name}'`);
    }
    return this.dirmap.get(name);
  }
  
  addFile(name: string) {
    console.log("Directory:addFile: this.name = <" + this.name + ">, name = " + name);
    this.files.push(name);
  }

  print(tabs: string = '') {
    if (this.name  !== '.') {
      console.log(tabs + this.name + ":");
    }
    if (this.name  !== '.') {
      tabs = tabs + "\t";
    }
    for (let f in this.files) {
      //if (this.name  !== '.' && this.files[f].length > 0) {
      if (this.files[f].length > 0) {
        console.log(tabs + this.files[f]);
      }
    }
    this.dirmap.forEach((value: Directory, key: string) => {      
      value.print(tabs);
    });

    // for (let i in this.directories) {
    //   console.log("directories: " + this.name + ", dir = " + this.directories[i]);
    // }
  }
}
