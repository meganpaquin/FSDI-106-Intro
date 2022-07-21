let i;

function sum(number1, number2){
    return (number1 + number2);
}

function hello(){
    console.log('Hello Megan Paquin');
}

function sayHello(inputName){
    console.log('Hello ' + inputName);
}

function exercise1(){
    //print numbers from 0 to 20 except 7 and 13
    let myArray = [];
    for(i=0; i<21; i++){ 
        if(i!=7 && i!=13){
            myArray.push(i);
        }
    }
    console.log(myArray);

    let name = '';
    if(!name){
        console.error("Name is required");
    }
}

function exercise2(){
    let numbers = [123,3,-1,12,-123,45,10,20,203, -2, -29, 12,123]; 
    let total=0;
    for(i=0; i<numbers.length; i++){
        //display everything
        element = numbers[i];
        console.log(element);
        //add everything
        total += element;
        //display negative numbers
        if(element<0){
            console.error(element+" is negative");
        }

    }
    console.log(total);
}

function customArray(arrayLength, arrayIncrement){
    let myArray = [];
    for(i=0; i<arrayLength; i+=arrayIncrement){ 
        myArray.push(i);
    }
    console.log(myArray);
}


function init(){
    hello();
    let myName = 'Megan';
    sayHello(myName);
    let result = sum(123.5, 12,3);
    console.log(result);
    exercise1();
    exercise2();
    customArray(90,10);
}

window.onload = init;
