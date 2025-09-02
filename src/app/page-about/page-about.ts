import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
	selector: 'app-page-about',
	imports: [CommonModule, RouterModule],
	templateUrl: './page-about.html',
	styleUrl: './page-about.css'
})
export class PageAbout {
	constructor(private title: Title) {
		this.title.setTitle('Matthew Russell | About');
	}

	protected readonly profileSrc = 'profile.jpg';

}
