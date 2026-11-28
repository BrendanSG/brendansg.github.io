import { useEffect, useState } from 'react';
import allSections from './sections';
import { getTranslated, type Section } from './types/sections';

const sortedSections: Section[] = [...allSections].sort(
	(a, b) => a.order - b.order
);

function App() {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [activeSectionId, setActiveSectionId] = useState<string>(() => {
		if (typeof window !== 'undefined' && window.location.hash) {
			const hash = window.location.hash.slice(1);
			if (sortedSections.some((s) => s.id === hash)) {
				return hash;
			}
		}
		return sortedSections[0]?.id || '';
	});

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 50
			) {
				setActiveSectionId(
					sortedSections[sortedSections.length - 1].id
				);
				return;
			}

			const scrollPosition = window.scrollY + 150;
			for (let i = sortedSections.length - 1; i >= 0; i--) {
				const section = sortedSections[i];
				const el = document.getElementById(section.id);
				if (el && el.offsetTop <= scrollPosition) {
					setActiveSectionId(section.id);
					return;
				}
			}
			if (sortedSections.length > 0) {
				setActiveSectionId(sortedSections[0].id);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const currentIndex = sortedSections.findIndex(
		(s) => s.id === activeSectionId
	);
	const safeIndex = currentIndex >= 0 ? currentIndex : 0;
	const currentSection = sortedSections[safeIndex];

	const scrollToSection = (index: number) => {
		if (index >= 0 && index < sortedSections.length) {
			const target = sortedSections[index];
			setActiveSectionId(target.id);
			const el = document.getElementById(target.id);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

	const [lang, setLang] = useState<'EN' | 'FR'>('EN');

	return (
		<>
			<header>
				<div id="left">
					<img id="bsg" src="/assets/bsg.jpg" alt="BSG" />
					<h1>Brendan Saint Germes</h1>
				</div>

				<div id="right">
					<ul>
						{sortedSections.map((section: Section) => (
							<li key={section.id}>
								<a href={`#${section.id}`}>
									{getTranslated<string>(
										section.shortname,
										lang
									)}
								</a>
							</li>
						))}
						<li>
							<button
								id="toggle-language"
								onClick={() =>
									setLang(lang == 'EN' ? 'FR' : 'EN')
								}
							>
								<span
									className={
										lang == 'EN' ? 'txt-secondary' : ''
									}
								>
									ENG
								</span>{' '}
								/{' '}
								<span
									className={
										lang == 'FR' ? 'txt-secondary' : ''
									}
								>
									FRA
								</span>
							</button>
						</li>
					</ul>
				</div>
			</header>

			<div className={`mobile-menu${mobileMenu === true ? ' open' : ''}`}>
				<div className="mobile-menu-items">
					<button
						onClick={(e) => {
							e.currentTarget.blur();
							setLang(lang == 'EN' ? 'FR' : 'EN')
						}}
					>
						{lang == 'EN' ? '🇫🇷' : '🇺🇸'}
					</button>
					<button
						id="prev"
						onClick={(e) => {
							e.currentTarget.blur();
							scrollToSection(safeIndex - 1);
						}}
						disabled={safeIndex <= 0}
					>
						◀
					</button>
					<p onClick={() => scrollToSection(safeIndex)}>
						{getTranslated<string>(currentSection?.shortname, lang)}
					</p>
					<button
						id="next"
						onClick={(e) => {
							e.currentTarget.blur();
							scrollToSection(safeIndex + 1);
						}}
						disabled={safeIndex >= sortedSections.length - 1}
					>
						▶
					</button>
				</div>
				<button
					id="toggle"
					onClick={(e) => {
						e.currentTarget.blur();
						setMobileMenu((prev) => !prev);
					}}
				>
					{mobileMenu ? '✖︎' : '☰'}
				</button>
			</div>

			<main>
				{sortedSections.map((section: Section) => (
					<section id={section.id} key={section.id}>
						<h2 className="title">
							<span className="txt-primary">
								({String(section.order).padStart(2, '0')})
							</span>{' '}
							{getTranslated<string>(
								section.fullname ?? section.shortname,
								lang
							)}
						</h2>
						<hr />
						{getTranslated<React.JSX.Element>(
							section.content,
							lang
						)}
					</section>
				))}
			</main>
		</>
	);
}

export default App;
