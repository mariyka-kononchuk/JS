function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Complete this line
    message =  'Canceled by user!';
  } else if (password === 'jqueryismyjam') { // Complete this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

console.log(checkPassword);

// //Задача 1//

// const productName = 'Droid';
// const pricePerItem = 2000;

// //Задача 2//

// let productName = 'Droid';
// let pricePerItem = 2000;

// productName = 'Repair droid';
// pricePerItem = 3500;

// //Задача 3//

// const topSpeed = 160;
// const distance = 617.54;
// let login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// //Задача 4//

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;


// //Задача 5//

// const productName = 'Дроид';
// const pricePerItem = 3500;


// const message = Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов;

// //Задача 6//

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.

// //Задача 7//

// function sayHi (){
//     console.log('Привет, это моя первая функция!');
//   }
//   sayHi();

//   //Задача 8//
  
// function add(a,b,c) {
//     console.log(Результат сложения равен ${a + b + c});
  
//   }
    
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

//    //Задача 9//

//    function add(a, b, c) {
//     return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// //Задача 10//

// function makeMessage (name, price) {
  
//    const message =  Вы выбрали ${name}, цена за штуку ${price} кредитов;

//   return message;
// };

// //Задача 11//

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
  
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
 
// };

// //Задача 12//
// const orderedQuantity = 4;
// const pricePerDroid = 300;
// const deliveryFee = 100;

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
 
// const message = Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.
//   return message;
// }
// console.log(Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.)
   

// // //Задача 13//
// const age = 20
// function isAdult(age) {
  
//   const passed = (age >= 18);
//   return passed;
// }
// console.log(age >= 18)

// //Задача 14//

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = (password === SAVED_PASSWORD);

//   return isMatch;
// }

// //Задача 15//

// function checkAge(age) {
//   let message;

  // if (age >= 18) { 
  //   message = 'Вы совершеннолетний человек';
  // } else {
  //   message = 'Вы не совершеннолетний человек';
  // }

//   return message;
// }

// //Задача 16//

// function checkStorage(available, ordered) {
//   let message;
 
//   
//   return message;
// }

// // //Задача 17//

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

//Задача 18//

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) { 
//     message = 'Недостаточно средств на счету!';
//   } else
//   {
//     message = Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов;
//   }
 
//   // Пиши код выше этой строки
//   return message;
// }

//Задача 20//
function checkStorage(available, ordered) {
  let message;
 
  if (ordered === 0) { // Complete this line
    message =  'There are no products in the order yet';
  } else if (ordered > available) { // Complete this line
    message = 'The order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is placed, the manager will contact you';
  }

  // Write your code above this line
  return message;
}

//21//
function isNumberInRange(start, end, number) {
  const isInRange = number > start && number < end ; // Complete this line
  return isInRange;
}

//22//
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType==='pro' || subType==='vip' ; // Complete this line

  return canAccessContent;
}

//23//
unction isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Complete this line

  return isNotInRange;
}

//24//
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  
  // Write your code under this line
if (totalSpent >= 50000) { // Complete this line
    discount =  GOLD_DISCOUNT;
  } else if (totalSpent>= 20000 && totalSpent < 50000) { // Complete this line
    discount = SILVER_DISCOUNT;
  } else if (totalSpent>= 5000 && totalSpent < 20000){
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent <5000){
    discount = BASE_DISCOUNT;
  }
  
  // Write your code above this line
  return discount;
}

//25//
function checkStorage(available, ordered) {
  let message;
  // Write your code under this line

  message = ordered > available?'Not enough goods in stock!':'The order is placed, the manager will contact you';
  

  // Write your code above this line
  return message;
}

//26//
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Write your code under this line
message = password==='jqueryismyjam'?'Access is allowed':'Access denied, wrong password!'
  // Write your code above this line
  return message;
}

//27//
function getSubscriptionPrice(type) {
  let price;
  // Write your code under this line

 switch (type) { // Complete this line
    case 'starter':  // Complete this line
      price = 0; // Complete this line
      break;

    case 'professional': // Complete this line
      price = 20; // Complete this line
      break;

    case 'organization': // Complete this line
      price = 50; // Complete this line
      break;
  }

  // Write your code above this line
  return price;
}

//28//
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }
switch (password) { // Complete this line
    case null:  // Complete this line
      message = 'Canceled by user!'; // Complete this line
      break;

    case ADMIN_PASSWORD: // Complete this line
      message = 'Welcome!';
      break;

  default:
    message = 'Access denied, wrong password!';
  }
  return message;
}

//29//
function getShippingCost(country) {
  let message;
  
 
switch (country) { 
    case 'China':  
      message = 'Shipping to China will cost 100 credits'; 
      break;

    case 'Chile': 
      message = 'Shipping to Chile will cost 250 credits';
      break;
    
    case 'Australia': 
      message = 'Shipping to Australia will cost 170 credits';
      break;
    
    case 'Jamaica' : 
      message = 'Shipping to Jamaica will cost 120 credits';
      break;
    
    case 'Germany': 
      message =  'Sorry, there is no delivery to your country';
      break;
    
    case 'Sweden': 
      message =  'Sorry, there is no delivery to your country';
      break;
  }
  
  return message;
}

//30//
function getNameLength(name) {
  const message = `The length of your name is ${name.length} character(-s)`; // Complete this line

  return message;
}
//31//
const courseTopic = 'JavaScript for beginners';
// Write your code under this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Write your code above this line

//32//
function getSubstring(string, length) {
  const substring = string.slice(0,length); // Complete this line

  return substring;
}

//33//
function formatMessage(message, maxLength) {
  let result;
// Write your code under this line
if (message.length <= maxLength ) { 
    result =  message;
  } else { 
    result = message.slice(0, maxLength) + '...';
  } 
// Write your code above this line
  return result;
}

//34//
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();; // Complete this line
  return normalizedInput;
}

//35//
function checkForName(fullName, name) {
 const result = fullName.includes(name) ; // Complete this line
  return result;
}

//36//
function checkForSpam(message) {
  let result;
  // Write your code under this line
 const normalizedMessage = message.toLowerCase();
   
  if (normalizedMessage.includes('spam') ||normalizedMessage.includes('sale')) { 
    result =  true;
  } else { 
    result = false;
  } 
  
  // Write your code above this line
  return result;
}