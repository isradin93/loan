import Slider from "./modules/slider";
import PlayVideo from "./modules/playVideo";

window.addEventListener('DOMContentLoaded', () => {
    new Slider('.page', '.next').render();
    new PlayVideo('.showup .play', '.overlay').init();
});