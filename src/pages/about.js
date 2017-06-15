import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'

const About = props =>
	<div className="pa3 avenir bg-black-50">
		<div>
			<Nav />
			<Title>About</Title>
			<p>
				This application exists so that you can find out if a number is even or
				odd!
				Pretty worthless, huh? Enjoy!
			</p>
		</div>
		<Footer />
	</div>
export default About
