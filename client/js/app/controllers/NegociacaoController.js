class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes( (model) => this._negociacoesView.update(model));
        this._negociacoesView = new NegociacaoView($('#negociacoesView'));
        this._mensagemView = new MensagemView($('#mensagemView'));
    }

    adicionar(event){
        event.preventDefault();

        let negociacao = this._novaNegociacao();
        this._listaNegociacoes.adicionar(negociacao);
        this._mensagemView.update( new Mensagem('Negociação adicionada com sucesso.'));
        this._limparFormulario();
    }

    _novaNegociacao(){
        return new Negociacao(
            DataHelper.textoParaData(this._inputData),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    _limparFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    limpar(){
        this._listaNegociacoes.limpar();
    }
}