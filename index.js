const arr1 = [1,2,3,4,5,6]
const specialNum = 7
const arr2 = [1,2,3,4,5,16,17,18]

checkMarkSix(arr1, arr2)

function checkMarkSix(LotteryArr, boughtArr){
    let goodNum = boughtArr.filter(x => LotteryArr.includes(x))
    let falseNum = boughtArr.filter(x => !goodNum.includes(x))
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

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}
if(goodNum.length == 3){
    let comb = subset(falseNum, 6-goodNum.length).filter(x => x.length<3)
    for(let i = 0 ; i < comb.length ; i++){
    let fullArr = goodNum.concat(comb[i]).sort((a,b)=> a-b)
    return fullArr;
    }
}
if(goodNum.length > 3){
    let wholeArr = [];
    for(let i = 0 ; i < goodNum.length -2 ; i++){
        let firstHalfLength = goodNum.length - i;
        let firstHalf = subset(goodNum, firstHalfLength).filter(x => x.length <= firstHalfLength).sort((a,b)=>a-b);
        let lastHalf = subset(falseNum, 6 - firstHalfLength).filter(x => x.length <= 6 - firstHalfLength).sort((a,b)=>a-b);
        // console.log(lastHalf);
        for(let j = 0 ; j < 6 - falseNum.length; j++){
            let newArr = firstHalf[i].concat(lastHalf[j]);
            console.log(newArr);
            wholeArr.push(newArr)
        }
    }
    return wholeArr;
}
}