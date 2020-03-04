import ClassList from '../helpers/classList.js';


export default class MenuControllers {

  
   constructor($alvo_clicado, $recebe_acao) {

   	 let shermon = document.querySelector.bind(document);
   	 this._alvoClicado = shermon($alvo_clicado);
   	 this._recebeAcao = shermon($recebe_acao);
   }


   _listenAction() {
   	this._alvoClicado.addEventListener('click', () => {
   		let classList = new ClassList();
   		this._recebeAcao.classList.toggle('ativo');
   		
   	});
   }

   init() {
   	this._listenAction();
   }

}
