import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  // Number of skeleton cards to show while loading
  const skeletons = Array.from({ length: 6 });
  return (
    <>
      {/* Error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-2">
        {/* Loading skeletons */}
        {isLoading &&
          skeletons.map((_, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {/* Loaded game cards */}
        {!isLoading &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
      </div>
    </>
  );
};

export default GameGrid;
