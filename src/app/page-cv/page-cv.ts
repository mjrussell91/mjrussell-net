import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from '../icon/icon';

type Degree = {
	title: string;
	major: string;
	institution: string;
	year: Date;
	technicalCompetencies: string[];
	businessCompetencies: string[];
};

type Education = {
	title: string;
	institution: string;
	year: Date;
};

type Skills = {
	title: string;
	skills: string[];
}

type Technologies = {
	title: string;
	icons: string[];
	skills: string[];
}

type Employment = {
	title: string;
	description: string;
	organisation: string;
	startDate: Date;
	endDate: Date | null;
	rolesAndDuties: string[];
	outcomesAndAchievements: string[];
	projects: string[];
}
@Component({
	selector: 'app-page-cv',
	imports: [CommonModule, Icon],
	templateUrl: './page-cv.html',
	styleUrl: './page-cv.css'
})
export class PageCv {
	protected readonly degree: Degree = {
		title: 'Bachelor of Information Technology',
		major: 'Major in Marketing & Management',
		institution: 'Griffith University',
		year: new Date('2012-01-01'),
		technicalCompetencies: [
			'Object-oriented programming, data structures, algorithms, and discrete mathematics',
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
			year: new Date('2008-01-01')
		},
		{
			title: 'Certificate III of Information Technology',
			institution: 'Metropolitan South Institute of TAFE',
			year: new Date('2008-01-01')
		},
		{
			title: 'Certificate II of Business',
			institution: 'Metropolitan South Institute of TAFE',
			year: new Date('2008-01-01')
		},
		{
			title: 'Certificate I of Workplace Education',
			institution: 'Metropolitan South Institute of TAFE',
			year: new Date('2007-01-01')
		}
	];

	protected readonly certsAndTraining: Education[] = [
		{
			title: 'VMware vSphere v6.5 Certificate',
			institution: 'Dimension Data Learning Services',
			year: new Date('2017-01-01')
		},
		{
			title: 'CompTIA Cloud Essentials Certification',
			institution: 'Linux Academy',
			year: new Date('2017-01-01')
		},
		{
			title: 'Azure Essentials',
			institution: 'Linux Academy',
			year: new Date('2017-01-01')
		},
		{
			title: 'ITIL Fundamentals Training',
			institution: 'UXC Consulting',
			year: new Date('2015-01-01')
		},
		{
			title: 'Windows 10 Training',
			institution: 'Dimension Data Learning Services',
			year: new Date('2015-01-01')
		},
		{
			title: 'Windows 8 Training',
			institution: 'Dimension Data Learning Services',
			year: new Date('2013-01-01')
		},
		{
			title: 'Mac OS X Training',
			institution: 'Dimension Data Learning Services',
			year: new Date('2013-01-01')
		},
		{
			title: 'Client Service Training',
			institution: 'Griffith University',
			year: new Date('2013-01-01')
		},
		{
			title: 'Windows 7 Training',
			institution: 'Dimension Data Learning Services',
			year: new Date('2012-01-01')
		}
	];

	protected readonly skills: Skills[] = [
		{
			title: 'Software Development',
			skills: [
				'Strong programming ability with knowledge in data structures, algorithms, and Object-Oriented Programming. Experienced in JavaScript/TypeScript, Bash, and SQL, with some experience in Rust, Python, PowerShell, Java, C, Objective C and C++',
				'Experienced fullstack web developer with knowledge of JavaScript, TypeScript, frameworks such as Vue, Angular, and React. Good knowledge of HTTP requests and APIs, deploying websites, servers, firewalls, databases, and other services/APIs',
				'Competent using Git and repositories such as GitHub and GitLab for code version control including cloning repositories, committing regularly with clear descriptions, branching, merging, and pull requests'
			]
		},
		{
			title: 'Systems Engineering and Scripting',
			skills: [
				'Strong terminal and Linux experience. Scripting and automation using Bash and PowerShell including managing and monitoring hosts and services',
				'Systems administrator experienced in managing VMs, HyperVisors, and physical servers and applying least privilege principle to service accounts and file permissions',
			]
		},
		{
			title: 'Projects and Project Management',
			skills: [
				'Completed many web development projects from custom web stores to backend portals, tooling, and automation for businesses. Requirements gathering, application design, agile development process, deployment and security hardening, code handover, and maintenance including bug fixing and implementing additional features',
				'Managed several server refresh projects to replace hardware and upgrade virtual servers. Hardware refresh included design and validation of the new systems, procurement, installation, and decommissioning of old equipment replacing many chassis, blades, rackmounts, and switches. Upgraded over 50 virtual servers and 10 applications to new OS/application versions and associated web, database, and application servers'
			]
		},
		{
			title: 'Virtualisation and Cloud',
			skills: [
				'Experienced in deploying ESXi hosts, VMware appliances, virtual networking and network storage provisioning. Completed VMware vSphere v6.5 Install, Configure and Manage course',
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
			title: 'Windows Server and Microsoft products',
			skills: [
				'Experienced in supporting Windows Server OSes, Domains, Active Directory, Group Policies, DFS, SCCM and Windows Patching',
				'Managing AD Users and Groups, troubleshooting account issues, managing permissions and access to network fileshares, and user access reporting',
				'Securing Windows systems and applying cybersecurity best practices by using host-based firewalls, network ACLs, least-privilege user access scanning and patching for known vulnerabilities',
				'PowerShell to manage remote hosts, configure and automate tasks'
			]
		},
		{
			title: 'Client Service and Communication',
			skills: [
				'Strong written and verbal communication skills with the ability to explain technical concepts to non-technical stakeholders',
				'Experienced in gathering requirements from clients and translating them into technical specifications',
				'Proven track record of delivering high-quality customer service and support, receiving Outstanding Client Service awards and continued feedback from clients'
			]
		}
	];

	protected readonly technologies: Technologies[] = [
		{
			title: 'Containers and Docker',
			icons: ['docker'],
			skills: [
				'can run containers, run apps as services using docker-compose, manage containers by listing, clearing unused containers and volumes through terminal or GUI',
				'package apps as containers, pass in data/directories, pass in secrets, debug build issues',
				'debug containers through shell access'
			]
		},
		{
			title: 'Git, GitHub & GitLab',
			icons: ['git', 'gitlab','github'],
			skills: [
				'Familiar with core version control concepts and git version control, collaboration, branches, prs, code review, issue tracking, CI/CD integration, using other repos like GitLab, using terminal and GUI from IDE or standalone app',
			]
		},
		{
			title: 'Windows',
			icons: ['windows'],
			skills: [
				'Servers, AD, domains, etc',
			]
		},
		{
			title: 'Linux',
			icons: ['linux'],
			skills: [
				'package managers, services/systemd, networking, firewalls, users/groups, permissions, bash scripting',
			]
		},
		{
			title: 'AWS',
			icons: ['aws'],
			skills: [
				'EC2, EBS, S3, Lambda, API Gateway, RDS, KMS, IAM, CLI',
			]
		},
		{
			title: 'Vue/Nuxt',
			icons: ['vue', 'nuxt'],
			skills: [
				'generate projects, app config, new components, routing, pipes, binding and HTML syntax for loops, ifs, data binding (v-bind:), dynamic classes and attributes, dev server, builds, environments, proxy, debugging',
			]
		},
		{
			title: 'Angular',
			icons: ['angular'],
			skills: [
				'generate projects, app config, new components, modules, routing, pipes, binding and HTML syntax for loops, ifs, data binding (inputs, outputs), dynamic classes and attributes, observables, dev server, builds, environments, proxy, debugging',
			]
		},
		{
			title: 'TypeScript',
			icons: ['typescript'],
			skills: [
				'declaring types and interfaces (or are they classes?), typing vars, working with existing types (installing/importing them from repos), typesafty',
			]
		},
		{
			title: 'Web Servers, Nginx, Apache',
			icons: ['nginx', 'apache'],
			skills: [
				'installation, configuring sites, ports, redirects, auth, certificates including generating and renewing,',
			]
		},
		{
			title: 'Databases, SQL, Postgres',
			icons: ['postgres','sql', 'postgres'],
			skills: [
				'installation, configuring servers with users and sockets/bind IPs, service accounts, creating databases and tables, managing database permissions, connecting and DB client tools, service management, logging, backups, restoring',
				'writing queries, temp tables, procedures/functions'
			]
		},
		{
			title: 'Others',
			icons: [],
			skills: [
				'state management like pinia for various frameworks, wrote own state service for angular, state is immutables and shares data consistently and efficiently across an application, enables reactivity',
				'JSON DBs like firebase? guess it doesnt hurt and I already have an icon'
			]
		},
	];

	protected readonly employmentHistory: Employment[] = [
		{
			title: 'Software Engineer',
			description: 'Developing dynamic web applications and responsible for the lifecycle of the application from agile development, managing deployments, servers, APIs, and services through to testing, CI/CD, and monitoring.',
			organisation: 'Pxel',
			startDate: new Date('2021-08-01'),
			endDate: null, // Present
			rolesAndDuties: [
				'Developing web applications using JavaScript/TypeScript on frameworks including Vue3, Nuxt3, and React. Dynamic pages using data from content management systems such as WordPress, Shopify/Sanity, and Directus accessed via REST APIs and GraphQL',
				'Deploying sites using static site generation and server side rendering on Cloud services including AWS, Azure, CloudFlare, Netlify, and Dockerised deployments. Using CI/CD tools to integrate testing, automate builds on branch commits, and generate preview links from pull requests',
				'Standing up servers and services in the Cloud such as EC2s for hosting applications, S3 buckets for application data, SQL databases, API proxies, and CDNs'
			],
			outcomesAndAchievements: [
				'Successfully built and deployed over 10 web applications with many complex custom features, reliable uptime and stability, and customisable for the user from their CMS'
			],
			projects: [
				`WLTH - Banking portal for WLTH customers to view account balances, transactions, interest rates, reward points, and other financial information as well as manage their customer details and preferences. Built with Nuxt and TypeScript, security hardened, Okta authentication, and integrated WLTH's APIs with secure API gateways.`,
				'Pricing Tool - Internal tool that allows the client to match their Shopify products against pricing data scraped from various public sources using Puppeteer and APIs to inform pricing decisions. Built with Nuxt, Shopify, Directus, Puppeteer, and WebSockets',
				'EverVessel - Web store with the front end built using React and Sanity APIs for the back end, custom components to allow users to enter text and images for laser engravings',
				'Tax Builder - Nuxt app that takes property inspection data for tax purposes, parses the data for assets into a table, allows the user to enter values and make changes, then the app automatically calculates and generates various tax deprecation schedules over 40 years as well as exporting the tables as a CSV so that they can be copied into reports'
			]
		},
		{
			title: 'Social Analytics Lab Coordinator',
			description: 'Managed the Social Analytics Lab at Griffith University, a research lab that stored, managed, and analysed administrative data from several Queensland Government agencies for social science research. This involved compiling data for projects, managing user and project approvals, physical and computer access. Maintaining IT infrastructure, software, data, and security systems.',
			organisation: 'Griffith University',
			startDate: new Date('2019-07-01'),
			endDate: new Date('2024-12-01'),
			rolesAndDuties: [
				'Compiling data from datasets for research projects using SQL and GIS tools, and updating datasets from data custodians',
				'Managing project administration including applications, approvals from custodians and committees, and reporting on project updates and outcomes',
				'Managing users including their application, induction, keys and swipe cards, physical and computer access'
			],
			outcomesAndAchievements: [
				'Grew the lab to over 80 researchers working across 50 research projects from 3 data sources to produce over 100 outputs including journal publications, manuscripts, reports, and conference presentations'
			],
			projects: []
		},
		{
			title: 'Systems Engineer',
			description: 'Responsible for the delivery of the Server Refresh Project to upgrade out of warranty physical server hardware and upgrade unsupported Windows Server OS versions.',
			organisation: 'Griffith University',
			startDate: new Date('2018-03-01'),
			endDate: new Date('2019-07-01'),
			rolesAndDuties: [
				'Maintaining and installing physical server hardware, including Dell M1000e chassis, Dell M-series blades, and Dell R-series servers, working with hardware vendors to extend warranty support and repair hardware',
				'Designing and quoting server hardware solutions to meet operational, project, and application requirements',
				'Deploying and configuring Windows Server OSes and configuring applications to comply with the Solution Architecture and security hardening',
			],
			outcomesAndAchievements: [
				'Successfully delivered Server Refresh Project 2018: Install and configure Dell M1000e chassis and Dell M640 blades, upgrade or decommission over 50 Windows 2008 R2 servers and 10 applications',
				'Received Sustained Performance Award from the Director of IT Infrastructure'
			],
			projects: []
		},
		{
			title: 'Senior Systems Administrator',
			description: 'Support of nearly one thousand Windows VM servers across two Data Centres at Griffith University.',
			organisation: 'Griffith University',
			startDate: new Date('2016-11-01'),
			endDate: new Date('2018-03-01'),
			rolesAndDuties: [
				'Diagnosing and resolving issues with Windows servers such as performance, disk capacity, access, firewall, and VMware host contention',
				'On-call responsibility for diagnosing and resolving server incidents as well as successful participation as primary contact for Disaster Recovery simulation event',
				'Provisioning and managing VMware VM’s including deployment, snapshots, disk management and hardware rightsizing, migrating hosts and managing performance',
				'Managing Windows domains, AD accounts and groups, access to servers and network shares',
			],
			outcomesAndAchievements: [
				'Completed a project to automate 90% of manual operational tasks through process changes and PowerShell scripts',
				'Awarded System Administrator of the Month as nominated by colleagues',
				'Awarded for maintaining a high rate of service desk tickets resolved',
				'Continued feedback for high-levels of client satisfaction'
			],
			projects: []
		},
		// {
		// 	title: 'Computing Support Officer',
		// 	description: 'Support a fleet of nearly 5000 staff computers at Griffith University with a wide range of vendors, configurations, software, and peripherals.',
		// 	organisation: 'Griffith University',
		// 	startDate: new Date('2012-07-01'),
		// 	endDate: new Date('2016-11-01'),
		// 	rolesAndDuties: [
		// 		'Responsible for managing the lifecycle of machines from various vendors such as Dell, HP , and Apple and included quoting, procurement, setup, installation and migration of user data and software, support and warranty, and asset disposal',
		// 		'Managed Windows, macOS and Linux machines with a multitude of software packages and peripheral devices. Includes BYOD devices such as iOS and Android phones and tables',
		// 		'Diagnose and resolve complex technical issues across a wide variety of software and hardware',
		// 		'Excellent client service and communication while managing work based on ITIL principles'
		// 	],
		// 	outcomesAndAchievements: [
		// 		'Development and support of Griffith University Red Zone, an innovative technology space that used large tiled screens with meshed display, convoluted projectors onto a curved surface, and interactive topology projection using silicone sand'
		// ]	],
		// 	projects: []
		// },
		// {
		// 	title: 'Audiovisual Support Attendant',
		// 	description: 'Support of AV equipment and spaces including Lecture Theatres, Seminar Rooms, Video Conferences, Teaching Laboratories, and Events across Griffith University.',
		// 	organisation: 'Griffith University',
		// 	startDate: new Date('2011-12-01'),
		// 	endDate: new Date('2012-06-01'),
		// 	rolesAndDuties: [
		// 		'Support of Griffith AV spaces; Lecture Theatres, Seminar Rooms, Video Conferences, Teaching Laboratories, Events',
		// 		'Support of AV equipment; Projectors, Lecture Capture/Echo 360, AMX touch panels and control panels, touch screens, Cisco control panels, Cisco Video Conference Televisions, Public Address systems, mixers, microphones and video cameras',
		// 		'Supporting a wide range of clients from students to executives while while working within a team and independently, including on-call out of hours'
		// 	],
		// 	outcomesAndAchievements: [
		// 		'Received Outstanding Client Service award',
		// 		'Team was nominated for Outstanding Client Service award'
		// 	],
		// 	projects: []
		// },
		// {
		// 	title: 'Computer Laboratory Attendant',
		// 	description: 'Support of hardware and software for student, common use, and teaching computer laboratories across multiple campuses at Griffith University.',
		// 	organisation: 'Griffith University',
		// 	startDate: new Date('2009-11-01'),
		// 	endDate: new Date('2011-11-01'),
		// 	rolesAndDuties: [
		// 		'Provide IT support for computers in laboratories including warranty repairs and managing software issues',
		// 		'Audit, clean, maintain, and re-image computer laboratories',
		// 		'Install new computer hardware including cable management and imaging, disposal of old equipment including wiping of data and e-waste'
		// 	],
		// 	outcomesAndAchievements: [
		// 		'Coordinated multiple staff at multiple locations in the installation of new computer laboratories and disposal of old equipment'
		// 	],
		// 	projects: []
		// }
	];

	protected readonly honoursAndAchievements: Education[] = [
		{ year: new Date('2018-01-01'), title: 'Sustained Performance Award', institution: 'Griffith University - ITI Director Recognition' },
		{ year: new Date('2017-01-01'), title: 'Systems Administrator of the Month', institution: 'Griffith University - S3 Team Recognition' },
		{ year: new Date('2012-01-01'), title: 'Outstanding Client Service', institution: 'Griffith University - ICTS Staff Recognition' },
		{ year: new Date('2008-01-01'), title: 'Academic Distinction Award', institution: 'Capalaba State College' },
		{ year: new Date('2007-01-01'), title: 'Technology Captain', institution: 'Capalaba State College' }
	]
}