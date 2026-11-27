import { EntryList } from '../components/entrylist';
import type { Section, EntryListItem } from '../types/sections';

const projectsEntries: EntryListItem[] = [
	{
		name: 'ChronoSki : Ski Timing System',
		details: [
			'Two ESP32 microcontrollers (start and finish) communicating via LoRa antennas.',
			'Start trigger wand and ultrasonic sensor module detecting the skier\'s arrival.',
			'Web interface built to display and track skiers\' times.',
			'Technologies used: C++ (ESP32), HTML/CSS/JS (Web Interface).',
			'Deployed and used over two seasons during competitive ski club training sessions.'
		]
	},
	{
		name: 'LEDs : LED Strip Control Station',
		details: [
			'ESP32 microcontroller communicating with an Android application via Bluetooth Low Energy (BLE).',
			'Technologies used: TypeScript (mobile app) and C++ (ESP32).'
		]
	}
]

export const projectsSection = {
	id: 'projects',
	shortname: 'Projects',
	order: 3,
	content: <EntryList entries={projectsEntries} />
} as Section;
