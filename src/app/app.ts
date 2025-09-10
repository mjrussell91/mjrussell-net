import { Component, inject, OnInit } from "@angular/core";
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
export class App implements OnInit {
	private readonly title = inject(Title);
	private readonly meta = inject(Meta);
	private readonly router = inject(Router);
	private readonly activatedRoute = inject(ActivatedRoute);

	ngOnInit(): void {
		this.router.events
			.pipe(
				filter((event): event is NavigationEnd => event instanceof NavigationEnd),
				map(() => this.activatedRoute),
				map((route: ActivatedRoute) => {
					while (route.firstChild) route = route.firstChild;
					return route;
				}),
				filter((route: ActivatedRoute) => route.outlet === "primary"),
				mergeMap((route: ActivatedRoute) => route.data),
			)
			.subscribe((event) => {

				if (typeof event['title'] === "string") this.updateTitle(event["title"]);
				if (typeof event['description'] === "string") this.updateDescription(event["description"]);
				return true
			});
	}

	

	private updateTitle(title: string): void {
		this.title.setTitle(title);
	}

	private updateDescription(desc: string): void {
		this.meta.updateTag({ name: "description", content: desc });
	}
}
