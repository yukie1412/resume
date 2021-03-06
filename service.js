app.service('resumeApi', [
	function () {

		function getProfile () {
			return {
				email: {
					icon: 'fa-envelope',
					text: 'jenniferq0204@gmail.com',
					href: 'mailto'
				},
				phone: {
					icon: 'fa-mobile',
					text: '415.513.6037',
					href: 'tel'
				},
				// address: {
				// 	icon: 'fa-map-marker',
				// 	text: 'San Francisco Bay Area'
				// }
			};
		}

		function getSkills () { // order by groups/categories
			return {
				proficient: [
					'JavaScript / TypeScript',
					'CSS / SCSS',
					'HTML',
					'Angular / AngularJS',
					'AngularFire2',
					'Angular Material',
					'Bootstrap'
				],
				knowledgeable: [
					'Node.js', 'Jasmine', 'gulp.js', 'Webpack', 'Lodash', 'Java', 'Python'
				]
			};
		}

		function getExperience () {
			return [
				{
					company: 'Cape',
					time: {
						full: '01/2017 - present',
						simple: 2017
					},
					address: 'Redwood City, CA',
					link: 'http://cape.com/',
					title: 'Software Engineer',
					tags: [
						'Angular',
						'TypeScript',
						'RxJS',
						'Angular Material',
						'Bootstrap',
						'SCSS',
						'Firebase',
						'Django',
					],
					tasks: [
						'Collaborated with QA, UX, Product, and Backend teams to design and implement various features',
						'Migrated and reachitected Frontend structure from Django template to Angular',
						'Setup and maintained Frontend workflow with community best practices',
						'Analyzed and improved web performance based on audit reports',
						'Initiated Firebase Cloud Firestore to better reflect changes in realtime',
						'Contributed in API and architectural design meetings'
					]
				},
				{
					company: 'Reflektion',
					time: {
						full: '05/2013 - 11/2016',
						simple: 2013
					},
					address: 'San Mateo, CA',
					link: 'http://reflektion.com/',
					title: 'Principal Software Engineer',
					tags: [
						'AngularJS',
						'Node.js',
						'Bootstrap',
						'SCSS',
						'Lodash',
						'Highcharts',
						'MongoDB',
						'gulp.js'
					],
					tasks: [
						'Collaborated with UX and Product teams to produce top-notch UI',
						'Designed and Architected APIs to ease the communication between Frontend and Backend',
						'Built data visualization features to aggregate data and display charts',
						'Refactored and modularized end-to-end codebase for better scalability and maintainability',
						'Initiated Jasmine tests to increased unit test coverage',
						'Contributed to Design Documents and API proposals during planning phase',
						'Guided and mentored interns and New Grads'
					]
				},
				{
					company: 'AppDynamics',
					time: {
						full: '09/2012 - 12/2012',
						simple: 2012
					},
					address: 'San Francisco, CA',
					link: 'https://www.appdynamics.com/',
					title: 'Software Intern',
					tags: [
						'HTML',
						'JavaScript',
						'Bootstrap',
						'CSS',
						'PHP',
						'Bash',
						'MySQL'
					],
					tasks: [
						'Designed and implemented end-to-end internal dashboard page from UX to database',
						'Scripted automation tasks to generate PDF reports'
					]
				},
				{
					company: 'Funzio (acquired by GREE)',
					time: {
						full: '01/2012 - 04/2012',
						simple: 2012
					},
					address: 'San Francisco, CA',
					link: 'http://product.gree.net/us/en/',
					title: 'Software Intern',
					tags: [
						'HTML',
						'JavaScript',
						'Bootstrap',
						'CSS',
						'PHP',
						'Python',
						'bash'
					],
					tasks: [
						'Implemented internal dashboard UI and applied the principles of MVC',
						'Tailored python scripts to automate localization setups for Excel',
						'Tested pre-released games cross mobile devices to ensure bug-free releases'
					]
				},
				{
					company: 'Apple',
					time: {
						full: '01/2011 - 09/2011',
						simple: 2011
					},
					address: 'Cupertino, CA',
					link: 'http://www.apple.com/',
					title: 'Localization Release Intern',
					tags: [
						'Bash',
						'AppleScript',
						'MySQL',
						'Ruby'
					],
					tasks: [
						'Simplified Graphical User Interface tools to enhance usability',
						'Redesigned localization script which increased work efficiency by 90%',
						'Scripted Photoshop and InDesign automation tasks',
						'Created and maintained URL Database to localize and validate URLs'
					]
				}
			];
		}

		function getMiscellenous () {
			return [
				{
					program: 'Techtonica',
					time: {
						full: '07/2019 - present',
						simple: 2017
					},
					link: 'https://techtonica.org/',
					title: 'Mentor',
					description: 'Provided professional advice and technical guidance related to software engineering'
				},
				{
					program: 'Girls Who Code',
					time: {
						full: '09/2016 - 12/2017',
						simple: 2016
					},
					link: 'https://girlswhocode.com/',
					title: 'Club Facilitator',
					description: 'Taught middle school girls basic concepts of computer science and web design'
				},
			];
		}

		this.getProfile = getProfile;
		this.getSkills = getSkills;
		this.getExperience = getExperience;
		this.getMiscellenous = getMiscellenous;
	}
]);