import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from "../icon/icon";

type Project = {
	title: string;
	link: string | null;
	repository: string | null;
	description: string;
	imageSrc: string | null;
	technologies: string[];
};

type Technology = {
	selector: string;
	url: string;
}

@Component({
	selector: 'app-page-projects',
	imports: [CommonModule, Icon],
	templateUrl: './page-projects.html',
	styleUrl: './page-projects.css'
})
export class PageProjects {
	public getTech(selector: string): Technology | undefined {
		return this.technologies.find((f: Technology) => f.selector == selector)
	}

	public technologies: Technology[] = [
		{ selector: 'angular', url: 'https://angular.dev' },
		{ selector: 'typescript', url: 'https://www.typescriptlang.org' },
		{ selector: 'rust', url: 'https://www.rust-lang.org' },
		{ selector: 'directus', url: 'https://directus.io' },
		{ selector: 'websocket', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' },
		{ selector: 'nodejs', url: 'https://nodejs.org' },
		{ selector: 'nuxt', url: 'https://nuxt.com' },
		{ selector: 'firebase', url: 'https://firebase.google.com' },
		{ selector: 'shopify', url: 'https://shopify.com' },
		{ selector: 'wordpress', url: 'https://wordpress.org' }
	];

	protected readonly projects: Project[] = [
		{
			title: 'mjrussell.net',
			link: 'https://mjrussell.net',
			technologies: ['angular', 'typescript'],
			repository: 'https://github.com/mjrussell91/mjrussell-net',
			description: `A personal website built with Angular, showcasing my CV, projects, skills, and experience. It serves as a portfolio and a demonstration of my ability to design, build, and deploy web applications.`,
			imageSrc: 'mjrussell-net.webp'
		},
		{
			title: 'Project Euler',
			link: 'https://projecteuler.net',
			technologies: ['rust'],
			repository: 'https://github.com/mjrussell91/project-euler',
			description: `Solutions for Project Euler (projecteuler.net) problems written in Rust. Project Euler exists to encourage, challenge, and develop the skills and enjoyment of anyone with an interest in the fascinating world of mathematics. 
			Solutions to problems should be found in under a minute with an efficiently designed program on a modest computer. These puzzles are a fun intersection between maths and programming that challenge me.`,
			imageSrc: 'project-euler.webp'
		},
		{
			title: 'MJR Portal',
			link: null,
			technologies: ['directus', 'websocket', 'nodejs', 'angular', 'typescript'],
			repository: null,
			description: `A personal web portal with a collection of custom tools built with Angular and NodeJS. Weather observations, forecasts, and warnings sourced from Bureau of Meteorology public API data. 
			Interactive web-based music client with playlist management, library, and controls for the MPD music player with a NodeJS backend that integrates with the MPD instance. Custom notepad, wiki, code snippets, and quick references stored in a Directus backend and QuillJS as a text editor. 
			Dashboards that monitor the status and performance of my machines and servers using data from the Glances web API. The joy of programming is being able to hand craft tools and solutions that suit your own needs and workflow. Hosted on an AWS EC2 instance using using SSR and PM2 to manage the server and related NodeJS backend with Nginx as a reverse proxy supplying HTTPS.
			`,
			imageSrc: 'mjr-portal.webp'
		},
		{
			title: 'Tax Builder',
			link: null,
			technologies: ['firebase', 'nuxt'],
			repository: null,
			description: `An internal tool that lets the client to upload with one click inspection data from other tools that includes asset details collected from properties for the customer. They are combined with their value and other details such as renovation dates and common property to automatically calculate tax depreciation schedules. These are displayed in the app and exported and CSV files for easy reporting for the client. Built with Nuxt using Firebase as a backend for storing job data.`,
			imageSrc: 'tax-build.webp'
		},
		{
			title: 'EverVessel',
			link: 'https://www.evervessel.com',
			technologies: ['shopify', 'nuxt', 'typescript'],
			repository: null,
			description: `Web store for EverVessel water bottles and accessories. Handles e-commerce features such as localisation for currency and shipping, trust bar with customer reviews, and features such as a canvas element for custom text and logo engravings during checkout, and bulk purchasing options. Built in React with TypeScript and a custom Sanity backend for managing products and orders.`,
			imageSrc: 'evervessel.webp'
		},
		{
			title: 'Engraving Portal',
			link: null,
			technologies: ['firebase', 'nuxt', 'typescript'],
			repository: null,
			description: `Portal to manage and automate orders for the engraving partner by sorting orders into batches based on their date, grouping the batch by SKU, displaying order details, printing shipping labels, and updating order statuses.`,
			imageSrc: 'engraving-portal.webp'
		},
		{
			title: 'Pricing Tool',
			link: null,
			technologies: ['directus', 'shopify', 'websocket', 'nodejs', 'nuxt'],
			repository: null,
			description: `Internal tool that allows the client to match their Shopify products against pricing data scraped from various public sources to inform pricing decisions. Data collected from various APIs and websites with custom Puppeteer scripts that run on a schedule.
			 Data is stored in a Directus CMS with a SQL database and accessed via a REST API. A custom WebSocket server passes events and real-time data to the client to show job and status updates, notifications, and logs to a terminal interface.
			 Interface includes a search, product list, websites, running jobs, queued jobs, terminal interface for job logs and progress, and an interactive product matching interface to verify scraped data against Shopify products. Combing to create a dashboard that highlights the largest pricing differentials, new products, and stale data.`,
			imageSrc: 'pricing-tool.webp'
		},
		{
			title: 'WLTH - Customer Portal',
			link: 'https://wlth.com/',
			technologies: ['nuxt', 'typescript'],
			repository: null,
			description: `Banking portal for WLTH customers to view account balances, transactions, interest rates, reward points, and other financial information as well as manage their customer details and preferences. Built with Nuxt and TypeScript, security hardened, Okta authentication, and integrated WLTH's APIs with secure API gateways.`,
			imageSrc: 'wlth-dashboard.webp'
		},
		{
			title: 'EML Payments',
			link: 'https://www.emlpayments.com',
			technologies: ['wordpress', 'nuxt'],
			repository: null,
			description: `Public website for EML Payments that shows payment solutions, use cases, company and investor details. Built with Nuxt and a WordPress backend that combines the ACF plugin and custom block components to allow the client to edit and add content.`,
			imageSrc: 'eml-payments.webp'
		}
	];
}
