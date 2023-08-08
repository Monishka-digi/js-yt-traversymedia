// alert('Hello from the JS file!')

// const person = {
//     name:'Monishka',
//     age:'21',
//     Gender: 'Female',
//     designation: 'Intern'
// }
// console.log(person);
// person.nationality='Indian'
// console.log(person)
// person.name='Nidhi'
// console.log(person)


//Type Conversion
//String to number converion
// let amount= '100'
// amount= parseInt(amount)
// amount =+ amount
// console.log(amount, typeof amount)

//String to decimal number converion
// let amount= '99.5'
// amount= parseFloat(amount)
// amount =+ amount
// console.log(amount, typeof amount)

//Number to string conversion
// let amount= 100
// amount= amount.toString()
// amount= String(amount)
// console.log(amount, typeof amount)

//Number to boolean
// let amount=0
// amount= Boolean(amount)
// console.log(amount, typeof amount)

//Concatenation
//string
// let str1= 'Monishka'
// let str2='Ranjan'
// myName= str1 + ' ' + str2
// console.log(myName)

//array
// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9,10]
// num= arr1.concat(arr2)
// console.log(num)

//object
// const person={
//     name: 'Monishka',
//     age:22
// }
// const job={
//     designation: 'Intern',
//     location: 'Bangalore'
// }
// const employee={
//     ...person,
//     ...job
// }
// console.log(employee)

//(If objects have a property with the same name, then the right-most object property overwrites the previous one.)
// const person1={
//     name: 'Monishka',
//     age:22
// }
// const person2={
//     name: 'Nidhi',
//     age:21
// }
// const frnds={
//     ...person1,
//     ...person2
// }
// console.log(frnds)


//normal concatenation
// let name= 'Monishka'
// let age=22
// let greet= 'Hi'

// greeting= greet + ', My name is ' + name + '. I am ' + age + ' yrs old.'
// console.log(greeting)

//same thing(above) using template literals 
// let name= 'Nidhi'
// let age=22
// let greet= 'Hello'

// greeting= `${greet}, My name is ${name}. I am ${age} yrs old.`
// console.log(greeting)

//get individual character of a string
// let greet='Hello World'
// x= greet[0]
// console.log(x)
//strings can be accessed by indexes but are immutable i.e the values of the index in cannot be altered unlike arrays

//Numbers
