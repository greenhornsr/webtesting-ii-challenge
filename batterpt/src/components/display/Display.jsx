import React from 'react';

function Display(props){
const { atbat, firstname, lastname, strikes, balls, fouls } = props.batterperf;
// if(!props.batterperf.atbat) {
//     return <h2>No players to list</h2>;
// }
//displays balls and strikes counts for current atbat
//should be updated when the user records activity on the Dashboard component.
    console.log(props.batterperf)
    return (
        <div>
            <h2>Display</h2>
            <div>
                {/* {props.createName()} */}
                <h3><span>Batter #: </span>{atbat}{firstname} {lastname}</h3>
                <ul>
                    <li><span>Strikes: </span>{strikes}</li>
                    <li><span>Balls: </span>{balls}</li>
                    <li><span>Fouls: </span>{fouls}</li>
                </ul>
            </div>
        </div>
    )
}

export default Display;