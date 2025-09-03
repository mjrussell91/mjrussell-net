import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
	selector: 'app-page-about',
	imports: [CommonModule, RouterModule],
	templateUrl: './page-about.html',
	styleUrl: './page-about.css'
})
export class PageAbout {
	protected readonly profileSrc = 'profile.jpg';
}
