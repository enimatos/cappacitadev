


module.exports.retornaLista = (array) => { 
    function comparaIdade(array){ 
        if (array.idade >= 18 && array.idade <= 26)
             return array; 
    } 
    
    
    var novoRetorno = array.filter(comparaIdade); 
    return novoRetorno 
    }