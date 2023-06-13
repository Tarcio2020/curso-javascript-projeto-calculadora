// _Privado
/*____________________________________Comentários____________________________________________________________________________________________________________
Método construtor é aquele que é chamado automaticamente quando existe uma instacia de uma classe.
 Encapsulamento de atributos, podemos deicidir quem pode ou não lidar com os atributos usando o GET and SET.
 Instância = Objeto que representa uma classe.

 ***Refatorar = Melhorar ou refazer o código 
 _________________________________________________________________________________________________________________________________________________________________
        
//innerHTML = pegue esse objeto e coloque uma informação lá.
// Se vc usar o inner e seu html estiver preenchido, primeiro a página será carregada com o HTML depois substituira para o inner
setInterval === f(x) executada em um intervalo de tempo || em milisegundos.

__________________________________________________________________________________________________________________________________________________________________

____________________________________________________________________________________________________________________________________________________________*/

class calcController {
    
    constructor() {
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateE1 = document.querySelector("#data");
        this._timeE1 = document.querySelector("#hora");
        this._currentDate
        this.initialize();
        this.initButtonsEvents();


    }


    initialize() {


        this.setDisplayDateTime();

       setInterval(()=>{

            this.setDisplayDateTime();
        
        }, 1000);


/*
      let interval = setInterval(()=> {
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

        }, 1000);

        setTimeout(() => {
            clearInterval(interval);

        }, 10000);
*/   
    }




addEventListenerAll(element, events, fn) {
    events.split(' ').forEach(event => {
        element.addEventListener(event, fn, false);
    })
}


execBtn(value) {

    switch (value){
        
    }

}


// querySelector vai fazer uma busca no doc limitada || querySelectorAll vai fazer uma busca geral permitindo que seja feita com mais paramentros.
    initButtonsEvents () {
//Aqui colocamos quem queremos que seja monitorado COMANDO: armazene na variavel buttons os elementos do documento com id button tdos filhos da classe e id parts filhos g.
        
        let buttons = document.querySelectorAll("#buttons > g, #parts > g"); 
//For Each vai fazer com que a função percorra cada um dos eventos.
        buttons.forEach((btn, index) => {
// addEventListener = evento nativo do JS||aceita apenas um evento por vez.
            this.addEventListenerAll(btn, "click drag", e=> {

                let textBtn = btn.className.baseVal.replace("btn-","");
                this.execBtn(textBtn);
            

            });

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = "pointer";
            })
        } );

    }

    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeE1.innerHTML;
    }

    set displayTime(value) {
        return this._timeE1.innerHTML = value;
    }


    get displayDate() {
        return this._dateE1.innerHTML;
    }

    set displayDate(value) {
        return this._dateE1.innerHTML = value;
    }



    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    
    }


    set displayCalc(valor) {
        this._displayCalcEl.innerHTML = valor;
    }


    get currentDate() {
        return new Date();
    }

    set currentDate(valor) {
        this.currentDate = valor;
    }
}