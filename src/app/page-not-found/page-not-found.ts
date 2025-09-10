import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-page-not-found",
	imports: [RouterModule],
	templateUrl: "./page-not-found.html",
	styleUrl: "./page-not-found.css",
})
// eslint reason: component currently has no functionality
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PageNotFound {}
