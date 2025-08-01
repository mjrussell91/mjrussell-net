import { Component } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
	selector: 'app-business-card',
	imports: [Icon],
	templateUrl: './business-card.html',
	styleUrl: './business-card.css'
})
export class BusinessCard {
	protected readonly email: string = 'contact@test.com';
	protected readonly phone: string = '+614 1234 5678';
	protected readonly github: string = 'https://github.com/mjrussell91';
	protected readonly website: string = 'https://mjrussell.net';
}
