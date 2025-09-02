import { Title } from '@angular/platform-browser';
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReplaySubject } from "rxjs";

type ContactFormData = {
	name: string;
	organisation: string;
	email: string;
	subject: string;
	message: string;
};

type ContactFormValidation = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

@Component({
	selector: "app-page-contact",
	imports: [FormsModule, CommonModule],
	templateUrl: "./page-contact.html",
	styleUrl: "./page-contact.css",
})
export class PageContact {
	constructor(private titleService: Title, private http: HttpClient) {
		this.titleService.setTitle('Matthew Russell | Contact');
	}

  	form: ContactFormData = {
		name: "",
		organisation: "",
		email: "",
		subject: "",
		message: "",
  	};

	validationErrors: ContactFormValidation = {
		name: "",
		email: "",
		subject: "",
		message: "",
	};

	private responseMessageSubject = new ReplaySubject<any>(1);
	public responseMessage = this.responseMessageSubject.asObservable();
	public submitted: boolean = false;
	public buttonColor: string = 'bg-gray-1';

	validate(): boolean {
		this.validationErrors = {
			name: "",
			email: "",
			subject: "",
			message: "",
		};
		let valid: boolean = true;
		if (!this.form.name || this.form.name.trim().length < 1) {
			this.validationErrors.name = "Name is required.";
			valid = false;
		}
		if (!this.form.subject || this.form.subject.trim().length < 1) {
			this.validationErrors.subject = "Subject is required.";
			valid = false;
		}
		if (!this.form.message || this.form.message.trim().length < 1) {
			this.validationErrors.message = "Message is required.";
			valid = false;
		}
		if (this.form.email) {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(this.form.email)) {
				this.validationErrors.email = "Please enter a valid email address.";
				valid = false;
			}
		} else {
			this.validationErrors.email = "Email is required.";
			valid = false;
		}
		// Organisation is optional, no validation needed
		if (valid) this.buttonColor = 'bg-brand-blue';
		return valid;
	}

		async submit() {
			this.submitted = true;
			this.responseMessageSubject.next(" ");
			if (!this.validate()) {
				this.responseMessageSubject.next("Some fields are invalid or required.");
				return;
			}

			const url = "https://3ocqjazpxob7bmw7epb3w6sdlq0xnbth.lambda-url.ap-southeast-2.on.aws/";
			try {
				this.buttonColor = 'bg-gray-1';
				this.responseMessageSubject.next("Sending...");
				const response: any = await this.http
					.post(url, this.form, {
						observe: "response",
						headers: {
							"Content-Type": "application/json",
						}
					}).toPromise();
				if (response.status === 200) {
					this.responseMessageSubject.next("Contact message successfully sent.");
					this.buttonColor = 'bg-brand-green';
				} else {
					console.error('Error sending contact message: ',response);
					this.buttonColor = 'bg-brand-red';
					this.responseMessageSubject.next("Contact message was not sent due to an unspecified error. Please check the console logs or try again later.");
				}
			} catch (error: any) {
				console.error('Error sending contact message: ', error);
				this.responseMessageSubject.next(`Contact message was not sent. ${error?.error?.message || 'An error has occurred.'}`);
				this.buttonColor = 'bg-brand-red';
			}
		}
}
