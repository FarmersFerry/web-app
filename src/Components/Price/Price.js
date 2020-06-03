import React from "react";
import "./Price.scss";

class Price extends React.Component {
	constructor(props) {
		super(props);

		this.state = { price: isNaN(props.price) ? 0 : props.price };
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ price: isNaN(nextProps.price) ? 0 : nextProps.price });
	}

	render() {
		return <span>£{(this.state.price / 100).toFixed(2)}</span>;
	}
}

export default Price;
