import { EntryList } from '../components/entrylist';
import type { EntryListItem, Section } from '../types/sections';

const interestsEntriesEN: EntryListItem[] = [
	{
		name: 'Speed Skiing',
		additional: 'French National Team Member',
		time: '2022 - Now',
		details: [
			'3 World Cup podium finishes.',
			'Personal best of 173.49 km/h (Junior category).',
			'Competed internationally across 4 countries.',
			'Custom equipment design and fabrication (CAD on Fusion 360, 3D printing, bending).',
		],
	},
];
const interestsEntriesFR: EntryListItem[] = [
	{
		name: 'Ski de Vitesse',
		additional: 'Sélections en Équipe de France',
		time: '2022 - Now',
		details: [
			'3 podiums en Coupe du Monde.',
			'Record personnel de 173,49 km/h (catégorie junior).',
			'Déplacements dans 4 nations.',
			'Développement de matériel personnel (CAO sur Fusion 360, impression 3D, cintrage).',
		],
	},
];

export const interestsSection = {
	id: 'interests',
	shortname: {
		EN: 'Interests',
		FR: 'Autres Exp.',
	},
	fullname: {
		EN: 'My Interests',
		FR: 'Autres Expériences',
	},
	order: 5,
	content: {
		EN: <EntryList entries={interestsEntriesEN} />,
		FR: <EntryList entries={interestsEntriesFR} />,
	},
} as Section;
