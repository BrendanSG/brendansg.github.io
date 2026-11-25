import allSections from './sections';
import type { Section } from './types/sections';

function App() {
	return (
		<>
			<header>
				<div id="left">
					<img id="bsg" src="/assets/bsg.jpg" alt="BSG" />
					<h1>Brendan Saint Germes</h1>
				</div>

				<div id="right">
					<ul>
						{allSections
							.sort((a, b) => a.order - b.order)
							.map((section: Section) => (
								<li key={section.id}>
									<a href={`#${section.id}`}>
										{section.shortname}
									</a>
								</li>
							))}
						{/* <li><button id="toggle-language"><span id="en">ENG</span> / <span id="fr">FRA</span></button></li> */}
					</ul>
				</div>
			</header>

			<main>
				{allSections
					.sort((a, b) => a.order - b.order)
					.map((section: Section) => (
						<section id={section.id} key={section.id}>
							<h2 className="title">
								<span className="txt-primary">
									({String(section.order).padStart(2, '0')})
								</span>{' '}
								{section.fullname ?? section.shortname}
							</h2>
							<hr />
							{section.content}
						</section>
					))}
			</main>
		</>
	);
}

export default App;
