import { 
    IMAGE_CARD_URL,
    NO_IMAGE_URL
} from './consts';

export const size = (size: number) => {
    return IMAGE_CARD_URL.replace('{size}', size.toString());
};

export const getSafePosterUrl = (path: string, imgSize: number) => {
    return path ? size(imgSize) + path : NO_IMAGE_URL;
};