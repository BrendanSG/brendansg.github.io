import type { Section } from '../types/sections';

type ContactEntry = {
	name: string,
	text: string,
	url: string,
	image: string
}

const contactEntries: ContactEntry[] = [
	{
		name: 'E-Mail',
		text: 'saint-germes@insa-toulouse.fr',
		url: 'mailto:saint-germes@insa-toulouse.fr',
		image: '/assets/email.png'
	},
	{
		name: 'LinkedIn',
		text: 'linkedin.com/in/brendan-saint-germes/',
		url: 'https://www.linkedin.com/in/brendan-saint-germes/',
		image: '/assets/linkedin.png'
	}
]

export const contactSection = {
	id: 'contact',
	shortname: 'Contact',
	order: 5,
	content: <>
		<div className="contacts">
			{contactEntries.map((entry) => (<article key={entry.name} className="contact">
				<a href={entry.url} target='_blank'>
					<img src={entry.image} alt={entry.name} />
					<p>{entry.text}</p>
				</a>
			</article>))}
		</div>
		<p className="credits">
			Icons created by <a href="https://www.flaticon.com/free-icon/email_552486" title="E-Mail icon" target="_blank">Magnific</a> and <a href="https://www.flaticon.com/fr/icone-gratuite/logo-linkedin_4096186" title="LinkedIn icon" target="_blank">Creartive</a> from <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>
		</p>
	</>
} as Section;
