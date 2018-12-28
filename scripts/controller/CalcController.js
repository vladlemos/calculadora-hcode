// Regras de negocio fica no controller na model teria regras de banco de dados;
// o underline significa que a variavel ou metodo é privado, mas é uma convenção ainda nao funciona;

class CalcController {

    constructor(){
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){
        
        this.setdisplayDateTime();

        setInterval(()=>{
            this.setdisplayDateTime();        
        },1000);

    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
    }

    setdisplayDateTime(){
        
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(valor){
        return this._timeEl.innerHTML = valor;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(valor){
        return this._dateEl.innerHTML = valor;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    
    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(valor){
        this._currentDate = valor;
    }

}