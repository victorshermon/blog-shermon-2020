import MenuControllers from './controllers/MenuControllers.js';

let menuController = new MenuControllers('[data-menuMobile]', '.app');
let menuMobileHeader = new MenuControllers('[data-menuHeader]', '.app');
menuController.init();
menuMobileHeader.init();