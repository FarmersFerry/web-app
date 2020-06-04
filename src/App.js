import React from "react";
import "./App.scss";
import Price from "./Components/Price/Price";
import Trip from "./Components/Trip/Trip";
import ItemPicker from "./Components/ItemPicker/ItemPicker";
import scarecrowWithFox from "./Services/ScarecrowWithFox";
import tripCalculator from "./Services/TripCalculator";

class App extends React.Component {
	priceOfFerry = 25;

	eggOrder = ['c', 'c', 'g', 'c', 'g', 'g'];

	state = {
		bagsOfCorn: 0,
		geese: 0,
		foxes: 0,
		total: 0,
		canTravel: true,
		eggPosition: 0
	};

	checkEgg(item) {

		if (this.eggOrder[this.state.eggPosition] === item) {
			if (this.state.eggPosition === this.eggOrder.length - 1) {
				console.log('Egg Found');
				window.open('https://cdn.shopify.com/s/files/1/0072/8141/0136/products/internet-easter-eggs_SQU_1000x1000.jpg?v=1583509113');
				this.setState({ eggPosition: 0 });
			}

			this.setState({ eggPosition: this.state.eggPosition + 1 });
		} else {
			this.setState({ eggPosition: 0 });
		}
	}

	onChangeCornQuantity(number) {
		let bagsOfCorn = this.state.bagsOfCorn + number;
		if (bagsOfCorn < 0) bagsOfCorn = 0;

		this.checkEgg('c');

		this.setState({
			bagsOfCorn,
			total: tripCalculator.getTotalPrice(
				this.priceOfFerry,
				this.state.geese,
				bagsOfCorn,
				this.state.foxes
			),
			canTravel: scarecrowWithFox.canTravelWithFox(this.state.geese, bagsOfCorn, this.state.foxes),
		});
	}

	onChangeGeeseQuantity(number) {
		let geese = this.state.geese + number;
		if (geese < 0) geese = 0;

		this.checkEgg('g');

		this.setState({
			geese,
			total: tripCalculator.getTotalPrice(
				this.priceOfFerry,
				geese,
				this.state.bagsOfCorn,
				this.state.foxes
			),
			canTravel: scarecrowWithFox.canTravelWithFox(geese, this.state.bagsOfCorn, this.state.foxes),
		});
	}

	onChangeFoxQuantity(number) {
		let foxes = this.state.foxes + number;
		if (foxes < 0) foxes = 0;

		this.checkEgg('f');

		this.setState({
			foxes,
			total: tripCalculator.getTotalPrice(
				this.priceOfFerry,
				this.state.geese,
				this.state.bagsOfCorn,
				foxes
			),
			canTravel: scarecrowWithFox.canTravelWithFox(this.state.geese, this.state.bagsOfCorn, foxes),
		});
	}

	reset() {
		this.setState({
			bagsOfCorn: 0,
			geese: 0,
			foxes: 0,
			total: 0,
			canTravel: true
		});

		this.setState({ eggPosition: 0 });
	}

	render() {
		return (
			<main>
				<h1>Ferry Trip Calculator</h1>

				<ItemPicker name="Corn" quantity={this.state.bagsOfCorn} quantityLabel="Bags of corn" callback={(amount) => this.onChangeCornQuantity(amount)} />
				<ItemPicker name="Geese" quantity={this.state.geese} quantityLabel="Geese" callback={(amount) => this.onChangeGeeseQuantity(amount)} />
				<ItemPicker name="Foxes" quantity={this.state.foxes} quantityLabel="Foxes" callback={(amount) => this.onChangeFoxQuantity(amount)} />

				<div className="reset-button-container">
					<button onClick={() => this.reset()}>Reset</button>
				</div>

				{this.state.canTravel && <>
					<div id="total" className="sticky">
						Price for ferry: <Price price={this.state.total}></Price>
					</div>
					<Trip geese={this.state.geese} corn={this.state.bagsOfCorn} foxes={this.state.foxes}></Trip>
				</>}

				{!this.state.canTravel && (
					<div className="error sticky">
						{scarecrowWithFox.isGooseEaten(this.state.geese, this.state.bagsOfCorn, this.state.foxes) && <video autoPlay loop muted src="/web-app/fox.webm"></video>}
						CANNOT DO FERRY TRIP
					</div>
				)}
				<p class="ferry-price">
					<small>Ferry price per trip: <Price price={this.priceOfFerry}></Price></small>
				</p>
			</main>
		);
	}
}

export default App;
