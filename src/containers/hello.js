import React from 'react'

class Hello extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isCool: true }
	}

	render() {
		return (
			<div>
				<h1>Hello, {this.props.firstName}</h1>
				<h2>Are you cool? {this.state.isCool ? 'Hell yeah' : 'no'}</h2>
			</div>
		)
	}
}

export default Hello

// ReactDom.render(
// <Hello firstName='Cullen' />,
// document.getElementById('root')
// )
