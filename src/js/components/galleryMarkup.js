import galleryItems from '../data/galleryItems.js';
import galleryItemsTpl from '../../templating/galleryItemsTpl.hbs';

const galleryMarkup = galleryItemsTpl(galleryItems);

export default galleryMarkup;
