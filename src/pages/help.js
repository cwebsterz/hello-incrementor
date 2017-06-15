import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'

const Help = props =>
	<div className="pa3 avenir bg-black-50">
		<div>
			<Nav />
			<Title>Help</Title>
			<p>There is no help for you.</p>
		</div>
		<Footer />
	</div>
export default Help
