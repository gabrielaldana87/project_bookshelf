var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response)
{
  // var book = function(name,link,image_link)
  // {
  //   this.name = name;
  //   this.link = link;
  //   this.url = "http://localhost:2000/books/"+link;
  //   this.file = link+".txt";
  //   this.image = image_link;
  // }
  //
  // var Life_of_Chopin = new book ("Life of Chopin","Life_of_Chopin", "http://ecx.images-amazon.com/images/I/51-pei3JoUL._SY344_BO1,204,203,200_.jpg");
  //
  // var books = [Life_of_Chopin];

  console.log(request.url);

  if(request.url ==="/" || request.url ==="/favicon.ico" || request.url==="/bookshelf")
    {
      fs.readFile("bookshelf.html",function(err,data)
      {
        var page = data.toString();


        fs.readFile("bookshelf.html",function(err,data)//this will be changed from index.html to bookshelf.html
        {
          var index = data.toString();
          var search = [Life_of_Chopin];
          var Book = function(name,filename, url_name)
          {
            this.name = name;
            this.filename = filename;
            this.url_name = url_name;
            this.createHTML = function(index)
            {
              fs.readFile(filename, function(err,data2)
              {
                var text = data2.toString();
                lines = text.replace(/\n/g, '<br>')
                text = '<p>' + lines + '<p>';
                var bookHTML = index.replace("REPLACEME",text);
                console.log(index);
                response.end(bookHTML);
              })
            }
          }
          var Life_of_Chopin = new Book("Life of Chopin","Life_of_Chopin.txt", "/Life_of_Chopin");
          var search = [Life_of_Chopin];
          response.end(page);
        })

      })
    }

  //if(request.url===books[i].url)
  //  {
  //    books[i].createHTML(index);
  //  }


  if(request.url ==="/index.css")
       {
         fs.readFile(request.url.substring(1,request.url.length),function(err,data)
         {
           var page = data.toString();
           response.end("<html><head></head><body><p>"+page+"</p></body></html>page");
         })
      }
    });
    server.listen(2000);

    function arrayToUrl (array) {

      var str = "";
      var lia = "<li> <a href=";
      var lib = "</li>";
      var a = "<html><body><ul>";
      var b = "</ul></body></html>";

      var url = a + lia + array[0] + ">" + array[1] +  lib + b;

      return url;

    }
