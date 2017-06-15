import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'

const About = props =>
	<div className="pa3 avenir bg-black-50">
		<div>
			<Nav />
			<Title>About</Title>
			<p>This is everything you need to know. Which is nothing for now.</p>
		</div>
		<Footer />
	</div>
export default About
