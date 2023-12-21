import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MappingTableComponent } from './mapping-table/mapping-table.component';
//import { Page3Component } from './page3/page3.component';

const routes: Routes = [
  { path: 'page1', component: FileUploadComponent },
  { path: 'page2', component: MappingTableComponent, },
  //{ path: 'page3', component: Page3Component },
  // ... other routes ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
