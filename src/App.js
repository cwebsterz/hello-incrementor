import React, { Component } from 'react'
//import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Incrementor from './pages/incrementor'
import Help from './pages/help'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/incrementor" component={Incrementor} />
					<Route path="/help" component={Help} />
				</div>
			</BrowserRouter>
		)
	}
}

export default App
