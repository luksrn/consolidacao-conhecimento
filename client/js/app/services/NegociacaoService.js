class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }
    
    obterNegociacoes(cb){
        return new Promise( (resolve, reject) => {
            this._http.get('negociacoes/semana')
            .then( negociacoes => {
                resolve( negociacoes.map(objeto => 
                    new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                ));
            })
            .catch( erro => {
                console.log( `Não foi possível obter as negociações da semana: ${erro}`);
                reject('Não foi possível obter as negociações da semana');                
            });
        });        
    }
}