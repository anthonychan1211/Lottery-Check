0000001
0000001

0000000


function subset(arra, arra_size){
    let result_set = [], 
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

    if(result.length == arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

const arr = [1,2,3,4,5,6]


const finalArr = subset(arr, 3);
console.log(finalArr);