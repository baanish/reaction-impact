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
		{ text: 'Anemo',link: 'en/anemo' },
		{ text: 'Cryo', link: 'en/cryo' },
		{ text: 'Dendro', link: 'en/dendro' },
		{ text: 'Electro', link: 'en/electro' },
		{ text: 'Geo', link: 'en/geo' },
		{ text: 'Hydro', link: 'en/hydro' },
		{ text: 'Pyro', link: 'en/pyro' },

		{ text: 'Anemo Reactions', header: true },
		{ text: 'Swirl', link: 'en/swirl'},

		{ text: 'Geo Reactions', header: true },
		{ text: 'Crystalize', link: 'en/crystalize'},

		{ text: 'Cryo Reactions', header: true },
		{ text: 'Crystalize', link: 'en/crystalize'},
		{ text: 'Frozen', link: 'en/frozen'},
		{ text: 'Melt', link: 'en/melt'},
		{ text: 'Superconduct', link: 'en/superconduct'},
		{ text: 'Swirl', link: 'en/swirl'},

		{ text: 'Dendro Reactions', header: true },

		{ text: 'Electro Reactions', header: true },
		{ text: 'Crystalize', link: 'en/crystalize'},
		{ text: 'Electro-Charged', link: 'en/electrocharged'},
		{ text: 'overload', link: 'en/overload'},
		{ text: 'Superconduct', link: 'en/superconduct'},
		{ text: 'Swirl', link: 'en/swirl'},

		{ text: 'Hydro Reactions', header: true },
		{ text: 'Crystalize', link: 'en/crystalize'},
		{ text: 'Frozen', link: 'en/frozen'},
		{ text: 'Vaporize', link: 'en/vaporize'},
		{ text: 'Electro-Charged', link: 'en/electrocharged'},
		{ text: 'Swirl', link: 'en/swirl'},

		{ text: 'Pyro Reactions', header: true },
		{ text: 'Crystalize', link: 'en/crystalize'},
		{ text: 'Vaporize', link: 'en/vaporize'},
		{ text: 'Melt', link: 'en/melt'},
		{ text: 'Overload', link: 'en/overload'},
		{ text: 'Swirl', link: 'en/swirl'},
	],
};
