import React from "react";
import moveMaker from "../../Services/GooseCornTripBuilder";

class Moves extends React.Component {
    moves = [];

    componentWillReceiveProps(nextProps) {
        this.moves = moveMaker.buildMoves(nextProps.geese, nextProps.corn);
    }

    render() {
        const items = []

        this.moves.forEach(element => {
            let arrow = ">";
            if (element.direction === 'home') {
                arrow = "<";
            }

            let take = element.take;
            if (!take) {
                take = 'nothing';
            }

            items.push(<tr><td>{take}</td><td>{arrow}</td></tr>)
        });

        if (this.moves.length > 0) {
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