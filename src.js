//switch statements
// let catrgories="computer"
// switch(catrgories){
//     case"phone":
//     console.log("phone catogory")
//     break;
//     case"computer":
//     console.log("computer category")
//     break;
//     default:
//         console.log("wrong category")


// }






// let day=new Date().getDay()

// switch(day){
//     case 0:
//         day="bazar gunu"
//         break;
//     case 1:
//         day="birinci gun"
//         break;
//     case 2:
//         day="ikici gun"
//         break;
//     case 3:
//         day="ucuncu gun"
//         break;
//     case 4:
//         day="dorduncu gun"
//         break;
//     case 5:
//         day="besinci gun"
//         break;
//     case 6:
//         day="altinci gun"
//         break;
// }
// console.log(`bugun ${day}`)






// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         day = "Weekend"
//         break;
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         day="Weekday"
//         break;
// }
// console.log(`today is ${day}`)





// 2
//  let num =9
//  if (num>0){
//     console.log("cut eded")
//  }else{
//     console.log("tek eded")
//  }











// let cars =['BMW','Mercedec','Honda','Audio','Tayota','Opel']

// let people=[
//     {frisName:'Ayisha',listName:'Musayeva'},
//     {frisName:'Movlan',listName:'Memmedli'},
//     {frisName:'Samral',listName:'Xelilov'},
// ]

// for(i=0;i<cars.length;i++){
//     console. log(cars[6])
// }


// for(let i=0;i<people.length;i++){
//     console.log(people[1].frisName)
// }


// For in
// for (let i in cars) {
//     console.log(cars[i])
// }

// for(let key in peopele){
//     console.log(people[i].frisName)
//     people=key
// }


// For of
// for (let i of cars) {
//     console.log(i)
// }

// for(let key of peopele){
//     console.log(key.frisName)
// people=key
// }


// For each
// cars.forEach( => {

// });






// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = 0;
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 === 0) {
//         evenNumbers += numbers[i];
//       }
// }
// console.log("Cüt ədədlərin toplanmasi:", evenNumbers);



// const numberS = [1, 2, 3, 4, 5];
// let sum = 0;
// let index = 0;


// for (let i = 0; i < numberS.length; i++) {
//     sum += numberS[i];
// }
// console.log("for döngüsü ilə toplam:",sum)





//   let j = 0;
// sum=0;
// index=0;
// while (index < numberS.length) {
//   sum += numberS[index];
//   index++;

// }
// console.log("while döngüsü ilə toplam:",sum)

// let k = 0;
// sum=0;
// do {
//   sum += numberS[k];
//   k++;
// } while (k < numberS.length);
// console.log("do while döngüsü ilə toplam:",sum)

// console.log("for döngüsü ilə toplam:", sumFor);
// console.log("while döngüsü ilə toplam:", sumWhile);
// console.log("do while döngüsü ilə toplam:", sumDoWhile);





// function checkNumberType(number) {
//     if(typeof number !== "number"){
//       console.log(`"${number}: Number tip deyil"`)
//       return null
//     }


//     if(number>0){
//       console.log(`"${number}: Number musbetdir"`)
//     }else if(number<0){
//       console.log(`"${number}: Number menfidir"`)
//     }else{
//       console.log(`"${number}: Number sifirdir"`)
//     }
// }
// let result=checkNumberType("a")
// console.log(result)
// checkNumberType("a")
// checkNumberType(-6)
// checkNumberType(6)
// checkNumberType(0)


// const numbersArray = [1, 3, 5, 7, 9, 11];
// const checkNumber = (selectedNumber) => {
//   const result = numbersArray.includes(selectedNumber);
//   console.log(result);
// }

// console.log(5)

// const result =  numbersArray.includes(13)
// console.log(result)


// const Molde


// function compareModels(a,b){
//   return a.model.localeCompare(b.model);
// }
// let shops2 = shop.sort(compareModels);
// console.log(shops2)





// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 500 },
//   { name: "Smartwatch", price: 300 },
// ];

// const sortedProducts = products.sort((a, b) => b.price - a.price);

// const mostExpensiveProduct = sortedProducts[0];

// console.log("Ən bahalı məhsul:", mostExpensiveProduct);


// const phoneProduct = products.find(product => product.name.toLowerCase() === "phone");

// console.log("Phone məhsulu:", phoneProduct);




// const array1 = [15, 18, 25, 30];
// const array2 = [8, 12, 18, 22];

// const isAllGreaterThan10 = (arr) => arr.every(num => num > 10);

// const isAnyGreaterThan20 = (arr) => arr.some(num => num > 20);

// console.log("Array1: Bütün ədədlər 10-dan böyük: ", isAllGreaterThan10(array1));
// console.log("Array1: Ən az bir ədəd 20-dən böyük: ", isAnyGreaterThan20(array1));
// console.log("Array2: Bütün ədədlər 10-dan böyük: ", isAllGreaterThan10(array2));
// console.log("Array2: Ən az bir ədəd 20-dən böyük: ", isAnyGreaterThan20(array2));




//   const numbers = [2, 3, 4, 5];


// const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

// console.log(`Massivdəki rəqəmlərin hasili: ${product}`);




// if (product > 100) {
//     console.log("Nəticə 100-dən böyükdür.");
// } else if (product === 100) {
//     console.log("Nəticə 100-ə bərabərdir.");
// } else {
//     console.log("Nəticə 100-dən kiçikdir.");
// }





// const numberS = [5, 8, 2, 4, 6];
// const sum = numberS.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(`Massivdəki rəqəmlərin cəmi: ${sum}`);


// const numbers =[3,5,2,7,8,3,5,2,9,1,6,4,2]
// const result =numbers.reduce((accumlator,currentValue)=>
// {
//   if(!accumlator.includes(currentValue)){
//     accumlator.push(currentValue)
//   }
//   return accumlator
// },[]);
// console.log(`Masivde tekrarlanan reqemler ${result}`)


// const result =[...new Set(numbers)]
// console.log(`Masivde tekrarlanan reqemler ${result}`)

// const names = ['Ayisha', 'Movlan', 'Samral', 'Shukur', 'Elvin', 'Movlan']
// let countNames = names.reduce((allNames, name) => {

//   if (name in allNames) {
//     allNames[name]++
//   }
//   else {
//     allNames[name] = 1
//   }
//   return allNames
// }, {})
// console.log(countNames)



// const names = ['Ayisha', 'Movlan', 'Samral', 'Shukur', 'Elvin', 'Movlan']
// let countNames = names.reduce((allNames, name) => {

//   const lowerCase = name.toLowerCase();
//   if (lowerCase in allNames) {
//     allNames[lowerCase]++
//   }
//   else {
//     allNames[lowerCase] = 1
//   }
//   return allNames
// }, {})
// console.log(countNames)


const products = [
  {
    model: "Samsung A71",
    brend: "Samnsung"
  },
  {
    model: "Samsung A51",
    brend: "Samnsung"
  },
  {
    model: "Samsung S20",
    brend: "Samnsung"
  },
  {
    model: "IPhone 13",
    brend: "Apple"
  },
  {
    model: "IPhone 15",
    brend: "Apple"
  },
  {
    model: "Redmi note 8",
    brend: "Xiaomi"
  },
]
// const groupBy = (array, property) => {
//   return array.reduce((arr, product) => {
//     let key = product[property]
//     if (!arr[key]) {
//       arr[key] = [product]
//     }
//     else {
//       arr[key].push(product)
//     }
//     return arr
//   }, {})
// }
// console.log(groupBy(products,"brend"))

const groupBy =(array,property)=>
array.reduce((arr,product)=>
 ((arr[product[property]]=arr[product[property]] || []).push(product),arr){})
console.log(groupBy(products,"brand"))
