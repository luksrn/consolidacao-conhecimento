class DataHelper {

    static textoParaData(inputData){
        return new Date(...inputData.value
            .split('-')
            .map( (value, index) => value - index % 2 ));
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}