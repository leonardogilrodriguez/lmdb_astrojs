import { 
    IMAGE_CARD_URL,
    SMALL_PROFILE,
    PROFILE,
    NO_IMAGE_URL
} from './consts';

export const size = (size: number) => {
    return IMAGE_CARD_URL.replace('{size}', size.toString());
}

export const smallProfile = () => {
    return size(SMALL_PROFILE);
}

export const profile = () => {
    return size(PROFILE);
}

export const getSafePosterUrl = (path: string, imgSize: number) => {
    return path ? size(imgSize) + path : NO_IMAGE_URL
}