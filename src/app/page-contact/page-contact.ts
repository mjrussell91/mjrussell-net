import { Component, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

type ContactFormData = {
	name: string;
	organisation: string;
	email: string;
	subject: string;
	message: string;
};

@Component({
	selector: "app-page-contact",
	imports: [FormsModule, NgClass, CommonModule],
	templateUrl: "./page-contact.html",
	styleUrl: "./page-contact.css",
})
export class PageContact {
  	constructor(private http: HttpClient) {}

  	form: ContactFormData = {
		name: "",
		organisation: "",
		email: "",
		subject: "",
		message: "",
  	};

	validationErrors: ContactFormData = {
		name: "",
		organisation: "",
		email: "",
		subject: "",
		message: "",
	};
	responseMessage: string = "";

	validate(): boolean {
		this.validationErrors = {
			name: "",
			organisation: "",
			email: "",
			subject: "",
			message: "",
		};
		let valid = true;
		if (!this.form.name || this.form.name.trim().length < 2) {
			this.validationErrors.name = "Name is required (min 2 characters).";
			valid = false;
		}
		if (!this.form.subject || this.form.subject.trim().length < 2) {
			this.validationErrors.subject = "Subject is required (min 2 characters).";
			valid = false;
		}
		if (!this.form.message || this.form.message.trim().length < 2) {
			this.validationErrors.message = "Message is required (min 2 characters).";
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
		return valid;
	}

  	async submit() {
		this.responseMessage = "";
		if (!this.validate()) {
			this.responseMessage = "Some fields are invalid or required.";
			return;
		}
		try {
			const response: any = await this.http
				.post("/api/contact", this.form, { observe: "response" })
				.toPromise();
			if (response.status === 200) {
				this.responseMessage = "Form submitted successfully!";
				this.form = {
				name: "",
				organisation: "",
				email: "",
				subject: "",
				message: "",
				};
			} else {
				this.responseMessage =
				"Contact message not sent. Please try again later.";
			}
		} catch (error: any) {
			this.responseMessage = "Contact message not sent. " + (error?.message || "An error occurred.");
		}
  	}
}
