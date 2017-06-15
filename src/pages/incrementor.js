import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'

const Incrementor = function(props) {
	return (
		<div className="pa3 avenir">
			<Nav />
			<Title>Incrementor</Title>
			<div>
				<p>Where we increment.</p>
			</div>
		</div>
	)
}

export default Incrementor
