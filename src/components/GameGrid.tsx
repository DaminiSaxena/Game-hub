import { UseGame } from "./UseGame";

export const GameGrid = () => {
    const {games, error} = UseGame();
if(error) return <div>{error}</div>

return (
    <>
    <ul>
    {games.map((game)=>{ return <li key={game.id}>{game.name}</li>
    })}
    </ul>
    </>
)
}