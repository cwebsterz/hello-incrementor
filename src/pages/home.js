import React from 'react'
import Nav from '../containers/nav'
import Title from '../components/title'

const Home = function(props) {
	return (
		<div className="pa3 avenir">
			<Nav />
			<Title>Home</Title>
			<div>
				<p>Welcome! There is nothing to see here, enjoy!</p>
			</div>
		</div>
	)
}

export default Home
