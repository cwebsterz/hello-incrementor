import React from 'react'
import { Link } from 'react-router-dom'
import Hello from './hello'

export default props => {
	return (
		<div>
			<a
				className="avenir link dim black b f4 fw2 f-headline tc db mb3 mb4-ns"
				href="/"
				title="Home"
			>
				<Hello firstName="Cullen" />
			</a>

			<div className="avenir flex-grow pa3 flex items-center bg-black">
				<Link to="/" className="f6 link dib white dim mr3 mr4-ns">Home</Link>
				|
				<Link to="/about" className="f6 link dib white dim mr3 mr4-ns">
					About
				</Link>
				|
				<Link to="/incrementor" className="f6 link dib white dim mr3 mr4-ns">
					Incrementor
				</Link>
				|
				<Link to="/help" className="f6 link dib white dim mr3 mr4-ns">
					Help
				</Link>
			</div>
		</div>
	)
}
