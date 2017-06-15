import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'
import Incr from '../containers/incr'

const Incrementor = function(props) {
	return (
		<div className="pa3 avenir bg-black-50 tc">
			<div>
				<Nav />
				<Title>Incrementor</Title>
				<p>
					Here it is, in all its glory. I hope it is everything you dreamed it
					could be.
				</p>
				<div>

					<Incr initialValue={100} incrementor={1} decrementor={1} />

				</div>

			</div>
			<Footer />
		</div>
	)
}

export default Incrementor
