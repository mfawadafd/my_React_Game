import { useState } from 'react';
import { genTicket, sum } from './Helper.js';
import Ticket from './Ticket';

export default function Lottery({ n = 3, winCondition }) {
    const [ticket, setTicket] = useState([]); // Initially empty array

    const BuyTicket = () => {
        setTicket(genTicket(n));
    };

    const RefreshGame = () => {
        setTicket([]); // Clear ticket to reset game
    };

    const isWinning = winCondition(ticket);
   

    return (
        <div>
            <h1>Lottery Game</h1>
            <br />
            <br />
            <p>If the sum of your ticket numbers equals to "15", you will win the prize.</p>
            <hr />
            {ticket.length > 0 ? (
                <>
                    <div className="ticket">
                        <Ticket ticket={ticket} />
                    </div>
                    <h2>{isWinning ? "🎉 You Win!" : "❌ You Lose! Try again!"}</h2>
                </>
            ) : (
                <p>Click "BUY NEW TICKET" to start the game.</p>
            )}

            <button onClick={BuyTicket}>Buy Ticket</button>
            &nbsp;
            <button onClick={RefreshGame}>Refresh Game</button>
        </div>
    );
}
