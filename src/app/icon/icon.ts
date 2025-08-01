import { Component } from '@angular/core';

@Component({
	selector: 'app-icon',
	imports: [],
	templateUrl: './icon.html',
	styleUrl: './icon.css'
})
export class Icon {
	// Docs: https://v17.angular.io/guide/svg-in-templates
	// https://stackoverflow.com/questions/46101539/is-there-a-way-to-add-source-to-an-svg-element


	// Icons: https://www.svgrepo.com/svg/437851/email
	// public fillColor = 'var(--color-white-1)';
	public fillColor = 'red';
}
