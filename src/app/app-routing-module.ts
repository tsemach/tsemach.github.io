import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PythonViewerComponent } from './python/viewer/viewer.component';
import { PythonComponent } from './python/python.component';
import { TypeScriptComponent } from './typescript/typescript.component';
import { AngularComponent } from './angular/angular.component';
import { AngularProjectComponent } from './angular/project/project.component';
import { AngularViewerComponent } from "./angular/viewer/viewer.component";

const appRoutes: Routes = [
  {path: '', 'component': PythonViewerComponent},
  {path: 'python', 'component': PythonComponent, children: [
    { path: 'viewer/:filename', 'component': PythonViewerComponent },     
  ] },
  {path: 'angular', 'component': AngularComponent},
  {path: 'angular/project/:name', 'component': AngularProjectComponent}, 
    
  {path: 'angular/project/:name', 'component': AngularProjectComponent, children: [
    { path: ':filename', 'component': AngularViewerComponent }
  ] },

  // {path: 'angular/project/:name/:filename', 'component': AngularViewerComponent},

  {path: 'typescript', 'component': TypeScriptComponent},
  {path: 'angular', 'component': AngularComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}