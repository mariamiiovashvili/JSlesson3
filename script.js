// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   დაბეჭდეთ მასივისი ახალი ელემენტები.

let items = [5, 25, 89, 120, 36]; 

items.push('javascript','phyton');
console.log(items);

items.unshift('html', 'css');
console.log(items);

console.log(items.length);

items.pop();
items.shift();

console.log(items);



// 2.შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let fruits = ['ფორთოხალი', ' ბანანი', 'მსხალი'];
 console.log(fruits.length);

 fruits.push ('ვაშლი','ანანასი');

 console.log(fruits);

 fruits.unshift ('საზამთრო');

 console.log(fruits);
 console.log(fruits.length);

 fruits.splice (2,0, 'მანგო');
 console.log(fruits);

fruits.pop();
fruits.shift();
console.log(fruits);

console.log(fruits.length);



// 3. მოცემულია მასივი:

// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let array = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray = array.map(function(numbers){
    return numbers / 3
})
console.log(newArray);



// 4.  მოცემულია მასივი:

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

let itm = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newitm = itm.filter(function(itms){
    return typeof itms === 'number'
})
console.log(newitm);


// 5.მოცემულია მასივი:

// let languages = ['html', 'css', 'javascript', 'python, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ['html', 'css', 'javascript', 'python' , 'php'];
let newLang = languages.filter(languages => languages.length > 3)
console.log(newLang);

// 6.მოცემულია მასივი:
// let array= ['academy', 'of', 'digital', 'industries']

// Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი(academy of digital industries);

let words = ['academy', 'of', 'digital', 'industries'];
let newWords = ['academy', 'of', 'digital', 'industries'].reduce((x,y) => x + ' ' + y);
console.log(newWords);



// 7. მოცემულია მასივი:
// let item = [12, ‘google’, 32, null, ‘yahoo’, 25];

// შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. 
// თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. 
// სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;

let itms = [12, 'google', 32, null, 'yahoo', 25];
let newitms = itms.map(itemS =>{
    if (typeof itemS === 'number') {
        return itemS * itemS; 
    }
     else if (typeof itemS === 'string') {
        return itemS.toLocaleUpperCase();
        
    } else {
        return itemS
    }
});
console.log(newitms);


// 8. Მოცემულია მასივი:
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან 
// რომელიც შეიცავს ასო m-ს ან M-ს;


let cities = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newCitiesM = cities.filter(cities => cities.includes ('m') || cities.includes ('M'));
console.log(newCitiesM);
