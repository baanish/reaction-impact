export const SITE = {
	title: 'Reaction Impact',
	description: 'An website to describe the elemental reactions in genshin impact.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }


export const SIDEBAR = {
	en: [
		{ text: 'Elements', header: true, open:true },
		{ text: 'Anemo',link: '/reaction-impact/en/anemo' },
		{ text: 'Cryo', link: '/reaction-impact/en/cryo' },
		{ text: 'Dendro', link: '/reaction-impact/en/dendro' },
		{ text: 'Electro', link: '/reaction-impact/en/electro' },
		{ text: 'Geo', link: '/reaction-impact/en/geo' },
		{ text: 'Hydro', link: '/reaction-impact/en/hydro' },
		{ text: 'Pyro', link: '/reaction-impact/en/pyro' },

		{ text: 'Anemo Reactions', header: true },
		{ text: 'Swirl', link: '/reaction-impact/en/swirl'},

		{ text: 'Geo Reactions', header: true },
		{ text: 'Crystalize', link: '/reaction-impact/en/crystalize'},

		{ text: 'Cryo Reactions', header: true },
		{ text: 'Crystalize', link: '/reaction-impact/en/crystalize'},
		{ text: 'Frozen', link: '/reaction-impact/en/frozen'},
		{ text: 'Melt', link: '/reaction-impact/en/melt'},
		{ text: 'Superconduct', link: '/reaction-impact/en/superconduct'},
		{ text: 'Swirl', link: '/reaction-impact/en/swirl'},

		{ text: 'Dendro Reactions', header: true },

		{ text: 'Electro Reactions', header: true },
		{ text: 'Crystalize', link: '/reaction-impact/en/crystalize'},
		{ text: 'Electro-Charged', link: '/reaction-impact/en/electrocharged'},
		{ text: 'overload', link: '/reaction-impact/en/overload'},
		{ text: 'Superconduct', link: '/reaction-impact/en/superconduct'},
		{ text: 'Swirl', link: '/reaction-impact/en/swirl'},

		{ text: 'Hydro Reactions', header: true },
		{ text: 'Crystalize', link: '/reaction-impact/en/crystalize'},
		{ text: 'Frozen', link: '/reaction-impact/en/frozen'},
		{ text: 'Vaporize', link: '/reaction-impact/en/vaporize'},
		{ text: 'Electro-Charged', link: '/reaction-impact/en/electrocharged'},
		{ text: 'Swirl', link: '/reaction-impact/en/swirl'},

		{ text: 'Pyro Reactions', header: true },
		{ text: 'Crystalize', link: '/reaction-impact/en/crystalize'},
		{ text: 'Vaporize', link: '/reaction-impact/en/vaporize'},
		{ text: 'Melt', link: '/reaction-impact/en/melt'},
		{ text: 'Overload', link: '/reaction-impact/en/overload'},
		{ text: 'Swirl', link: '/reaction-impact/en/swirl'},
	],
};
