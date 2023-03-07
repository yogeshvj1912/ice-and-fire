let headingBox=detailBox("div","id","headingBox")
let heading=detailBox("h1","id","heading")
    heading.innerHTML="Ice and Fire"
let subHeading=detailBox("h1","id","sub-heading")
    subHeading.innerHTML="Book Number 1 To 12"
    headingBox.append(heading,subHeading)
    document.body.append(headingBox);    
  
let div=document.createElement("div");
    div.setAttribute("class","main1");
  
let formgroup=document.createElement("div");
  formgroup.setAttribute("class","form-group");
  //use bootstarp 4.6 for input
let input=document.createElement("input");
  input.setAttribute("type","number");
  input.setAttribute("class","form-control");
  input.setAttribute("id","main");
  input.setAttribute("placeholder","enter booknumber:- 1 to 12");
  //use bootstarp 4.6 for button
let button=document.createElement("button");
  button.setAttribute("type","button");
  button.classList.add("btn","btn-primary");
  button.innerHTML="Search";
  button.addEventListener("click",foo);
  
  formgroup.append(input,button,)

  div.append(formgroup);
  // div.append(abc);
  //append in document.body
  document.body.append(div);
  //create elements for book name, isbn,number of pages,authors,publisher,teleased date,characters
  
  function detailBox(div,id,value){
     ele= document.createElement(div);
      ele.setAttribute(id,value)
      return ele;
  }
  let mainBook=detailBox("div","id","mainBook")
  let book=detailBox("div","id","book")
  let bookname=detailBox("p","id","name");
  let isbn=detailBox("p","id","isbn");
  let numberOfPages=detailBox("p","id","numberOfPages");
  let authors=detailBox("p","id","authors");
  let publisher=detailBox("p","id","publisher");
  let released=detailBox("p","id","released");
  let characters=detailBox("p","id","characters");
  let abc=detailBox("p","id","nonumber");
  

  async function foo(){
  try {
    book.append(bookname,isbn,numberOfPages,authors,publisher,released,characters,abc);
  mainBook.append(book);
  document.body.append(mainBook);
  
  let booknumber=document.getElementById("main").value;
  console.log(booknumber);
  
  let url ='https://anapioficeandfire.com/api/books/'+booknumber;
  let res=await fetch(url);
  let res1= await res.json();
  console.log(res1);
  //charters
  let url1 ='https://anapioficeandfire.com/api/characters/13'+booknumber;
  let res2=await fetch(url1);
  let res3= await res2.json();
  console.log(res3);
  //index for result
  
  console.log(res1.name);
  bookname.innerHTML=`BOOK NAME : ${res1.name}`;
  console.log(res1.isbn); 
  isbn.innerHTML=`ISBN NUMBER : ${res1.isbn}`;
  console.log(res1.numberOfPages); 
  numberOfPages.innerHTML=`NUMBER OF PAGES : ${res1.numberOfPages}`;
  console.log(res1.authors); 
  authors.innerHTML=`AUTHORS NAME : ${res1.authors}`;
  console.log(res1.publisher); 
  publisher.innerHTML=`PUBLISHER NAME : ${res1.publisher}`;
  console.log(res1.released); 
  released.innerHTML=`RELEASED DATE : ${res1.released}`;
  console.log(res3.name); 
  characters.innerHTML=`CHARACTERS NAME : ${res3.name}`;
  }
  catch (error) {
    console.log(error);
  }
  }
  // else{
  //   console.log("error");
  //   abc.innerHTML=<div>please enter the correct number</div>;
  // }
