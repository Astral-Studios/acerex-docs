import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				discord: 'https://discord.gg/EaUpVM2fzu',
				github: 'https://github.com/The-AceRex-Group/acerex-docs',
				editLink: 'https://github.com/The-AceRex-Group/acerex-docs/edit/master/src/routes:route',
				docsearch: {
					appId: 'W4VPW2FQ10',
					apiKey: 'a1ae2f34bdbd9025568b705ce1fb1dfc',
					indexName: 'DocSearch',
				},
				navbar: [
					{
						title: 'Home',
						to: '/',
					},
				],
				sidebar: {
					'/': [
						{
							title: 'Acerex Factions',
							collapsible: true,
							items: [
								{
									title: 'Getting Started',
									collapsible: false,
									items: [
										{
											title: 'Introduction',
											to: '/acerex-factions/getting-started/introduction/',
										},
										{
											title: 'Rules',
											to: '/acerex-factions/getting-started/rules/',
										},
										{
											title: 'Commands',
											to: '/acerex-factions/getting-started/commands/',
										},
										{
											title: 'Changelog',
											to: '/acerex-factions/getting-started/changelog/',
										},
									],
								},
								{
									title: 'Gameplay',
									collapsible: false,
									items: [
										{
											title: 'Day One',
											to: '/acerex-factions/gameplay/day-one/',
										},
										{
											title: 'Creating a Faction',
											to: '/acerex-factions/gameplay/creating-a-faction/',
										},
										{
											title: 'Faction Management',
											to: '/acerex-factions/gameplay/faction-management/',
										},
										{
											title: 'Relationships',
											to: '/acerex-factions/gameplay/relationships/',
										},
										{
											title: 'Claiming Land',
											to: '/acerex-factions/gameplay/claiming-land/',
										},
										{
											title: 'Power',
											to: '/acerex-factions/gameplay/power/',
										},
										{
											title: 'Raiding',
											to: '/acerex-factions/gameplay/raiding/',
										},
										{
											title: 'Cannoning',
											to: '/acerex-factions/gameplay/cannoning/',
										},
										{
											title: 'The Warzone',
											to: '/acerex-factions/gameplay/the-warzone/',
										},
									],
								},
								{
									title: 'Economy',
									collapsible: false,
									items: [
										{
											title: 'Shops',
											to: '/acerex-factions/economy/shops/',
										},
										{
											title: 'Auction House',
											to: '/acerex-factions/economy/auction-house/',
										},
									],
								},
							],
						},
						{
							title: 'Cobblecore Skyblock',
							collapsible: true,
							items: [
								{
									title: 'Getting Started',
									collapsible: false,
									items: [
										{
											title: 'Introduction',
											to: '/cobblecore-skyblock/getting-started/introduction/',
										},
										{
											title: 'Rules',
											to: '/cobblecore-skyblock/getting-started/rules/',
										},
										{
											title: 'Commands',
											to: '/cobblecore-skyblock/getting-started/commands/',
										},
										{
											title: 'Changelog',
											to: '/cobblecore-skyblock/getting-started/changelog/',
										},
									],
								},
								{
									title: 'Gameplay',
									collapsible: false,
									items: [],
								},
								{
									title: 'Economy',
									collapsible: false,
									items: [],
								},
							],
						},
					],
				},
				logo: '/favicon.svg',
			}),
			siteConfig: {
				title: 'Acerex Docs',
				description: 'Crafting the ultimate Minecraft experience, one server at a time.',
			},
		}),
	],
})

export default config
