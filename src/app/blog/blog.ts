import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common"

interface BlogPost {
	title: string;
	slug: string;
	date: Date;
	excerpt: string;
};
@Component({
	selector: "app-blog",
	imports: [RouterLink, DatePipe],
	templateUrl: "./blog.html",
	styleUrl: "./blog.css",
})
export class Blog {
	public readonly blogs: BlogPost[] = [
		{
			title: "Bioprospecting Honeycomb",
			slug: "bioprospecting-honeycomb",
			date: new Date("2025-10-07"),
			excerpt: "Finding unique local yeasts and bacteria in honeycomb.",
		},
	];
}
