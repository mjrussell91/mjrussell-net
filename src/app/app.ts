import { Component } from "@angular/core";
import { NavigationEnd, RouterOutlet, Router, ActivatedRoute } from "@angular/router";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

import { Title, Meta } from "@angular/platform-browser";
import { filter, map, mergeMap } from "rxjs";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, Header, Footer],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	constructor(
		private title: Title,
		private meta: Meta,
		private router: Router,
		private activatedRoute: ActivatedRoute,
	) {}
	updateTitle(title: string) {
		this.title.setTitle(title);
	}

	updateDescription(desc: string) {
		this.meta.updateTag({ name: "description", content: desc });
	}

	ngOnInit() {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				map(() => this.activatedRoute),
				map((route) => {
					while (route.firstChild) route = route.firstChild;
					return route;
				}),
				filter((route) => route.outlet === "primary"),
				mergeMap((route) => route.data),
			)
			.subscribe((event) => {
				this.updateTitle(event["title"]);
				this.updateDescription(event["description"]);
			});
	}
}
