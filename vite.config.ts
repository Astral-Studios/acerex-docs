import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				discord: 'https://discord.gg/EaUpVM2fzu',
				navbar: [
					{
						title: 'Home',
						to: '/',
					},
				],
				sidebar: {
					'/': [
						{
							title: 'Getting Started',
							collapsible: false,
							items: [
								{
									title: 'Introduction',
									to: '/getting-started/introduction/',
								},
								{
									title: 'Rules',
									to: '/getting-started/rules/',
								},
								{
									title: 'Commands',
									to: '/getting-started/commands/',
								},
							],
						},
						{
							title: 'Gameplay',
							collapsible: false,
							items: [
								{
									title: 'Day One',
									to: '/gameplay/day-one/',
								},
								{
									title: 'Creating a Faction',
									to: '/gameplay/creating-a-faction/',
								},
								{
									title: 'Faction Management',
									to: '/gameplay/faction-management/',
								},
								{
									title: 'Relationships',
									to: '/gameplay/relationships/',
								},
								{
									title: 'Claiming Land',
									to: '/gameplay/claiming-land/',
								},
								{
									title: 'Power',
									to: '/gameplay/power/',
								},
								{
									title: 'Raiding',
									to: '/gameplay/raiding/',
								},
								{
									title: 'The Warzone',
									to: '/gameplay/the-warzone/',
								}
							],
						},
						{
							title: 'Economy',
							collapsible: false,
							items: [
								{
									title: 'Shops',
									to: '/economy/shops/',
								},
								{
									title: 'Auction House',
									to: '/economy/auction-house/',
								},
							],
						},
					],
				},
				logo: '/sveltepress.svg',
			}),
			siteConfig: {
				title: 'AceRex Docs',
				description: 'Find guides, rules, and more here.',
			},
		}),
	],
})

export default config
