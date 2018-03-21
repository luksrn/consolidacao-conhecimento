class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacaoView($('#negociacoesView')),
            ['adicionar','limpar']);
        
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            ['texto']
        );
    }

    adicionar(event){
        event.preventDefault();

        let negociacao = this._novaNegociacao();
        this._listaNegociacoes.adicionar(negociacao);
        this._mensagem.texto = 'Negociação adicionada com sucesso.';
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
        this._mensagem.texto = 'Negociações apagadas com sucesso.'
    }
}