import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'
import Footer from '../containers/footer'

const Home = function(props) {
	return (
		<div className="pa3 avenir bg-black-50">
			<Nav />
			<Title>Home</Title>
			<div>
				<p>Welcome! There is nothing to see here, enjoy!</p>
			</div>
			<Footer />
		</div>
	)
}

export default Home
