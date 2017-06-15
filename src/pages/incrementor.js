import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'

const Incrementor = function(props) {
	return (
		<div className="pa3 avenir bg-black-50">
			<div>
				<Nav />
				<Title>Incrementor</Title>
				<div>
					<p>Where we increment.</p>
				</div>

			</div>
			<Footer />
		</div>
	)
}

export default Incrementor
