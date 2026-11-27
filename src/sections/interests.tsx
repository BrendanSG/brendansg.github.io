import { EntryList } from '../components/entrylist';
import type { EntryListItem, Section } from '../types/sections';

const interestsEntries: EntryListItem[] = [
	{
		name: 'Speed Skiing',
		additional: 'French National Team Member',
		time: '2022 - Now',
		details: [
			'3 World Cup podium finishes.',
			'Personal best of 173.49 km/h (Junior category).',
			'Competed internationally across 4 countries.',
			'Custom equipment design and fabrication (CAD on Fusion 360, 3D printing, bending).'
		]
	}
]

export const interestsSection = {
	id: 'interests',
	shortname: 'Interests',
	order: 4,
	content: <EntryList entries={interestsEntries} />
} as Section;
