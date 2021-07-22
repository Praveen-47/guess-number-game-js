// function HelloWorld(){
//     var name = window.prompt("Enter your name: ");
//     alert("Your name is " + name);
    
// }
// console.log(HelloWorld());


//randome number game node js 
//1 get user name , then console.log(`welcome ${name}`)
//2 get user input 
//3 if it is === 2(randomNum)console.log('yoyo congratulations');
//else if (try again){go to get user input}
//when click ctrl+c exit from game 

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
   
//   readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
    
//     readline.close();
//   });


//genarate a randome number 
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

//for loop
// for (let i =0; 1<5;i++){
    // loop()
// }

//start the game

// generate a randome number 
// console.log(randomnum.toString(2))


// const i = 0;
// let username = 'praveen';
const times = 8
const i =8

const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question('enter your name ___',name=>{
    // set(username) = name;
    console.log(`welcome ${name}!`);
    console.log(`you have ${times} times`)
    readline.question('enter a number between 0-8 ____',number=>{
      getnumber(number);  
    })
})
const getuserinput=()=>{
    readline.question('enter a number ___',number=>{
        getnumber(number);  
      })
} 
function getnumber(number){
    const randomnum = (max)=>Math.floor(Math.random()*max);
    let correctnum=randomnum(times).toString()
    // let numb = number===randomnum.toString()
        if(number ===correctnum){
            console.log(`congrats you guess correct number:${number}`);
            readline.close();
      }
      else{
          console.log(`try again correct number is ${correctnum}`)
          do{
            getuserinput()
       }while(i<8)
     }

}



