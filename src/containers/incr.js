import React from 'react'

class Incr extends React.Component {
	constructor(props) {
		super(props)
		this.state = { total: 0, isOdd: 0 }
		this.incrementCount = this.incrementCount.bind(this)
		this.decrementCount = this.decrementCount.bind(this)
	}

	incrementCount = () => {
		this.setState((prevState, props) => ({
			total: prevState.total + props.incrementor,
			isOdd: (prevState.total + props.incrementor) % 2
		}))
	}

	decrementCount = () => {
		this.setState((prevState, props) => ({
			total: prevState.total - props.decrementor,
			isOdd: (prevState.total - props.decrementor) % 2
		}))
	}

	componentDidMount() {
		this.setState({
			total: this.props.initialValue,
			isOdd: this.props.initialValue % 2
		})
	}
	render() {
		return (
			<div className="pa3 avenir">
				<h1 className="fw2">Total: {this.state.total}</h1>
				<h2 className="fw2">
					Is the number odd? {this.state.isOdd === 1 ? 'Yep!' : 'Nope!'}
				</h2>

				<button
					className="f6 dim br2 ph3 pv2 mb2 dib white bg-black"
					type="button"
					onClick={this.decrementCount}
				>
					{' '}-{' '}
				</button>
				<button
					className="f6 dim br2 ph3 pv2 mb2 dib white bg-black"
					type="button"
					onClick={this.incrementCount}
				>
					{' '}+{' '}
				</button>
			</div>
		)
	}
}

export default Incr
