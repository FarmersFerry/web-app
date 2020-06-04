import React from "react";
import "./Trip.scss";
import moveMaker from "../../Services/GooseCornTripBuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight as rightArrow,
	faArrowLeft as leftArrow,
	faCrow as goose,
	faMale as human,
	faSeedling as corn,
	faDog as fox,
} from "@fortawesome/free-solid-svg-icons";

class Moves extends React.Component {
	state = { moves: [] };

	constructor(props) {
		super(props);

		this.state = { moves: moveMaker.buildMoves(props.geese, props.corn) };
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			moves: moveMaker.buildMoves(nextProps.geese, nextProps.corn),
		});
	}

	convertItemToIcon(item) {
		switch (item) {
			case "corn":
				return <FontAwesomeIcon className="corn" icon={corn} />;
			case "goose":
				return <FontAwesomeIcon className="goose" icon={goose} />;
			case "fox":
				return <FontAwesomeIcon className="fox" icon={fox} />;
			default:
				return <FontAwesomeIcon className="human" icon={human} />;
		}
	}

	render() {
		return (
			<div className="trips">
				<h2>Trips</h2>
				<div className="total">
					{this.state.moves.length > 0 && (
						<small>{this.state.moves.length} total</small>
					)}
				</div>
				<div class="trip-list">
					{this.state.moves.length > 0 &&
						this.state.moves.map((element) => {
							const arrow = (
								<FontAwesomeIcon
									icon={element.direction === "home" ? leftArrow : rightArrow}
								/>
							);
							const item = this.convertItemToIcon(element.take);

							return (
								<div className="trip">
									<div class="item">{item}</div>
									{arrow}
								</div>
							);
						})}
				</div>
				{this.state.moves.length <= 0 && <p>No trips to be made</p>}
			</div>
		);
	}
}

export default Moves;
