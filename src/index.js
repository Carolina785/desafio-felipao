//Variáveis
let nomeHeroi = "Thor";
let xpHeroi = "8000";
let nivel = "";

//Estrutura swtch case
switch (true) {
    case xpHeroi < 1000:
        nivel = "Ferro";
        break;
       
    case xpHeroi >= 1001 && xpHeroi <= 2000:
        nivel = "Bronze";
        break;
        
    case xpHeroi >= 2001 && xpHeroi <= 5000:
        nivel = "Prata";
        break;
        
    case xpHeroi >= 5001 && xpHeroi <= 7000:
        nivel = "Ouro";
        break;
        
    case xpHeroi >= 7001 && xpHeroi <= 8000:
        nivel = "Platina";
        break;
        
    case xpHeroi >= 8001 && xpHeroi <= 9000:
        nivel = "Ascendete";
        break;
        
    case xpHeroi >= 9001 && xpHeroi <= 10000:
        nivel = "Imortal";
        break;

    default:
        nivel = "Radiante";    
}

//Saída
console.log(`O Herói de nome ${nomeHeroi} está no nivel de ${nivel}`);