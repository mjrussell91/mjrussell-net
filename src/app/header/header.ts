import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

interface Nav {
	label: string;
	route: string;
}

@Component({
	selector: "app-header",
	imports: [CommonModule, RouterModule],
	templateUrl: "./header.html",
	styleUrl: "./header.css",
})
export class Header {
	public navs: Nav[] = [
		{ label: "About", route: "" },
		{ label: "CV", route: "cv" },
		{ label: "Projects", route: "projects" },
		{ label: "Contact", route: "contact" },
		{ label: "Blog", route: "blog" },
	];
}
