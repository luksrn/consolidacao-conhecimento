class NegociacaoService {

    obterNegociacoes(cb){
         let xhr = new XMLHttpRequest();

         xhr.open('GET', 'negociacoes/semana');

         xhr.onreadystatechange = () => {

            /*
                0: requisição ainda não iniciada.
                1: conexão com o servidor estabelecida.
                2: requisição recebida.
                3: processando requisição.
                4: requisição concluída e a resposta esta pronta.
             */
            if(xhr.readyState == 4){

                if(xhr.status == 200){

                    let negociacoes = JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                    cb(null, negociacoes);    
                } else {
                    console.log( `Não foi possível obter as negociações da semana: ${xhr.responseText}`);
                    cb('Não foi possível obter as negociações da semana', null);
                }
            }
         }

         xhr.send();
    }
}