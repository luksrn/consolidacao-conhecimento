class ListaNegociacoes {
    constructor(ctx){
        this._negociacoes = []
        this._ctx = ctx;
    }

    adicionar(negociacao){
        this._negociacoes.push(negociacao);
        this._ctx(this);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    limpar(){
        this._negociacoes = []
        this._ctx(this);
    }
}