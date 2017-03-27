import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { Debounce } from './debounce/debounce.directive';

// Load angular Material and its dependencies
import 'hammerjs';
import { MaterialModule, MdGridListModule } from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingComponent } from './landing/landing.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

// Import Services
import { GetAlbumService } from './getAlbum/get-album.service';
import { GetDetailsService } from './getDetails/get-details.service';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,
    SearchComponent,
    Debounce,
    DetailsComponent,
    ThumbnailComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [GetAlbumService, GetDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
