import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	imports: [],
	templateUrl: './header.html',
	styleUrl: './header.css'
})
export class Header {
	protected readonly email: string = 'contact@test.com';
	// Obfuscation: https://spencermortensen.com/articles/email-obfuscation/
	// https://stackoverflow.com/questions/41318987/hide-email-address-from-bots-keep-mailto
	protected readonly phone: string = '+614 1234 5678';
	protected readonly github: string = 'https://github.com/mjrussell91';
	protected readonly website: string = 'https://mjrussell.net';
}
