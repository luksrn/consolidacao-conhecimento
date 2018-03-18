class Negociacao {

    constructor(data,quantidade,valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this);
    }
    
    get volume(){
        return this.quantidade * this.valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor() {
        return this.valor;
    }
}