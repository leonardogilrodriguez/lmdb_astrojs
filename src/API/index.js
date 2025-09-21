import { 
    CREW_URL, 
    COMBINED_URL,
    DETAILS_URL, 
    PERSON_URL,
    POPULAR,
    SEARCH,
    TRANSLATIONS_URL
} from './consts';

export const APIFetch = async(url) => {
    const response = await fetch(url);
    return await response.json();
};

export const getDetails = async(id, media_type) => {
    return await APIFetch(DETAILS_URL.replace('{id}', id).replace('{media_type}',media_type));
};

export const getCredits = async(id, media_type) => {
    return await APIFetch(CREW_URL.replace('{id}', id).replace('{media_type}',media_type));
};

export const getPerson = async(id) => {
    return await APIFetch(PERSON_URL.replace('{person_id}', id));
};

export const getCombinedDetailsPerson = async(id) => {
    return await APIFetch(COMBINED_URL.replace('{person_id}', id));
};

export const getPersonTranslation = async(id) => {
    return await APIFetch(TRANSLATIONS_URL.replace('{person_id}', id));
};

export const getPopulars = async(page) => {
    return await APIFetch(POPULAR.replace('{pageId}', page));
};

export const getResults = async(category,query) => {
    return await APIFetch(SEARCH.replace('{query}', query).replace('{category}', category));
};