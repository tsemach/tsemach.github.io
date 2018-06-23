import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { AngularSplitModule } from 'angular-split';
import { CodemirrorModule } from 'ng2-codemirror';

import { AppComponent } from './app.component';
import { PythonViewerComponent } from './python/viewer/viewer.component';
import { HistogramComponent } from './python/histogram/histogram.component';
import { AppRoutingModule } from './app-routing-module';
import { PythonComponent } from './python/python.component';
import { TopbarNavbarBrandComponent } from './python/topbar-navbar-brand/topbar-navbar-brand.component';
import { TopbarNavComponent } from './python/topbar-nav/topbar-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PythonLeftMenuComponent } from './python/left-menu/left-menu.component';
import { DropdownDirective } from './tree-view/dropdown.directive';
import { TypeScriptComponent } from './typescript/typescript.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ReadFileHttpClientService } from './services/read-file.httpclient.service';
import { ViewerChangeDirective } from './python/viewer/viewer-change.directive';
import { PythonDescriptionComponent } from './python/description/description.component';
import { PythonOutputComponent } from './python/output/output.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  declarations: [
    AppComponent,
    PythonViewerComponent,
    HistogramComponent,
    PythonComponent,
    TopbarNavbarBrandComponent,
    TopbarNavComponent,
    SidebarComponent,
    PythonLeftMenuComponent,
    DropdownDirective,
    TypeScriptComponent,
    TreeViewComponent,
    ViewerChangeDirective,
    PythonDescriptionComponent,
    PythonOutputComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    SortableModule.forRoot(),
    AngularSplitModule,
    HttpClientModule,
    CodemirrorModule
  ],
  providers: [ReadFileHttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
