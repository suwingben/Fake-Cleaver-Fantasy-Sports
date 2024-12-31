import React from 'react';

const PlayerCard = ({ player }) => {
    return (
        <div className="player-card">
            <h3>{player.name}</h3>
            <p>Position: {player.position}</p>
            <p>Team: {player.team}</p>
            <p>Stats: {player.stats}</p>
        </div>
    );
};

export default PlayerCard;