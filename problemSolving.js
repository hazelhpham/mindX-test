

const findOppositeNumber = (n, inputNumber)=>{
    if((n%2 !== 0) || (n>20) || (n<4)){
        console.log("Please enter even numbers from 4 to 20!");
        return -1;
    }
        const space = n/2;
        if(inputNumber > space) {
            return (inputNumber-space)
        }
        return (inputNumber+space)
}
console.log(findOppositeNumber(7, 2)); //-1
console.log(findOppositeNumber(5, 2)); //-1
console.log(findOppositeNumber(10, 2)); 
console.log(findOppositeNumber(10, 6));
console.log(findOppositeNumber(12, 8)); //2
console.log(findOppositeNumber(12, 10)); //4

const merge2String = (s1,s2) =>{
    let str="";
    if(s2.length > s1.length){
        for(let i = 0; i < s1.length; i++){
            str += s1[i];
            str += s2[i];
        }
        for(let i = s1.length; i < s2.length; i++){
            str += s2[i];
        }
        return str; 
    }
    else if (s2.length === s1.length ){
        for(let i = 0; i < s1.length; i++){
            
            str += s1[i];
            str += s2[i];
            
            
        }
        return str; 
    }
    else if (s2.length < s1.length ){

        for(let i = 0; i < s2.length; i++){
            str += s1[i];
            str += s2[i];
        }
        for(let i = s2.length; i < s1.length; i++){
            str += s1[i];
        }
        return str; 
    }

   

}

console.log( merge2String("abc", "123") ); //a1b2c3
console.log( merge2String("abc", "0123") ); //a0b1c23
console.log( merge2String("abcd", "123") ); //a1b2c3d

