import MenuControllers from './controllers/MenuControllers.js';

let menuMobile = new MenuControllers('[data-menuMobile]', '.app');
let dataMenuMobileActive = new MenuControllers('[data-menuMobileActive]', '[data-menuMobileActive]');
//console.log(menuMobile);
menuMobile.eventListen();
dataMenuMobileActive.eventListen();
