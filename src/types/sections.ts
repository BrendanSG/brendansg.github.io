export type Lang = 'FR' | 'EN';
export type Translated<T> = { [K in Lang]: T };
export function getTranslated<T>(obj: T | Translated<T>, lang: Lang): T {
	if (typeof obj === 'object' && obj !== null && 'FR' in obj && 'EN' in obj) {
		return obj[lang];
	} else {
		return obj;
	}
}

/*
 * id: ID used in the link (<a href="#{id}">{name}</a>)
 * shortname: The short name of the section (used in the navbar)
 * fullname?: The full name, used as title in the content (using shortname as fallback)
 * order: Lower value means showed first in both navbar and content
 * content: The JSX content to render
 */
export type Section = {
	id: string;
	shortname: string | Translated<string>;
	fullname?: string | Translated<string>;
	order: number;
	content: React.JSX.Element | Translated<React.JSX.Element>;
};

/*
 * Used in 'education', 'projects' and 'experiences' section
 * name: Title of the item
 * additional: Additional info (shown next to title, faculatative)
 * time: Some text shown on the right of the item, should be used for dated items (facultative)
 * details: A list of string, shown below the title
 */
export type EntryListItem = {
	name: string;
	additional?: string;
	time?: string;
	details: string[];
};
