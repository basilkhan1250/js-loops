// Question 1

// var greet = "Hello World"
// for (i=1; i<=5; i++){
//     console.log(i , greet)
// }

// question 2 

// for (i=1; i<=10; i++){
//     console.log(i)
// }


// question 3 

// var ask = +prompt("enter your value for table")
// var ask2 = +prompt("enter your length")
// for (i=1; i<=ask2; i++){
//     console.log(`${ask} x ${i} = ${ask*i}`)
// }

// question 4 

// var a = ["Nokia","Samsung","Apple","Sony","Huawei"]
// for (i=0; i<a.length; i++){
//     document.write(a[i] + '<br/>')
// }

// question 5 

// let fruits = ["Apple","Banana","Mango","Orange","Strawberry"]
// for (i=0; i<fruits.length; i++){
//     document.write(fruits[i],"<br/>")
// }
// document.write("Element at index " +  fruits.indexOf("Apple") + " is " + fruits[0] + "<br/>" )
// document.write("Element at index " +  fruits.indexOf("Banana") + " is " + fruits[1] + "<br/>")
// document.write("Element at index " +  fruits.indexOf("Mango") + " is " + fruits[2] + "<br/>")
// document.write("Element at index " +  fruits.indexOf("Orange") + " is " + fruits[3] + "<br/>")
// document.write("Element at index " +  fruits.indexOf("Strawberry") + " is " + fruits[4] )


// const fruit =["apple","banana","mango","orange","strawberry"]


// for ( i = 0 ; i < fruit.length ; i ++){
//     para.innerHTML += `${fruit[i]} <br />`
//     head.innerHTML += `Element at index ${i} is a ${fruit[i]} <br/>`
// }


// question 6 



// let ask = +prompt("enter your number of items ")
// const ol = document.querySelector("ol")
// const h1 = document.querySelector("h1")
// const h2 = document.querySelector("h2")
// let arr = []
// function values() {
//     h1.innerHTML = `Number of items: ${ask}`
//     h2.innerHTML = `Items : <br/>`
//     ol.innerHTML = " "
//     for (i = 0; i < ask; i++) {
//         arr.push(prompt("enter your value " + i))
//         ol.innerHTML += `<li>${arr[i]}</li>`
//         // document.write(arr+"<br/>")
//     }
// }

// values()

// question 7

// for (i=1; i<=15; i++){
//     console.log(i)
// }                 // COUNTING

// for (i=10; i>0; i--){
//     console.log(i)
// }             // REVERSE COUNTING


// for (i=0; i<=10; i++){
// let a = i * 2
//     document.write(a,"<br/>")
// }                // EVEN NUMBER


// for (i=0; i<=20; i++){
//     if(i % 2 ){
//     console.log(i)
//     }
// }            // ODD NUMBER


// for (i=1; i<=10; i++){
//     document.write(i * 2, "K" + "<br/>")
// }            // SERIES


// question 8 

// let arr = ["cake","apple pie","cookie","chips","patties"]
// var ask = prompt("what do you want to order")
// for (i=0; i<ask.length; i++){
//     if (ask === arr[i]){
//         console.log(`${ask} is available at index ${arr.indexOf(ask)} in our bakery`)
//        }
// }


// question 9 

// let numbers = [24,53,78,91,12] 
// let arrSort = numbers.sort()
// // document.write(arrSort)
// for (i=0; i<1; i++){
// let find = arrSort.slice(i-1)
// console.log(find)
// }


// let numbers = [24,53,78,91,12] 
// let number = Math.max(...numbers)
// console.log(number)


// question 10

// let numbers = [24,53,78,91,12] 
// let sorted = numbers.sort()
// console.log(sorted[0])

// question 11

// let numbers = [24,53,78,91,12] 
// let sorted = numbers.sort()
// for (i=0; i<1; i++){
//     let findsmallest = sorted.slice()
//     document.write(`This is the array ${numbers} <br/>`)
//     document.write(`This is the smallest number ${findsmallest[0]} <br/>`)
//     let findlargest = sorted.slice(i-1)
//     document.write(`This is the largest number ${findlargest}`)
// }

// question 12

// for (i=1; i<=100; i++){
//     // console.log(i)
//     if (i % 5 === 0 ){
//         console.log(i)
//     }
// }

// question 13

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// let names = document.querySelector(".name")
// let score = document.querySelector(".score")
// for (i=1; i<5; i++){
//     names.innerHTML = ` ${students} `
//     score.innerHTML = ` ${scores} `
// }

// question 14

// var scores = [12, 45, 3, 22, 34, 50]
// var ask = +prompt("enter your value where to stop")
// // for (i=0; i<scores.length; i++){
//     console.log(`This is the array ${scores} `)
//     let simple = scores.indexOf(ask)
//     console.log(scores.slice(0,simple+1))
// // }


// question 15

// var number  = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// for (i=0; i<number.length; i++){
//     document.write(number[0]+"<br/>")
//     for (i=0; i<number.length; i++){
//         document.write(number[1]+"<br/>")
//         for(i=0; i<number.length; i++){
//             document.write(number[2])
//             for(i=0; i<number.length; i++){
//             }
//         }
//     }
// }


// question 16

// var ask = +prompt("enter your value")
// for (i=0; i<=ask; i++){
//     document.write( i  - 0.5 , "<br/>" , )
//     document.write(i , "<br/>") 
// }

// question 17

// for (i=0; i<=20; i++){
//     if(i === 0){
//         console.log(`${i} is even`)
//     }
//     else if (i % 2 === 0){
//         console.log(`${i} is even`)
//     }
//     else{
//         console.log(`${i} is odd`)
//     }
// }

// question 18


// function numbers (arr){
//     odd = 1
//     for (i=0; i<=arr.length; i++){
//     if (arr[i] % 2  )
//         // console.log(arr[i])
//         odd = odd * arr[i]
//         console.log(odd)
//     }
// }
// number = [1,2,3,4,5,6,7,]
// numbers(number)
// document.write(`the product of the odd integers from ${number[0]} to ${number[6]} is ${odd}`)

// question 19


// let star = [" * "]
// for (i=1; i<=7; i++){
//     console.log(`${star}`)
//     star.push(star[0])
// }

// question 20

// var ask = +prompt("enter your value")
// let star = [" * "]
// for (i=1; i<=ask; i++){
//     console.log(`${star}`)
//     star.push(star[0])
// }




