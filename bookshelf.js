var book = function(name,link,image_link)
{
  this.name = name;
  this.link = link;
  this.url = "http://localhost:2000/"+link;
  this.file = link+".txt";
  this.image = image_link;
}

var Life_of_Chopin = new book ("Life of Chopin",Life_of_Chopin, "http://ecx.images-amazon.com/images/I/51-pei3JoUL._SY344_BO1,204,203,200_.jpg");

var books = [Life_of_Chopin];

for (i=0;i<books.length;i++)
{
var tr = document.querySelector("tr");
var td = document.createElement("td");
tr.appendChild(td);
var img = document.createElement("img");
td.appendChild(img);
img.src = books[i].image;
}
