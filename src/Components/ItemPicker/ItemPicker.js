import React from "react";
import "./ItemPicker.scss";

class ItemPicker extends React.Component {
	state = { quantity: 0 };

	constructor(props) {
		super(props);

		this.state = { quantity: this.props.quantity };
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			quantity: nextProps.quantity
		});
	}

	render() {
		return <div className="item-picker">
		<h2>{this.props.name}</h2>
		<p>{this.props.quantityLabel}: {this.state.quantity}</p>
		<div className="item-picker__button-container">
			<button onClick={() => this.props.callback(1)}>+</button>
			<button onClick={() => this.props.callback(10)}>+10</button>
			<button onClick={() => this.props.callback(-10)}>-10</button>
			<button onClick={() => this.props.callback(-1)}>-</button>
		</div>
	</div>
	}
}

export default ItemPicker;
