let main =  document.getElementById("main");
/*  button 1  */
let button1 = document.createElement("button");
button1.setAttribute("id" ,"btn-1")
button1.innerText ="Button-1";
main.appendChild(button1);
/*  button 2  */
let button2 = document.createElement("button");
button2.setAttribute("id" ,"btn-2")
button2.innerText ="Button-2";
main.appendChild(button2);
/*  unOrdered list  */
let UnOrderList = document.createElement("ul");
UnOrderList.setAttribute("id" ,"ul-list")
main.appendChild(UnOrderList);
/* list item */
let listItem = document.createElement("li");
listItem.setAttribute("id" ,"list-item");
UnOrderList.appendChild(listItem);
/* img tag*/
let imageTag = document.createElement("img");
imageTag.setAttribute("id" ,"img-tag");
listItem.appendChild(imageTag);



fetch("https://dog.ceo/api/breeds/image/random")
  .then(function (response) {
    //console.log(response);
    return response.json();
  })
  
  .then(function (data) {
    // Write the code to display the greeting text here

   let imageStatus = data.status
   let statusH3 = document.createElement("h3");
   listItem.appendChild(statusH3)
   statusH3.innerText = imageStatus;
   let dogImgSrc = data.message
   imageTag.setAttribute("src", dogImgSrc );

  });
  
