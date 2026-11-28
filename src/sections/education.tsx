import { EntryList } from '../components/entrylist';
import type { Section, EntryListItem } from '../types/sections';

const educationEntriesEN: EntryListItem[] = [
	{
		name: "INSA Toulouse - Master's in Engineering",
		additional: 'Computer Science and Networks, 4th year',
		time: '2025 - now',
		details: ['Specialization in "Communicating Systems".'],
	},
	{
		name: 'Sungkyunkwan University (Seoul, South Korea)',
		additional: 'Exchange Semester, Telecommunications Networks',
		time: 'Sept - Dec 2026',
		details: [
			'Wireless communications, advanced computer networks, open-source collaboration tools.',
		],
	},
	{
		name: 'INSA Toulouse - Integrated Preparatory Cycle',
		additional: 'Engineering Sciences and Techniques',
		time: '2023 - 2025',
		details: [
			'Pre-major track in "Modeling, Computer Science, and Communication".',
		],
	},
	{
		name: 'Lycée Saint-John Perse',
		additional: 'French General Baccalaureate',
		time: '2022 - 2023',
		details: [
			'Mathematics & Physics-Chemistry, Advanced Mathematics option (Highest Honors / Mention Très Bien).',
			'Aeronautical Initiation Certificate - BIA (Highest Honors).',
		],
	},
];

const educationEntriesFR: EntryListItem[] = [
	{
		name: 'INSA Toulouse - Cycle ingénieur',
		additional: 'Informatique et Réseaux, actuellement en 4ème année',
		time: '2025 - aujd.',
		details: ['Spécialité "Systèmes Communiquants".'],
	},
	{
		name: 'Sungkyunkwan University (Séoul)',
		additional: "Semestre d'échange, Réseaux télécommunications",
		time: 'sept - déc 2026',
		details: [
			'Communications sans fil, réseaux informatiques avancés, outils de collaboration open-source.',
		],
	},
	{
		name: 'INSA Toulouse - Cycle préparatoire',
		additional: "Sciences et Techniques pour l'Ingénieur ",
		time: '2023 - 2025',
		details: [
			'Pré-Orientation "Modélisation, Informatique et Communication".',
		],
	},
	{
		name: 'Lycée Saint-John Perse',
		additional: 'Baccalauréat Général',
		time: '2022 - 2023',
		details: [
			'Mathématiques & Physique-Chimie, option Mathématiques expertes (Mention Très Bien).',
			"Brevet d'Initiation à l'Aéronautique (Mention Très Bien).",
		],
	},
];

export const educationSection = {
	id: 'education',
	shortname: {
		EN: 'Education',
		FR: 'Formation',
	},
	fullname: {
		EN: 'My Education',
		FR: 'Ma Formation',
	},
	order: 2,
	content: {
		EN: <EntryList entries={educationEntriesEN} />,
		FR: <EntryList entries={educationEntriesFR} />,
	},
} as Section;
