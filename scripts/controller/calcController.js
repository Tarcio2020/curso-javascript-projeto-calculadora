// _Privado
/*____________________________________Comentários____________________________________________________________________________________________________________
Método construtor é aquele que é chamado automaticamente quando existe uma instacia de uma classe.
 Encapsulamento de atributos, podemos deicidir quem pode ou não lidar com os atributos usando o GET and SET.
 Instância = Objeto que representa uma classe.

 ***Refatorar = Melhorar ou refazer o código 
 _________________________________________________________________________________________________________________________________________________________________





____________________________________________________________________________________________________________________________________________________________*/

class calcController {
    
    constructor() {
        
        this._displauCalc = "0"
        this._currentDate
        this.initialize();
    }


    initialize() {
        let displayCalcEl = document.querySelector("#display");
        let dateE1 = document.querySelector("#data");
        let timeE1 = document.querySelector("#hora");

        displayCalcEl.innerHTML = "5155454564";
        dateE1.innerHTML = "12/12/1900";
        timeE1.innerHTML = "12:00";
        
//innerHTML = pegue esse objeto e coloque uma informação lá.
// Se vc usar o inner e seu html estiver preenchido, primeiro a página será carregada com o HTML depois substituira para o inner
    }

    get displayCalc() {
        return this._displauCalc;
    
    }


    set displayCalc(valor) {
        this._displauCalc = valor;
    }


    get currentDate() {
        return this.currentDate;
    }

    set currentDate(valor) {
        this.currentDate = valor;
    }
}