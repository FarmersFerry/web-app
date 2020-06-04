import React from "react";
import "./App.scss";
import Price from "./Components/Price/Price";
import Moves from "./Components/Moves/Moves";
import scarecrow from "./Services/Scarecrow";
import tripCalculator from "./Services/TripCalculator";

class App extends React.Component {
	priceOfFerry = 25;

	state = {
		bagsOfCorn: 0,
		geese: 0,
		total: 0,
		canTravel: true,
	};

	onChangeCornQuantity(number) {
		let bagsOfCorn = this.state.bagsOfCorn + number;
		if (bagsOfCorn < 0) bagsOfCorn = 0;

		this.setState({
			bagsOfCorn,
			total: tripCalculator.getTotalPrice(
				this.priceOfFerry,
				this.state.geese,
				bagsOfCorn
			),
			canTravel: scarecrow.canTravel(this.state.geese, bagsOfCorn),
		});
	}

	onChangeGeeseQuantity(number) {
		let geese = this.state.geese + number;
		if (geese < 0) geese = 0;

		this.setState({
			geese,
			total: tripCalculator.getTotalPrice(
				this.priceOfFerry,
				geese,
				this.state.bagsOfCorn
			),
			canTravel: scarecrow.canTravel(geese, this.state.bagsOfCorn),
		});
	}

	render() {
		return (
			<main>
				<h1>Ferry Trip Calculator</h1>
				<p>
					Ferry Price: <Price price={25}></Price>
				</p>

				<div className="item-picker">
					<h2>Corn</h2>
					<p id="bags-of-corn">Bags of corn: {this.state.bagsOfCorn}</p>
					<div class="button-container">
						<button id="corn-plus-one" onClick={() => this.onChangeCornQuantity(1)}>+</button>
						<button onClick={() => this.onChangeCornQuantity(10)}>+10</button>
						<button onClick={() => this.onChangeCornQuantity(-10)}>-10</button>
						<button onClick={() => this.onChangeCornQuantity(-1)}>-</button>
					</div>
				</div>

				<div className="item-picker">
					<h2>Geese</h2>
					<p id="geese">Geese: {this.state.geese}</p>
					<div class="button-container">
						<button id="goose-plus-one" onClick={() => this.onChangeGeeseQuantity(1)}>+</button>
						<button onClick={() => this.onChangeGeeseQuantity(10)}>+10</button>
						<button onClick={() => this.onChangeGeeseQuantity(-10)}>-10</button>
						<button onClick={() => this.onChangeGeeseQuantity(-1)}>-</button>
					</div>
				</div>

				{this.state.canTravel && (
					<div id="total">
						Price for ferry: <Price price={this.state.total}></Price>
					</div>
				)}

				{!this.state.canTravel && (
					<div className="error">CANNOT DO FERRY TRIP</div>
				)}

				<Moves geese={this.state.geese} corn={this.state.bagsOfCorn}></Moves>
			</main>
		);
	}
}

export default App;
