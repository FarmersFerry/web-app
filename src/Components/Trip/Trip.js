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
			default:
				return <FontAwesomeIcon className="human" icon={human} />;
		}
	}

	render() {
		const items = [];

		this.state.moves.forEach((element) => {
			let arrow = <FontAwesomeIcon icon={rightArrow} />;
			if (element.direction === "home") {
				arrow = <FontAwesomeIcon icon={leftArrow} />;
			}

			let take = element.take;
			if (!take) {
				take = "nothing";
			}

			take = this.convertItemToIcon(take);

			items.push(
				<tr>
					<td>{take}</td>
					<td>{arrow}</td>
				</tr>
			);
		});

		return (
			<div>
				<h2>Trips</h2>
				{items.length > 0 && <table className="trips">
					<tbody>{items}</tbody>
				</table>}
				{items.length <= 0 && <p>No trips to be made</p>}
			</div>
		);
	}
}

export default Moves;
