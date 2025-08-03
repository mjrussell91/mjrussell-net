import { Routes } from '@angular/router';

import { PageAbout } from './page-about/page-about';
import { PageCv } from './page-cv/page-cv';
import { PageProjects } from './page-projects/page-projects';
import { PageContact } from './page-contact/page-contact';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    { path: 'about', component: PageAbout },
    { path: 'cv', component: PageCv },
    { path: 'projects', component: PageProjects },
    { path: 'contact', component: PageContact },
    { path: '**', component: PageNotFound }, // 404 / Page Not Found
];
