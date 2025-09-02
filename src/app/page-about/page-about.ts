import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
	selector: 'app-page-about',
	imports: [CommonModule, RouterModule],
	templateUrl: './page-about.html',
	styleUrl: './page-about.css'
})
export class PageAbout {
	constructor(private title: Title, private meta: Meta) {
		this.title.setTitle('Matthew Russell | About');
		this.meta.updateTag({ name: 'description', content: 'Matthew Russell is a software and systems engineer from Brisbane, Australia. Find my curriculum vitae (CV), projects, contact, and github here.' });
	}

	protected readonly profileSrc = 'profile.jpg';
}
