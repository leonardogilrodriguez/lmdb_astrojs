import { getCredits, getDetails } from "@api/index";
import { MEDIUM_POSTER } from "@utils/consts";
import { getSafePosterUrl } from "@utils/images";

const getMovieData = async (id: string, mediatype: string): Promise<MovieData> => {
  const details = await getDetails(id, mediatype);
  const crew = await getCredits(id, mediatype);

  //Get directors and writers -> here is better to use filter instead of find as filters deliver an array.
  //Get the director/s
  const directors = crew?.crew?.filter((item: CrewMember) => {
    return item.job === "Director" || item.job === "Directing";
  });

  //Get the writer/s
  const writers = crew?.crew?.filter((item: CrewMember) => {
    return (
      item.job === "Screenplay" ||
      item.job === "Writer" ||
      item.job === "Writing"
    );
  });

  //Get the stars/s
  const stars = crew?.cast;

  return { details, crew, directors, writers, stars };
};

export const getMovie = async (id: string, mediatype: string) => {
    const { details, crew, directors, writers, stars } = await getMovieData(id, mediatype);
    const showMovie = details && crew && stars;
    const showMainCrew = directors && writers && stars;
    
    const title = details?.title ? details?.title : details?.name;
    const date = details?.release_date
      ? details?.release_date
      : details?.first_air_date;
    
    const posterPath = getSafePosterUrl(details?.poster_path, MEDIUM_POSTER);
    return { details, crew, directors, writers, stars, showMovie, showMainCrew, title, date, posterPath };
}