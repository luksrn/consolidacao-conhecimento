class View {

    constructor(elemento){
        this._elemento = elemento;
    }
    _template(model){
        throw new Error('Deve ser implementado o método _template');
    }
    
    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}