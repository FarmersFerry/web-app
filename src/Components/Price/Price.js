import React from "react";
import "./Price.scss";

class Price extends React.Component{
	constructor(props) {
		super(props); 
	}

	render() { 
		return <span>£{(this.props.price/100).toFixed(2)}</span>
	}
}

export default Price