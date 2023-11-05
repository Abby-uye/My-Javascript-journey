let count = 0

function cc(card){
    if (card == 2 || card ==3 || card == 4 || card == 5||card ==6){
       return console.log( count+=card," Bet")
    }else if (card == 7 || card == 8 || card == 9){
        return console.log(count," Hold")
    }else if (card == 10 || card == 'J'|| card == 'Q' || card =='k'||'A'){
        return console.log( count-1," Hold")
    }
}
console.log(cc("A"))