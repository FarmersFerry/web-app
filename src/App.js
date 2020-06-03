import React from "react";
import "./App.scss";
import Price from "./Components/Price/Price";

class App extends React.Component {
	state = {
		bagsOfCorn: 0,
		geese: 0,
		total: 0
	}

	getTotal(geese, bagsOfCorn) { 
		return (geese + bagsOfCorn) * 25
	}

	onChangeCornQuantity(number) {
		let bagsOfCorn = this.state.bagsOfCorn + number;
		if (bagsOfCorn < 0) bagsOfCorn = 0;

		this.setState({ bagsOfCorn, total: this.getTotal(this.state.geese, bagsOfCorn) });
	}

	onChangeGeeseQuantity(number) {
		let geese = this.state.geese + number;
		if (geese < 0) geese = 0;

		this.setState({ geese, total: this.getTotal(geese, this.state.bagsOfCorn) });
	}

	render() {
		return (
			<div>
				<div>
					<p>
						Ferry Price: <Price price={25}></Price>
					</p>
					<p id="bags-of-corn">Bags of corn: {this.state.bagsOfCorn}</p>
					<p id="geese">Geese: {this.state.geese}</p>
				</div>

				<div>
					<h3>Corn</h3>
					<button id="corn-plus-one" onClick={() => this.onChangeCornQuantity(1)}>+</button>
					<button onClick={() => this.onChangeCornQuantity(10)}>+10</button>
					<button onClick={() => this.onChangeCornQuantity(-10)}>-10</button>
					<button onClick={() => this.onChangeCornQuantity(-1)}>-</button>
				</div>

				<div>
					<h3>Geese</h3>
					<button id="goose-plus-one" onClick={() => this.onChangeGeeseQuantity(1)}>+</button>
					<button onClick={() => this.onChangeGeeseQuantity(10)}>+10</button>
					<button onClick={() => this.onChangeGeeseQuantity(-10)}>-10</button>
					<button onClick={() => this.onChangeGeeseQuantity(-1)}>-</button>
				</div>
				{(this.state.geese <= 1 || this.state.bagsOfCorn <= 1) && <div id="total">
					{console.log(this.state.total)}
					Price for ferry: <Price price={this.state.total}></Price>
				</div>}

				{this.state.geese > 1 && this.state.bagsOfCorn > 1 && <div>CANNOT DO FERRY TRIP</div>}
			</div>
		);
	}
}

export default App;
