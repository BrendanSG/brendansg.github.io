import type { EntryListItem } from "../types/sections"

type EntryListProps = {
    entries: EntryListItem[]
}

export function EntryList(props: EntryListProps): React.JSX.Element {
    return <>
        <div className="entries">
			{props.entries.map((entry) => (<article className="entry" key={entry.name}>
				<div className="entry-head">
					<h3 className="txt-secondary">{entry.name}</h3>
					{entry.additional && <span>— {entry.additional}</span>}
					{entry.time && (<span>{entry.time}</span>)}
				</div>
				<ul className="entry-details">
					{entry.details.map((detail) => (<li key={detail}><p>{detail}</p></li>))}
				</ul>
			</article>))}
		</div>
    </>
}