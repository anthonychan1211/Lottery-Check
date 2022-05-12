const lottery = [1,2,3,4,5,6]
const specialNum = 7
const bought = [1,2,3,4,16,7,18,19]



function checkMarkSix(LotteryArr, boughtArr, specialNum){

    // Find subset function
    function subset(arra, arra_size){
    var result_set = [], 
        result;
    for(var x = 0; x < Math.pow(2, arra.length); x++){
    result = [];
    let i = arra.length - 1; 
     do{
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length === arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}



LotteryArr.push(specialNum)
    let goodNum = boughtArr.filter(x => LotteryArr.includes(x))
    let falseNum = boughtArr.filter(x => !goodNum.includes(x))
    if(goodNum.length < 3 || goodNum.length === 3 && goodNum.includes(specialNum)){
        return 'Oops Sorry Good Luck Next Time'
    }

if(goodNum.length >= 3){


    let wholeArr = [];
    for(let i = 0 ; i < goodNum.length -2 ; i++){
        let firstHalfLength = goodNum.length - i;
        let firstHalf = subset(goodNum, firstHalfLength)
        .filter(x => x.length!== 3 || !x.includes(specialNum))
        let lastHalf = subset(falseNum, 6 - firstHalfLength)
        firstHalf.forEach(x=> x.sort((a,b) =>a-b));
        lastHalf.forEach(x=> x.sort((a,b) =>a-b));
        for(let j = 0 ; j < firstHalf.length; j++){
            for(let k =0; k < lastHalf.length;k++){
                let newArr = firstHalf[j].concat(lastHalf[k]);
                console.log(newArr);
                wholeArr.push(newArr)
            }
            
        }
    }

}
    
}

checkMarkSix(lottery, bought, specialNum);
