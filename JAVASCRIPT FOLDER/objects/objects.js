 let cars = { brand:"BMW", color:"white",year:"2019" };
 
 let person = {firstName:"john",lastName:"Tom",age:"50", hairColor:"green" };
 console.log(cars);
 console.log(cars.brand);
 console.log(cars.color);
 cars.brand="Mercedes";
 console.log(cars.brand);
 person.age="66";
 person.age+=1; /* incrrease age  */
 console.log(person.age+1); /* also incrrase age */
//  document.write(person.age);
 person.city="hamburg";
 console.log(person.city);
 person["fav color"]="yellow";
 console.log(person);

// /// create object
let language=new Object();/*  */
language.name="English";
language.level="easy";
console.log(language);
let driver = {
    age:60,
    firstname:"john",
    nationality:"UK",
    car : { brand:"ford",color:"black",year:"2012" }
};
console.log(driver.car);
console.log(driver.car.color);
console.log(driver["car"].year);/* another way */
console.log(driver["car"]["brand"]);/* another way */
driver.pet=["cat","dog"];/* array */
console.log(driver.pet[0]);/* cat */
console.log(driver.pet[1]);/* dog */

// we create now array of object

let posts = [
       {title:"cats are nice" ,
       author:"Mansour",
    },
        {title: "Dogs are totaly awsome",author:"dog lover"}
       
       
   ];
   console.log(posts);
   posts[1].title = "Dogs are totaly cute";
   console.log(posts);

   posts[0].comment = "nice post i like it";
   console.log(posts);

   posts[1].comment = "nice thank you ", "noo i hate you :( ";
   console.log(posts[1]);

   console.log(posts[1].comment[1]);

   posts[1].comment[1]= "nice post :)";
   console.log(posts[1].comment[1]);
   posts[1].comment = ["thanks a lot :)", "thanks a lot :)"];
   console.log(posts[1]);
   console.log(posts[1].comment[0]);

//    WE GREATE student object
let student={
     
    firstName:"mansour",
    lastName:"tumeh",
    id:4654,
    overthirty:true,
    fullName: function(){
        return student.firstName+ "  " + student.lastName;
    }


};
console.log(student.fullName());

/* example 1 : Create a person object. Include the person's 
first and last name, age, job, city etc. Then print text by 
retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France". */
 
let me={
    firstName:"Farhan",
    lastName:"Allfi",
    age:"30",
    job:"student",
    city:"Hamburg",
    fullinfo:function(){
        return me.firstName+ "  " +me.lastName+ " " +me.age+ " " +me.job+ " " +me.city;

    }
};
document.write(me.fullinfo ()+"<br>");
// ////////////////////////////////////// my solution 
//  example 2 :create an array of movies objects
// Each movie should have a title, rating and haswatched property

// you have watched "wanted film " is " 5 stars"
// you have watched "Mother film " is " 4 stars" 

 let movies = [
    {title:"the god father" ,
    author:"Alpatcino",
    rate:" 5 stars",

 },
     {title: "this move is :  avengers awsome",rate:" 5 stars"},
     {title: "this move is : lolo  ok  ",rate:" 3 stars"},
     {title: "this move is : kkk fine  ",rate:" 4 stars"},
     {title: "this move is : ccc shit  ",rate:" 1 stars"}
    
    
];

document.write("this movie is: " +movies[0].title +" "+movies[0].rate+"<br> ");
for (let x=0; x<movies.length;x++){
    document.write("this movie is: " +movies[x].title +" "+movies[x].rate+"<br> ");
}
let counter=0; 
document.write("while loop <br>")
while(counter<movies.length){
    document.write("this movie is: " +movies[counter].title +" "+movies[counter].rate+"<br> ");
 counter++
}
// ///////////////////////////// the teacher soulution 
 movies = [
    {
        title:"Titanic",
        hasWatched: true,
        rating: 5
    },    
    {
        title :"despicable me 3",
        hasWatched:true,
        rating:4
    },
    {
        title:"God Father",
        hasWatched:true,
        rating: 5
    },
    {
        title: "Pretty Women",
        hasWatched:false,
        rating: 3
    },
    { 
        title : "Passenger",
        hasWatched:true,
        rating : 4
    },
    { 
        title : "Harry Potter",
        hasWatched:false,
        rating : 5
    }
];
movies.forEach(function(film){ 
    if(film.hasWatched==true){
        console.log("You watched "+ film.title + 
        " has "+film.rating+ " Stars" )
    }
    else{
        console.log("you have to watch "+ film.title+ 
        " has "+film.rating+"star")
    }
    
 });
 function stars(num){
    let str="";
    if(num > 5 ){  num=5;  }
    for (let i=0; i< num;i++){
        str+=" * ";
    }
    return str;
 }
 movies.forEach(function(film){
    if(film.hasWatched==true){
        console.log("You watched "+ film.title +
        " has "+film.rating+ " Stars " + stars(film.rating) );
 
    }
    else{
        console.log("You have to watch "+ film.title +
        " has "+film.rating+ " Stars" + stars(film.rating) )
    }
 
 }); 

 for( let i=0;i<movies.length;i++){
     if(movies[i].hasWatched==true){
         document.write("<div style='color:green;font-weight:bold;background-color:yellow;'>you watched","<br>"+movies[i].title
         + " has " + movies[i].rating
         + " star " + stars(movies[i].rating) + "<div><br><br>");
     }
     else{
         document.write("you have to watch" + movies[i].title
         +" has " +movies[i].rating
         +" stars "  + stars(movies[i].rating) + "<br><br>");
     }
 }