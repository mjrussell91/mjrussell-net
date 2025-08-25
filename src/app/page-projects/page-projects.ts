import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from "../icon/icon";

type Project = {
	title: string;
	link: string | null;
	repository: string | null;
	description: string;
	imageSrc: string | null;
	icons: string[];
};

@Component({
	selector: 'app-page-projects',
	imports: [CommonModule, Icon],
	templateUrl: './page-projects.html',
	styleUrl: './page-projects.css'
})
export class PageProjects {
	protected readonly projects: Project[] = [
		{
			title: 'mjrussell.net',
			link: 'https://mjrussell.net',
			icons: ['angular'],
			repository: 'https://github.com/mjrussell91/mjrussell-net',
			description: `A personal website built with Angular, showcasing my CV, projects, skills, and experience. It serves as a portfolio and a demonstration of my ability to design, build, and deploy web applications.`,
			imageSrc: 'mjrussell-net.png'
		},
		{
			title: 'Project Euler',
			link: 'https://projecteuler.net',
			icons: ['rust'],
			repository: 'https://github.com/mjrussell91/project-euler',
			description: `Solutions for Project Euler (projecteuler.net) problems written in Rust. Project Euler exists to encourage, challenge, and develop the skills and enjoyment of anyone with an interest in the fascinating world of mathematics. 
			Solutions to problems should be found in under a minute with an efficiently designed program on a modest computer. These puzzles are a fun intersection between maths and programming that challenge me.`,
			imageSrc: 'projecteuler-net.png'
		},
		{
			title: 'MJR Portal',
			link: null,
			icons: ['directus', 'nodejs', 'angular'],
			repository: null,
			description: `A personal web portal with a collection of custom tools built with Angular and NodeJS. Weather observations, forecasts, and warnings sourced from Bureau of Meteorology public API data. 
			Interactive web-based music client with playlist management, library, and controls for the MPD music player with a NodeJS backend that integrates with the MPD instance. Custom notepad, wiki, code snippets, and quick references stored in a Directus backend and QuillJS as a text editor. 
			Dashboards that monitor the status and performance of my machines and servers using data from the Glances web API. The joy of programming is being able to hand craft tools and solutions that suit your own needs and workflow. Hosted on an AWS EC2 instance using using SSR and PM2 to manage the server and related NodeJS backend with Nginx as a reverse proxy supplying HTTPS.
			`,
			imageSrc: null
		},
		{
			title: 'GQS - Tax Builder',
			link: null,
			icons: ['vue', 'firebase'],
			repository: null,
			description: `An internal tool that lets the client to upload with one click inspection data including asset details collected from properties for the customer, combined with their value and other details to automatically generate tax depreciation schedules. `,
			imageSrc: null
		},
		{
			title: 'EverVessel',
			link: 'https://www.evervessel.com',
			icons: ['react', 'typescript', 'shopify'],
			repository: null,
			description: `Web store for EverVessel water bottles and accessories built in React and using Shopify as a backend. Integrated e-commerce features and custom features such as a canvas element for custom text and logo engravings, and bulk purchasing options.`,
			imageSrc: 'evervessel.png'
		},
		{
			title: 'EverVessel - Engraving Portal',
			link: null,
			icons: ['react', 'typescript', 'firebase'],
			repository: null,
			description: `Portal to manage and automate orders for the engraving partner to display order details, group by SKU, print shipping labels, and update order statuses.`,
			imageSrc: null
		},
		{
			title: 'The Reserve - Pricing Tool',
			link: null,
			icons: ['vue', 'wordpress'],
			repository: null,
			description: `Internal tool that allows the client to match their products from Shopify against pricing data scraped from various public sources to ensure fair market value. Data collected from various websites with custom Puppeteer scripts that run daily...`,
			imageSrc: ''
		},
		{
			title: 'WLTH - Customer Portal',
			link: null,
			icons: ['vue', 'typescript'],
			repository: null,
			description: `Banking portal for WLTH customers to view account balances, transactions, interest rates, bonus points and other financial information as well as manage their customer details and preferences. Built with Vue and security hardened, the app integrated with WLTH's API through an API gateway.`,
			imageSrc: null
		},
		{
			title: 'EML Payments',
			link: 'https://www.emlpayments.com',
			icons: ['vue', 'wordpress'],
			repository: null,
			description: `Public website for EML Payments company that shows payment solutions, use cases, company and investor details. Built with Vue and a WordPress backend that used the ACF plugin so the client could manage content and pages through custom built block components.`,
			imageSrc: 'eml-payments.png'
		},
	];
}
