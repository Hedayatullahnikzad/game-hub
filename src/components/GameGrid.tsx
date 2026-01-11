import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  // Number of skeleton cards to show while loading
  const skeletons = Array.from({ length: 6 });
  return (
    <>
      {/* Error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Game grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-2">
        {/* Show skeletons while loading */}
        {isLoading &&
          skeletons.map((_, index) => <GameCardSkeleton key={index} />)}

        {/* Show real game cards after loading */}
        {!isLoading &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </>
  );
};

export default GameGrid;
