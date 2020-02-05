import ClassList from '../helpers/classList.js';
export default class MenuControllers {

  /*
  /* Definição da variavel $menu e para selecionar o iten clicado no html
  /* Definição da variavel $target e para o elemento que vai ser adicionado a classe apos o menu receber o evento de click;
  /* let shermon nada mais e do que um mini jquery exemplo $('') no cado vai ficar shermon('elemento')
  */

  constructor($menu, $target) {
    let shermon = document.querySelector.bind(document);
    this._menu = shermon($menu);
    this._target = shermon($target);

    let classList = new ClassList();
  }

  eventListen() {
    this._menu.addEventListener('click', () => {
     this._target.classList.toggle('ativo');
    });
  }

}
