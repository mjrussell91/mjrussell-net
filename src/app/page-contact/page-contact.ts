import type { OnInit } from "@angular/core";
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import type { HttpResponse } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReplaySubject } from "rxjs";

interface ContactFormData {
	name: string;
	organisation: string;
	email: string;
	subject: string;
	message: string;
}

interface ContactFormValidation {
	name: string;
	email: string;
	subject: string;
	message: string;
}

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
	private readonly http = inject(HttpClient);

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

	private readonly responseMessage = new ReplaySubject<string>(1);
	public responseMessage$ = this.responseMessage.asObservable();
	public formState: FormState = FormState.Invalid;

	public validate(): boolean {
		this.validationErrors = {
			name: "",
			email: "",
			subject: "",
			message: "",
		};
		let valid = true;
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
		if (valid) {
			this.formState = FormState.Valid;
		}
		return valid;
	}

	public submit(): void {
		this.responseMessage.next(" ");
		if (!this.validate()) {
			this.responseMessage.next("Some fields are invalid or required.");
			return;
		}

		const url = "https://3ocqjazpxob7bmw7epb3w6sdlq0xnbth.lambda-url.ap-southeast-2.on.aws/";
		this.http
			.post(url, this.form, {
				observe: "response",
				headers: {
					"Content-Type": "application/json",
				},
			})
			.subscribe({
				next: (response: HttpResponse<object>) => {
					if (response.status == 200) {
						this.responseMessage.next("Contact message successfully sent.");
						this.formState = FormState.Success;
					}
				},
				error: (error) => {
					console.error("Error sending contact message: ", error);
					this.formState = FormState.Error;
					this.responseMessage.next(
						"Contact message was not sent due to an unspecified error. Please check the console logs or try again later.",
					);
				},
			});
	}

	ngOnInit(): void {
		this.validate();
	}
}
