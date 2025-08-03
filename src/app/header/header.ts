import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-header',
	imports: [CommonModule],
	templateUrl: './header.html',
	styleUrl: './header.css'
})
export class Header {
	public navs = [
		{ label: 'About', route: 'about' },
		{ label: 'CV', route: 'CV' },
		{ label: 'Projects', route: 'projects' },
		{ label: 'Contact', route: 'contact' }
	]
}
