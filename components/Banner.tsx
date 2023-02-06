import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie } from "../typings";

interface Props {
  netflixOriginals: Movie[];
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)] // Generate a random index for the random movie
    );
  }, [netflixOriginals]);

  return (
    <div>
      <div>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt=""
        />
      </div>
    </div>
  );
}
