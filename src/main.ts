import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SiteComponent } from './app/pages/web-site/site/site.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

const routes: Routes = [
  { path: '', component: SiteComponent },  // 👈 make SiteComponent the root
  { path: '**', redirectTo: '' }           // 👈 optional catch-all
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});