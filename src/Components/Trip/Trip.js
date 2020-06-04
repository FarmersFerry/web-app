import React from "react";
import moveMaker from "../../Services/GooseCornTripBuilder";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faCrow, faMale, faLeaf } from '@fortawesome/free-solid-svg-icons'

class Moves extends React.Component {
	state = { moves: [] };

	constructor(props) { 
		super(props);

		this.state = { moves: moveMaker.buildMoves(props.geese, props.corn) };
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ moves: moveMaker.buildMoves(nextProps.geese, nextProps.corn) });
	}

	convertItemToIcon(item) { 
		switch (item) { 
			case "corn":
				return <FontAwesomeIcon icon={faLeaf} />;
			case "goose":
				return <FontAwesomeIcon icon={faCrow} />;
			default:
				return <FontAwesomeIcon icon={faMale} />
		}		
	}

	render() {
		const items = []

		this.state.moves.forEach(element => {
			let arrow = <FontAwesomeIcon icon={faArrowRight} />;
			if (element.direction === 'home') {
				arrow =  <FontAwesomeIcon icon={faArrowLeft} />;
			}

			let take = element.take;
			if(!take) {
				take='nothing';
			}

			take = this.convertItemToIcon(take);

			items.push(<tr><td>{take}</td><td>{arrow}</td></tr>)
		});

		if (items.length > 0) {
            return (<div><h2>Trips</h2><table>
                <tbody>
                    {items}
                </tbody>
            </table></div>);
        } else {
            return null;
        }
	}
}

export default Moves;