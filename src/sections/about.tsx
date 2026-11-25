import type { Section } from '../types/sections';

export const aboutSection: Section = {
	id: 'about',
	shortname: 'About',
	fullname: 'About me',
	order: 1,
	content: (
		<>
			<p>
				Hi! My name is Brendan Saint Germes. I am a French student and
				future Computer Science engineer. I am studying my fourth year
				at the National Institute of Applied Sciences of Toulouse (INSA
				Toulouse) majoring in IT & Networks. Passionate about system
				architecture, computer networks and software development, I
				enjoy turning ideas into real solutions to solve all sorts of
				problems (<a href="#projects">See my projects</a>).
			</p>
		</>
	),
};
