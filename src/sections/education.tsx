import type { Section } from '../types/sections';

type EducationEntry = {
	name: string,
	additional: string,
	time: string,
	details: string[]
}
const educationEntries: EducationEntry[] = [
	{
		name: 'INSA Toulouse - Master\'s in Engineering',
		additional: 'Computer Science and Networks, 4th year',
		time: '2025 - now',
		details: [
			'Specialization in "Communicating Systems"'
		]
	},
	{
		name: 'Sungkyunkwan University (Seoul, South Korea)',
		additional: 'Exchange Semester, Telecommunications Networks',
		time: 'Sept - Dec 2026',
		details: [
			'Wireless communications, advanced computer networks, open-source collaboration tools'
		]
	},
	{
		name: 'INSA Toulouse - Integrated Preparatory Cycle',
		additional: 'Engineering Sciences and Techniques',
		time: '2023 - 2025',
		details: [
			'Pre-major track in "Modeling, Computer Science, and Communication"'
		]
	},
	{
		name: 'Lycée Saint-John Perse',
		additional: 'French General Baccalaureate',
		time: '2022 - 2023',
		details: [
			'Mathematics & Physics-Chemistry, Advanced Mathematics option (Highest Honors / Mention Très Bien)',
			'Aeronautical Initiation Certificate - BIA (Highest Honors)'
		]
	}
]

export const educationSection = {
	id: 'education',
	shortname: 'Education',
	order: 2,
	content: <>
		<div className="entries">
			{educationEntries.map((entry) => (<article className="entry">
				<div className="entry-head">
					<h3 className="txt-secondary">{entry.name}</h3>
					<span>— {entry.additional}</span>
					<span>{entry.time}</span>
				</div>
				<ul className="entry-details">
					{entry.details.map((detail) => (<li><p>{detail}</p></li>))}
				</ul>
			</article>))}
		</div>
	</>
} as Section;
