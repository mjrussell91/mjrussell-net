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

type Skills = {
	title: string;
	skills: string[];
}
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

	protected readonly skills: Skills[] = [
		{
			title: 'Windows Server and Microsoft products',
			skills: [
				'Experienced in supporting Windows Server OSes, Domains, Active Directory, Group Policies, DFS, SCCM and Windows Patching',
				'Managing AD Users and Groups, troubleshooting account issues, managing permissions and access to network fileshares, and user access reportingp',
				'Securing Windows systems and applying cybersecurity best practices by using host-based firewalls, network ACLs, least-privilege user access scanning and patching for known vulnerabilities',
				'PowerShell to manage remote hosts, configure and automate tasks'
			]
		},
		{
			title: 'Virtualisation and Cloud',
			skills: [
				'Completed VMware vSphere v6.5 Install, Configure and Manage course.  Experience in deploying ESXi hosts, VMware appliances, virtual networking and network storage provisioning',
				'Experienced in managing VM’s including hardware provisioning, snapshots and backups, fault tolerance, high availability and troubleshooting',
				'Experience using Azure to deploy VM’s, import VM’s and other services such as SQL Cluster Fileshare Witnesses'
			]
		},
		{
			title: 'Datacentre Operations',
			skills: [
				'Experienced in physically installing, racking, and configuring Dell Chassis’s, blade servers, and rack-mount servers',
				'Familiar with datacentre operations and procedures, hardware management and networking',
				'Vendor management for hardware suppliers such as Dell, HP and Apple. Quotes, purchasing, raising support requests for technical issues and hardware warranty replacements'
			]
		},
		{
			title: 'Programming and Scripting',
			skills: [
				'Strong programming ability with knowledge in data structures and algorithms. Experienced in JavaScript/TypeScript, Bash, and SQL. Some experience with Rust, Python, PowerShell, Java, C, Objective C and C++',
				'Experienced fullstack web developer with knowledge of JavaScript, TypeScript, frameworks such as Vue, Angular, and React. Good knowledge of code management using Git, HTTP request and APIs, deploying websites, servers, databases, and other services/APIs.',
				'Scripting and automation using Bash and PowerShell to manage servers, deployments and services, automatically install and update software to remote hosts, and manage fileshares'
			]
		},
		{
			title: 'Projects and Project Management',
			skills: [
				'Worked on several server refresh projects to replace hardware and upgrade virtual servers. For hardware this included design and validation of the new systems, procurement, installation, and decommissioning of old equipment, replacing many chassis, blades, rackmounts, and switches. Upgraded over 50 virtual servers and 10 applications to new OS/application versions and associated web, database, and application servers',
				'Completed many web development projects from custom web stores to backend portals, tooling, and automation for businesses. Requirements gathering, application design, agile development process, deployment of site and security hardening, code handover, and maintenance including bug fixing and implementing new features',
				'Completed a web-based system for an industry client with secure log in, user account management, web forms, PHP and SQL database. Gathered requirements from client, designed system, developed in agile project methodology, created documentation and delivered presentations. The project was completed on time and signed off by the client as meeting agreed specifications. I was awarded a High Distinction for this project',
				'Workplace project to automate operational administrative tasks such as account provisioning and management of access to network fileshares. Current business and technical processes were analysed to determine critical points that require the most manual intervention. Through a combination of process changes and PowerShell scripts we are aiming to automate over 90% of the workload'
			]
		},
		{
			title: 'Client Service and Communication',
			skills: [
				'Strong communication skills with the ability to explain technical concepts to non-technical stakeholders',
				'Experienced in gathering requirements from clients and translating them into technical specifications',
				'Proven track record of delivering high-quality customer service and support'
// 	Focused on client satisfaction and outcomes, received Outstand Client Service aware and continued feedback from clients
//  Strong written and verbal communication skills, ability to interface with clients of varying technical proficiency, experience in supporting executive clients
			]
		}
	];
}