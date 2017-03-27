import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent,
    data: {
      title: 'Cover Finder'
    }
  },
  {
    path: 'search',
    component: SearchComponent,
    data: {
      title: 'Search'
    }
  },
  {
    path: 'detail/:spotifyURI',
    component: DetailsComponent,
    data: {
      title: 'Album Details'
    }
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: {
      title: 'About'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
