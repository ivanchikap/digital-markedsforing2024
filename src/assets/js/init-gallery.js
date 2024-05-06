import lightGallery from 'lightgallery';
//
// // Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';

lightGallery(document.getElementById('lightgallery'), {
    plugins: [  lgThumbnail],
    licenseKey: '0000-0000-0000-0000',
    speed: 500
});
