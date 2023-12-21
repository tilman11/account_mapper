import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.router.module';

// Import the components
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PhaseSwitcherComponent } from './phase-switcher/phase-switcher.component';
import { MappingTableComponent } from './mapping-table/mapping-table.component';

// Import any additional modules
import { FormsModule } from '@angular/forms';
// If you're using HttpClient, import HttpClientModule from '@angular/common/http'

@NgModule({
  declarations: [
    // Declare the components here
    AppComponent,
    FileUploadComponent,
    PhaseSwitcherComponent,
    MappingTableComponent,
  ],
  imports: [
    // Import BrowserModule and other modules here
    BrowserModule,
    FormsModule,
    HttpClientModule, //(if using)
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstraps the AppComponent
})
export class AppModule {}
