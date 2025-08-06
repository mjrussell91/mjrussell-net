import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Degree = {
	title: string;
	major: string;
	institution: string;
	year: number;
	technicalCompetencies: string[];
	businessCompetencies: string[];
};

type Education = {
	title: string;
	institution: string;
	year: number;
};
@Component({
	selector: 'app-page-cv',
	imports: [CommonModule],
	templateUrl: './page-cv.html',
	styleUrl: './page-cv.css'
})
export class PageCv {
	protected readonly degree: Degree = {
		title: 'Bachelor of Information Technology',
		major: 'Major in Marketing & Management',
		institution: 'Griffith University',
		year: 2012,
		technicalCompetencies: [
			'Advanced programming techniques and discrete mathematics', 
			'Computer science, network engineering, and cybersecurity', 
			'Systems analysis and design, database design and administration, information systems',
			'Web development and user experience design',
		],
		businessCompetencies: [
			'Project management, agile methodologies and the software development lifecycle',
			'Business analysis and process design, quality management',
			'Organisational and management strategy, decision making',
			'Ethics and professional IT issues'
		]
	};

	protected readonly education: Education[] = [
		{
			title: 'Queensland Certificate of Education',
			institution: 'Capalaba State College',
			year: 2008
		},
		{
			title: 'Certificate III of Information Technology',
			institution: 'Metropolitan South Institute of TAFE',
			year: 2008
		},
		{
			title: 'Certificate II of Business',
			institution: 'Metropolitan South Institute of TAFE',
			year: 2008
		},
		{
			title: 'Certificate I of Workplace Education',
			institution: 'Metropolitan South Institute of TAFE',
			year: 2007
		}
	];

	protected readonly certsAndTraining: Education[] = [
		{
			title: 'VMware vSphere v6.5 Certificate',
			institution: 'Dimension Data Learning Services',
			year: 2017
		},
		{
			title: 'CompTIA Cloud Essentials Certification',
			institution: 'Linux Academy',
			year: 2017
		},
		{
			title: 'Azure Essentials',
			institution: 'Linux Academy',
			year: 2017
		},
		{
			title: 'ITIL Fundamentals Training',
			institution: 'UXC Consulting',
			year: 2015
		},
		{
			title: 'Windows 10 Training',
			institution: 'Dimension Data Learning Services',
			year: 2015
		},
		{
			title: 'Windows 8 Training',
			institution: 'Dimension Data Learning Services',
			year: 2013
		},
		{
			title: 'Mac OS X Training',
			institution: 'Dimension Data Learning Services',
			year: 2013
		},
		{
			title: 'Client Service Training',
			institution: 'Griffith University',
			year: 2013
		},
		{
			title: 'Windows 7 Training',
			institution: 'Dimension Data Learning Services',
			year: 2012
		}
	];
}