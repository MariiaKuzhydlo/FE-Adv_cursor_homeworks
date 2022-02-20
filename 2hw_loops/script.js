let N , M ;

// Create functions
//parseInt() function parses a string argument and returns an integer
//Object.is()method determines whether two values are the same value
function inputN(){
    do{
        N = +prompt("My dear friend, please enter FIRST integer number", "enter here"); 
        if ((N !== parseInt(N)) || (Object.is(NaN , N) === true))
        alert("It is not a integer number! Try again!")
    } while ((N !== parseInt(N)) || (Object.is(NaN , N) === true))  
}

function inputM(){
    do{
        M = +prompt("My dear friend, please enter SECOND integer number", "enter here"); 
        if ((M !== parseInt(M)) || (Object.is(NaN , M) === true))
        alert("It is not a integer number! Try again!") 
    } while ((M !== parseInt(M)) || (Object.is(NaN , M) === true)) 
}


// Functions call
inputN(); 
inputM();

let addEvenNumbers = confirm ('Do you need to add even numbers?');
 
function sumNumbers(n,m) {
    let sum = 0 ;
    /* Next step is required so that our range is from minimum to maximum number,
    if the user first entered the maximum number*/
    const minNumber = Math.min(n,m);
    const maxNumber = Math.max(n,m);

    if (addEvenNumbers){
        for (let i = minNumber; i <= maxNumber ; i++){
          sum += i ;
        } return sum;
    }
    else{
        for (let i = minNumber; i <= maxNumber ; i++){
            if (!(i % 2 == 0)){
                sum += i;
            }
        } return sum;
    }
}     
alert( 'Sum' + ' ' + sumNumbers(N,M));
console.log(sumNumbers(N,M));
