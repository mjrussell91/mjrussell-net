import { Data, Routes } from "@angular/router";

import { PageAbout } from "./page-about/page-about";
import { Blog } from "./blog/blog";
import { PageCv } from "./page-cv/page-cv";
import { PageProjects } from "./page-projects/page-projects";
import { PageContact } from "./page-contact/page-contact";
import { PageNotFound } from "./page-not-found/page-not-found";

export interface RouteData extends Data {
	title: string;
	description: string;
}

interface AppRoutes extends Routes {
	data?: RouteData;
}

export const routes: AppRoutes = [
	{
		path: "",
		component: PageAbout,
		data: {
			title: "Matthew Russell︱About",
			description:
				"Matthew Russell is a software and systems engineer from Brisbane, Australia. Find my curriculum vitae (CV), projects, contact, and github here.",
		},
	},
	{
		path: "cv",
		component: PageCv,
		data: {
			title: "Matthew Russell︱CV",
			description:
				"Curriculum Vitae (CV, resume, resumé) of Matthew Russell, a software and systems engineer from Brisbane, Australia. Includes education, training, skills, and experience.",
		},
	},
	{
		path: "projects",
		component: PageProjects,
		data: {
			title: "Matthew Russell︱Projects",
			description:
				"A list of projects built by Matthew Russell, showcasing my work and demonstrating my skills and experience. Links and GitHub repositories that are public are provided. Projects include mjrussell.net, Project Euler, MJR Portal, Tax Builder, EverVessel, Engraving Portal, Pricing Tool, Customer Portal, and EML Payments.",
		},
	},
	{
		path: "contact",
		component: PageContact,
		data: {
			title: "Matthew Russell︱Contact",
			description:
				"Contact page for Matthew Russell, a software and systems engineer from Brisbane, Australia. Get in touch for inquiries about my Curriculum Vitae (CV, resume, resumé), projects, work, freelance, job, offer, interview, opportunities, and more.",
		},
	},
	{
		path: "blog",
		component: Blog,
		data: {
			title: "Matthew Russell︱Blog",
			description: "Matthew Russell's blog about homebrewing and programming.",
		},
	},
	{
		path: "**",
		component: PageNotFound,
		data: {
			title: "Matthew Russell︱Error",
			description: "Error 404. Sorry, the page you are looking for does not exist.",
		},
	}, // 404 / Page Not Found
];
