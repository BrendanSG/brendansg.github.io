import type { Section } from '../types/sections';

export const aboutSection: Section = {
	id: 'about',
	shortname: {
		EN: 'About',
		FR: 'À propos',
	},
	fullname: {
		EN: 'About',
		FR: 'À propos',
	},
	order: 1,
	content: {
		EN: (
			<>
				<p>
					Hi! My name is Brendan Saint Germes. I am a French student
					and future Computer Science engineer. I am studying my
					fourth year at the National Institute of Applied Sciences of
					Toulouse (INSA Toulouse) majoring in IT & Networks.
					Passionate about system architecture, computer networks and
					software development, I enjoy turning ideas into real
					solutions to solve all sorts of problems (
					<a href="#projects">See my projects</a>).
				</p>
			</>
		),
		FR: (
			<>
				<p>
					Bonjour ! Je suis Brendan SAINT GERMES. Je suis
					élève-ingénieur à l'INSA Toulouse, dans la filière
					Informatique et Réseaux. Passioné d'architecture système, de
					réseaux informatiques et de développement logiciel, je
					prends plaisir à transformer des idées en solution réelles
					afin de résoudre toute sorte de problèmes (
					<a href="#projects">Voir mes projets</a>).
				</p>
			</>
		),
	},
};
