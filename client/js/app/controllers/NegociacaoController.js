class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
    }

    adicionar(event){
        event.preventDefault();

        var data = new Date(...this._inputData.value
                            .split('-')
                            .map( (value, index) => value - index % 2 ));
        console.log(data);

        var negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}