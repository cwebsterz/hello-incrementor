import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
	return (
		<div className="avenir">
			<Link to="/" className="pa1">Home</Link>
			|
			<Link to="/about" className="pa1">About</Link>
			|
			<Link to="/incrementor" className="pa1">Incrementor</Link>
		</div>
	)
}
