import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReplaySubject, lastValueFrom } from "rxjs";

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

enum FormState {
	Invalid = "invalid",
	Valid = "valid",
	Loading = "loading",
	Success = "success",
	Error = "error",
}

@Component({
	selector: "app-page-contact",
	imports: [FormsModule, CommonModule],
	templateUrl: "./page-contact.html",
	styleUrl: "./page-contact.css",
})
export class PageContact implements OnInit {
	private http = inject(HttpClient);

	constructor();

	constructor() {}

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

	private responseMessage = new ReplaySubject<string>(1);
	public responseMessage$ = this.responseMessage.asObservable();
	public formState: FormState = FormState.Invalid;

	public validate(): boolean {
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
		if (valid) this.formState = FormState.Valid;
		return valid;
	}

	public async submit() {
		this.responseMessage.next(" ");
		if (!this.validate()) {
			this.responseMessage.next("Some fields are invalid or required.");
			return;
		}

		const url = "https://3ocqjazpxob7bmw7epb3w6sdlq0xnbth.lambda-url.ap-southeast-2.on.aws/";
		try {
			this.formState = FormState.Loading;
			this.responseMessage.next("Sending...");
			const response: HttpResponse<object> = await lastValueFrom(
				this.http.post(url, this.form, {
					observe: "response",
					headers: {
						"Content-Type": "application/json",
					},
				}),
			);
			if (response.status === 200) {
				this.responseMessage.next("Contact message successfully sent.");
				this.formState = FormState.Success;
			} else {
				console.error("Error sending contact message: ", response);
				this.formState = FormState.Error;
				this.responseMessage.next(
					"Contact message was not sent due to an unspecified error. Please check the console logs or try again later.",
				);
			}
		} catch (error: unknown) {
			console.error("Error sending contact message: ", error);
			let message = "An error has occurred.";
			if (error instanceof HttpErrorResponse) {
				message = error?.error?.message ?? message;
			} else if (error instanceof Error) {
				message = error.message;
			} else if (typeof error === "string") {
				message = error;
			} 
			this.responseMessage.next(`Contact message was not sent. ${message}`);
			this.formState = FormState.Error;
		}
	}

	ngOnInit() {
		this.validate();
	}
}
