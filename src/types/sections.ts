/*
 * id: ID used in the link (<a href="#{id}">{name}</a>)
 * shortname: The short name of the section (used in the navbar)
 * fullname?: The full name, used as title in the content (using shortname as fallback)
 * order: Lower value means showed first in both navbar and content
 * content: The JSX content to render
 */
export type Section = {
	id: string;
	shortname: string;
	fullname?: string;
	order: number;
	content: React.JSX.Element;
};
