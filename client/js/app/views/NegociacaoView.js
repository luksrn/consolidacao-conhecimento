class NegociacaoView extends View {

    constructor(elemento){
        super(elemento);
    }

    _template(listaNegociacoes){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${listaNegociacoes.negociacoes.map( n => 
                    `
                        <tr>
                            <td>${DataHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `
                ).join('')}
            </tbody>
            
            <tfoot>
                <tr>
                <td colspan="3"></td>
                <td>${listaNegociacoes.volumeTotal}</td>
                </tr>
            </tfoot>
        </table>
        `;
    }
  
}