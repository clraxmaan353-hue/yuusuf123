// let pin=1234
// let userpin=parseInt(prompt("enter your pin:"))
// while(userpin !== pin){
//     userpin = prompt("enter pin again")
// }
// alert("succecful")


// let number=12345678910
// let num=parseInt(prompt)("enter number")
// while(number ===10){

// }
// console.log(welcome)


// let i=1
// let sum=0
// while(i<=10)
//     sum+=i
// i++

// let subject=6
// let sub=parseInt(prompt("enter your subject"))
// while(subject==6){
//     user(prompt("enter your subject"))
//     sub("enter your marks")
//     User("enter your marks")
// }

let noofsub = Number(prompt("enter of subjects:"))
let total = 0
for(let i= i; 1< noofsub; 1++){
    let marks
    while(true){
         marks=Number(prompt("enter marks for subject"+i))
        if(marks >= 0 && marks <= 100){
            break
        }
        console.log("invalid marks try again")
    }
    total+= marks
}
console.log("the total marks:"+ total)
