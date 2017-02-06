import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NavigationComponent } from './navigation/navigation.component';
import { VehicleDetailsComponent } from './vehicleDetails/vehicleDetails.component';
import {LookUpService} from './services/lookup.service';
import { yearSortingPipe } from './pipeForYear.pipe';
import { modelSortingPipe } from './modelSorting.pipe';

//import { AboutComponent } from './about/about.component';
//import { HomeComponent } from './home/home.component';
//import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
//import { RepoListComponent } from './github/repo-list/repo-list.component';
//import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//import { ContactComponent } from './contact/contact.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VehicleDetailsComponent,
    yearSortingPipe,
    modelSortingPipe
    //AboutComponent,
    //RepoBrowserComponent,
    //RepoListComponent,
    //RepoDetailComponent,
    //HomeComponent,
    //ContactComponent
  ],
  schemas:     [CUSTOM_ELEMENTS_SCHEMA] ,
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService,
    LookUpService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
