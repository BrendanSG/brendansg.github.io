import { EntryList } from '../components/entrylist';
import type { Section, EntryListItem } from '../types/sections';

const projectsEntriesEN: EntryListItem[] = [
	{
		name: 'ChronoSki : Ski Timing System',
		details: [
			'Two ESP32 microcontrollers (start and finish) communicating via LoRa antennas.',
			"Start trigger wand and ultrasonic sensor module detecting the skier's arrival.",
			"Web interface built to display and track skiers' times.",
			'Technologies used: C++ (ESP32), HTML/CSS/JS (Web Interface).',
			'Deployed and used over two seasons during competitive ski club training sessions.',
		],
	},
	{
		name: 'LEDs : LED Strip Control Station',
		details: [
			'ESP32 microcontroller communicating with an Android application via Bluetooth Low Energy (BLE).',
			'Technologies used: TypeScript (mobile app) and C++ (ESP32).',
		],
	},
];
const projectsEntriesFR: EntryListItem[] = [
	{
		name: 'ChronoSki : Système de chronométrage de ski',
		details: [
			'Deux microcontrôleurs ESP32 (départ et arrivée) communiquant via antennes LoRa.',
			"Baguette d'impulsion de départ, module ultrason détectant l'arrivée du skieur.",
			'Interface Web pour visionner les différents temps des skieurs.',
			'Langages utilisés : C++ (ESP32), HTML/CSS/JS (Interface).',
			"Système utilisé pendant deux saisons dans le cadre d'entraînements d'un club compétitif.",
		],
	},
	{
		name: 'LEDs : Station de contrôle de ruban LEDs',
		details: [
			'Microcontrôleur ESP32, communiquant avec une application Android (communication via Bluetooth LE).',
			'Langages utilisés : TypeScript (application) et C++ (ESP32).',
		],
	},
];

export const projectsSection = {
	id: 'projects',
	shortname: {
		EN: 'Projects',
		FR: 'Projets',
	},
	fullname: {
		EN: 'My Projects',
		FR: 'Mes Projets',
	},
	order: 3,
	content: {
		EN: <EntryList entries={projectsEntriesEN} />,
		FR: <EntryList entries={projectsEntriesFR} />,
	},
} as Section;
