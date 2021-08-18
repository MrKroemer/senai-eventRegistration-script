
    
    var readlineSync = require('readline-sync');
    
    var nomeEvento = "";
    nomeEvento = readlineSync.question("Digite um nome pra o seu evento: ");
    
    var nome = "";
    nome = readlineSync.question("Digite o seu Nome: ");

    var idade = 0;
    idade = readlineSync.question("Digite a sua idade: ");

    var numeroDeParticipantes = 0;
    numeroDeParticipantes = readlineSync.question("Digite o numero de participantes: ");

    function dateCheck(date){
        let element = date.split('/');
        let now = new Date();
        date = new Date(element[2], element[1] - 1, element[0]);

        return date > now ? true : false;
    }
    //var now = new Date();

    //var dataEvento = Date;
    dataEvento = dateCheck(readlineSync.question("Qual data gostaria de realizar o evento? "));

    
    

    if(idade < 18){
    
        console.log("Idade minima nao permitida!");
      
    }else if(numeroDeParticipantes > 100){

      console.log("Numero de participantes excedeu o limite!");
    }

    else if (numeroDeParticipantes > 100){
    
      console.log("Quantidade de participantes excedeu o limite");
  
    
    }else if(dataEvento == false){
      console.log("Data do evento inválida!");
    }
    
    else{
      console.log("Cadastro realizado com sucesso!");
}






