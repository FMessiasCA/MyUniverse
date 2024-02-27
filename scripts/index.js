import { Router } from './router.js';
//route()
const router = new Router();
router.add('/', "/pages/home.html");
router.add('/theuniverse', "/pages/theUniverse.html");
router.add('/exploration', "/pages/exploration.html");
router.add('404', "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.local = () => router.local();