app.service('resumeCnApi', [
	function () {

		function getExperience () {
			return [
				{
					company: 'Reflektion',
					time: {
						full: '05/2013 - 至今',
						simple: 2013
					},
					address: 'San Mateo, California',
					link: 'http://reflektion.com/',
					title: '軟件工程師',
					tags: [
						'AngularJS',
						'node.js',
						'Bootstrap',
						'SCSS',
						'Lodash',
						'Highcharts',
						'MongoDB',
						'gulp.js'
					],
					tasks: [
						'和產品以及設計師探討 UI/UX 設計',
						'構架了前後端溝通的 APIs',
						'設計了數據可視化模塊',
						'重構了 gulpfile，JavaScript，和 SCSS，降低了維護成本，增強了可擴展性',
						'用 Jasmine 添加了前後端的單元化測試',
						'在設計階段提供了設計文案及相關材料'
					]
				},
				{
					company: 'AppDynamics',
					time: {
						full: '09/2012 - 12/2012',
						simple: 2012
					},
					address: 'San Francisco, California',
					link: 'https://www.appdynamics.com/',
					title: '軟件實習生',
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
						'設計并實現了前端的控制面板和後端的數據庫',
						'用腳本語言自動生成 pdf 文檔'
					]
				},
				{
					company: 'Funzio',
					time: {
						full: '01/2012 - 04/2012',
						simple: 2012
					},
					address: 'San Francisco, California',
					link: 'http://product.gree.net/us/en/',
					title: '軟件實習生',
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
						'用 MVC 結構實現了內部後台的控制面板',
						'用 python 腳本自動化了地域化步驟',
						'在不同設備上進行了產品測試，大幅降低 bug 數量'
					]
				},
				{
					company: 'Apple',
					time: {
						full: '01/2011 - 09/2011',
						simple: 2011
					},
					address: 'Cupertino, California',
					link: 'http://www.apple.com/',
					title: 'Localization 實習生',
					tags: [
						'Bash',
						'AppleScript',
						'MySQL',
						'Ruby'
					],
					tasks: [
						'簡化了內部工具的用戶界面',
						'重新實現了地域化腳本，增快了運行速度 10倍',
						'用腳本自動化了 Photoshop 和 InDesign 的流程',
						'使用數據庫來管理、驗證 URL'
					]
				}
			];
		}

		function getMiscellenous () {
			return [
				{
					program: 'Girls Who Code',
					time: {
						full: '09/2016 - 至今',
						simple: 2016
					},
					link: 'https://girlswhocode.com/',
					title: '老師',
					description: '輔導 6 － 8年級學生編程。主要是 web 前端編譯'
				},
				{
					program: 'Square Code Camp',
					time: {
						full: '01/2013',
						simple: 2016
					},
					link: 'https://squareup.com/code-camp',
					title: '參加者',
					description: '參與了一個為期 3天的計算機座談會'
				},
			];
		}

		this.getExperience = getExperience;
		this.getMiscellenous = getMiscellenous;
	}
]);