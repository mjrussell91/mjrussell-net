import { Routes } from '@angular/router';
import { BusinessCard } from './business-card/business-card';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path: 'about', component: BusinessCard},
    { path: '**', component: PageNotFound}, // 404 / Page Not Found
];
