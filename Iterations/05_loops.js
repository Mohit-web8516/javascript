// const coding = ["js","c++","java","python","ruby"]

// const values = coding.forEach((item) => {
//    // console.log(item);
//     return item
// })
// console.log(values); //undefined


/////////////////////////////////////////////////////

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.filter((num) => num > 4 )
// console.log(newNum);
//////////////////////////////////////////
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.filter((num) =>{
//     return num > 4
// }  )
// console.log(newNum);
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
// const newNum = []

// myNum.forEach((num) => {
//     if (num > 4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
// Array of book objects
const books = [
  { title: "Clean Code", edition: "1st", genre: "Programming", publication: 2008 },
  { title: "The Pragmatic Programmer", edition: "2nd", genre: "Programming", publication: 2019 },
  { title: "1984", edition: "1st", genre: "Dystopian", publication: 1949 },
  { title: "To Kill a Mockingbird", edition: "1st", genre: "Classic", publication: 1960 },
  { title: "Deep Work", edition: "1st", genre: "Productivity", publication: 2016 }
];

// Example 1: Filter books by genre
// const programmingBooks = books.filter(book => book.genre === "Programming");
// console.log("Programming Books:", programmingBooks);

// // Example 2: Filter books published after 2000
// const modernBooks = books.filter(book => book.publication > 2000);
// console.log("Books published after 2000:", modernBooks);

// // Example 3: Filter books with 1st edition
// const firstEditionBooks = books.filter(book => book.edition === "1st");
// console.log("First Edition Books:", firstEditionBooks);


// const mybooks = books.filter((bk) => { return bk.publication <= 2010; }); console.log(mybooks);


