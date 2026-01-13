import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  // Show spinner while loading genres
  if (error) return null;
  if (isLoading)
    return (
      <div className="flex justify-center py-4">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"></div>
      </div>
    );

  return (
    <ul className="space-y-3 ">
      {data.map((genre) => (
        <li key={genre.id}>
          <div className="flex items-center gap-3 py-[5px]">
            {/* Genre image */}
            <img
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              className="w-8 h-8 rounded-lg object-cover"
            />

            {/* Genre name */}
            <span className="text-lg text-gray-700 dark:text-gray-300">
              {genre.name}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
