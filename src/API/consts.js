const API_KEY = import.meta.env.TMDB_API_KEY;

export const CREW_URL = `https://api.themoviedb.org/3/{media_type}/{id}/credits?api_key=${API_KEY}&language=es`;
export const DETAILS_URL = `https://api.themoviedb.org/3/{media_type}/{id}?api_key=${API_KEY}&language=es`;
export const RECOMMENDATIONS = `https://api.themoviedb.org/3/{media_type}/{id}/recommendations?api_key=${API_KEY}&language=es`;
export const IMAGES = `https://api.themoviedb.org/3/{media_type}/{id}/images?api_key=${API_KEY}&include_image_language=null`;

export const COMBINED_URL = `https://api.themoviedb.org/3/person/{person_id}/combined_credits?api_key=${API_KEY}&language=es`;
export const IMAGE_URL = `https://image.tmdb.org/t/p/w500_and_h282_face/`; //436x246px 
export const POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es&page={pageId}`;
export const PERSON_URL = `https://api.themoviedb.org/3/person/{person_id}?api_key=${API_KEY}&language=es&query=`;

export const SEARCH = `https://api.themoviedb.org/3/search/{category}?api_key=${API_KEY}&language=es&query={query}`;
export const TRANSLATIONS_URL = `https://api.themoviedb.org/3/person/{person_id}/translations?api_key=${API_KEY}&language=es`;
