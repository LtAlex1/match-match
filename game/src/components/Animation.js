import React from 'react'

export default function Animation() {
    return (
        <div className="animation-area">
		<ul className="box-area">
			<li key={Math.floor(Math.random() * 100 ) + 1 + (Math.random() * 100 )}></li>
			<li	key={Math.floor(Math.random() * 100 ) + 1 + (Math.random() * 100 )}></li>
			<li key={Math.floor(Math.random() * 100 ) + 1 + (Math.random() * 100 )}></li>
			<li key={Math.floor(Math.random() * 100 ) + 1 + (Math.random() * 100 )}></li>
			<li key={Math.floor(Math.random() * 100 ) + 1 + (Math.random() * 100 )}></li>
			<li key={Math.floor(Math.random() * 100 ) + 1 + (Math.random() * 100 )}></li>
		</ul>
	</div>
    )
}
