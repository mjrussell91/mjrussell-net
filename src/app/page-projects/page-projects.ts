import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = {
	title: string;
	description: string;
	link: string | null;
	repository: string | null;
	imageSrc: string | null;
};

@Component({
	selector: 'app-page-projects',
	imports: [CommonModule],
	templateUrl: './page-projects.html',
	styleUrl: './page-projects.css'
})
export class PageProjects {
	protected readonly projects: Project[] = [
		{
			title: 'mjrussell.net',
			description: 'A personal website built with Angular, showcasing my CVprojects, skills, and experiences. It serves as a portfolio and a platform for sharing knowledge through articles and tutorials.',
			link: 'https://mjrussell.net',
			repository: 'https://github.com/mjrussell91/mjrussell-net',
			imageSrc: 'mjrussell-net.png'
		},
		{
			title: 'Project Euler',
			description: 'Solutions for Project Euler (projecteuler.net) problems written in Rust. Project Euler exists to encourage, challenge, and develop the skills and enjoyment of anyone with an interest in the fascinating world of mathematics. Solutions to problems should be found in under a minute with an efficiently designed program on a modest computer. I like puzzles, maths, and programming so I do these for a fun challenge and to learn.',
			link: 'https://projecteuler.net',
			repository: 'https://github.com/mjrussell91/project-euler',
			imageSrc: 'projecteuler-net.png'
		}
	];
}
