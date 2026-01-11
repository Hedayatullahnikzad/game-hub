// GameCardSkeleton.tsx
// This component is shown while game data is loading

const GameCardSkeleton = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 bg-gray-300 dark:bg-gray-700" />

      {/* Card body skeleton */}
      <div className="p-4 space-y-3">
        {/* Title skeleton */}
        <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />

        {/* Platform icons skeleton */}
        <div className="flex gap-2">
          <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
