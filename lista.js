const lista =["Um", "Dois", "Tres"];

function getLista(){
    return lista;
}

export{getLista};

export function limparLista(){
    lista.splice(0);
}

export function adicionarNaLista(novoItem){
    lista.push(novoItem);
}