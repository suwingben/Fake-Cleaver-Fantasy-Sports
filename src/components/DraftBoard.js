import React, { useState } from 'react';

const DraftBoard = () => {
    const [players, setPlayers] = useState([
        { id: 1, name: 'Player 1' },
        { id: 2, name: 'Player 2' }
        // ...more players...
    ]);

    const [picks, setPicks] = useState([]);

    const draftPlayer = (player) => {
        setPicks([...picks, player]);
        setPlayers(players.filter((p) => p.id !== player.id));
    };

    return (
        <div className="draft-board">
            <h2>Draft Board</h2>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        {player.name}
                        <button onClick={() => draftPlayer(player)}>Draft</button>
                    </li>
                ))}
            </ul>
            <h3>Drafted Players</h3>
            <ol>
                {picks.map((pick) => (
                    <li key={pick.id}>{pick.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default DraftBoard;