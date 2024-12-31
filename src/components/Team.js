import React from 'react';

const Team = ({ team }) => {
  return (
    <div className="team">
      <h2>{team.name}</h2>
      <h3>Roster:</h3>
      <ul>
        {team.roster.map(player => (
          <li key={player.id}>
            {player.name} - {player.position}
          </li>
        ))}
      </ul>
      <h3>Performance:</h3>
      <p>Wins: {team.wins}</p>
      <p>Losses: {team.losses}</p>
    </div>
  );
};

export default Team;