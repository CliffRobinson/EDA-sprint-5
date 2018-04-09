// Excercise 1: Looping a Triangle:

let hash = ''

for (var i=0;i<7;i++){
 hash += '#';
 console.log(hash);
}

// Excercise 2: FizzBuzz:

let upper = 100;

for (let i=1;i <=upper;i++){
	if (i%3 == 0 && i%5 ==0) {
        console.log('FizzBuzz');
      	//console.log(i+' FizzBuzz: is divisible by 3 and 5');
    } else if (i%3 == 0){
        console.log('Fizz');
    	//console.log(i+' Fizz: divisible by 3');
    } else if (i%5 ==0) {
        console.log('Buzz');
  		//console.log(i+' Buzz: divisible by 5');
	}  else{
    	console.log(i);            
    }
}

//Excercise 3: 

let size = 8;
let line ='';


for (let i=0;i<size;i++){
 for (let j=0; j<size;j++){
   if ((i+j)%2==0){
     line += '#';

   } else {
     line += ' ';

   }
 }
 console.log(line);
 line = '';
}