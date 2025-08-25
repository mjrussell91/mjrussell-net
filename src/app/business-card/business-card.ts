import { Component } from '@angular/core';

@Component({
	selector: 'app-business-card',
	imports: [],
	templateUrl: './business-card.html',
	styleUrl: './business-card.css'
})
export class BusinessCard {
	// Obfuscation: https://spencermortensen.com/articles/email-obfuscation/
	// https://stackoverflow.com/questions/41318987/hide-email-address-from-bots-keep-mailto
	protected readonly email: string = 'contact@test.com';
	protected readonly phone: string = '+614 1234 5678';
	protected readonly github: string = 'https://github.com/mjrussell91';
	protected readonly website: string = 'https://mjrussell.net';
}
