//Result GetPopulars -> Home.astro
interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  media_type: string;
  vote_average: number;
  vote_count: number;
}

//Movie.astro
interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
  known_for: Array<Movie & TV>;
}

interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
  known_for: Array<Movie & TV>;
}

interface MovieData {
  details: Movie & TV;
  crew: Array<CrewMember>;
  directors: Array<CrewMember>;
  writers: Array<CrewMember>;
  stars: Array<CastMember>;
}

//Person.astro
interface Translation {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
  data: {
    biography: string;
    name: string;
    primary: boolean;
  };
}

type Member = CastMember & CrewMember;

type Result = Movie & Member & TV & {
  year: number
};

// ResultList.astro
interface TV {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
  media_type: string;
}