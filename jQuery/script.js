//! Downloading Jquery

//npm install jquery
//const $ = require('jquery');

//! onload in js vs ready in jquery
// window.onload=function(){};


// $(document).ready(function()
// {    
    //! Example syntax
      //  $("p").hide();
      //  console.log($("p"));

    //! Selectors
   //  $("*").css("color","green");
   //  $("body * ").css("color","red");
    // $(".animate").css("color","blue");
    // $(".animate , .span")
    // $("p").last().css("border", "2px solid blue");
    // $("p:last").css("border", "2px solid blue");
    // $("section:empty")
    // $("p a.anchor-para")
    // $("input[name=username]")
    // $(":radio").css("outline","2px solid blue")
    // $("li:eq(0)").css("color","yellow");
    // $("a","div")
    // $("div a");
    //! Attribute Selector and not()
      // $("img[title^='imag']").css("border","5px solid blue");
      // $("[title][alt]")
      // $("#mySelect option:selected").css("color","red");
     
    //! Custom Misc. Selectors

    // $("p:contains('Third')").css("color","green");
    // $("li:has(a)").css("color","red");
   //  $("li:hidden")
   //  $(":header")
   //  $("ul:first-child")
   //  $("ul:nth-child()")
   //  var Plist=$("p");

   

   //! Other Selectors(:first-child,:last-child,:only-child,siblings)
// console.log($("#example").siblings("h2"))

     


 //! filters(slides) 
    // $('div').filter(function() {
      // console.log(idx,element);
   
        // var width = $(this).width(); 
      //   console.log($(element));
      //   console.log($(this));
      //   console.log(width);
        
    //     return width > 100 && width < 1000;
    // }).css('border', '5px solid orange'); 


   

     //! .attr(), removeattr(), text() , html(),val()
          //* attr() can change source of image
          // console.log($("#example").text());
          // console.log($("#example").html());
          // console.log($("#input-1").val());
          // $("img:first").removeAttr("title");

         
         //  console.log($("img:first").attr("title","test"));
         //  attr({
         //    "":"","":"",
         //  })
         


      
    //  $("img:first").attr({
    //     "title":"image1",
    //     "id":"img"
         
    //  })



    //!Styling method [.addClass(), .removeClass() , .hasClass(), .toggleClass(), .css()]

   //  $("p:first").toggleClass("custom-class");
    //   if ($("select").hasClass("active")) {
    //     console.log("This select has the 'active' class.");
    // } else {
    //     console.log("This select does not have the 'active' class.");
    // }

   //  $("p").css("color","red");
   // css({
   //    "":"",
   // })

   
  
     //! Dimentions



     //! Effects (show,hide,toggle,fade(opacity),slide(height))
          //fadeTo(speed,opacity,callback)
          // $(".effect").click(function(){
          //   $(".box").show(1000,function(){$(this).hide()});
          // })

          // $(".effect").click(function(){
          //   $(".box").fadeIn(1000,function(){$(this).fadeOut(2000)});
          // })

          // $(".effect").click(function(){
          //   $(".box").fadeTo(2000,0.5);
          // })



 

  
 

     //! Method Chaining (more than effect on the same element)
    //  $(".chain-btn").click(function(){
    //     var divChain= $(".chain")   // jquery find element only 1 time 
    //     divChain.slideUp(2000);  
    //     divChain.slideDown(2000); 
    //     divChain.fadeOut(2000);
    //     divChain.fadeIn(2000);
     

        //Chaining comes here
      //   divChain.slideUp(2000).slideDown(2000).fadeOut(2000).fadeIn(2000).css("background","purple").hide(1000).show(1000);
      // })


  
    
//! Each() method

// $("li").each(function(index,element){
//   console.log($(this).text());
//   console.log(index,element);
// })


   
// }
// )





// console.log(button1[0])

let images = [
  "assets/1.jpg",
  "assets/2.jpg",
  "assets/3.jpg",
  "assets/4.jpg",
  "assets/5.jpg",
  "assets/6.jpg",
  "assets/7.jpg",
  "assets/8.jpg",
]
var currentImageIndex = 0;

$("#about").click(function(){
    $("#content")
    .toggle()
    .html(`
      <h5>a story about a snowman</h5>
      `);
})
$("#gallery").click(function(){
  var divContent= $("#content")
  divContent.fadeIn(1000)
  .html(`
     <div class="slideShowContent">
        <button id="prev-button"><img src="left.png" style="width: 50px;"></button>
        <img id="slideshow-image" src="assets/1.jpg" style="width: 300px; height: 300px;">
        <button id="next-button"><img src="right.png" style="width: 50px;"></button>        
        </button>
        </div>
    `);
  
})
$("#content").on("click","#prev-button",function() {
  currentImageIndex--;
  $("#next-button").prop("disabled", false)
  if(currentImageIndex < 0)
  {
    currentImageIndex = images.length - 1
  }
  $("#slideshow-image").fadeOut(1000, function() {
    $(this).attr("src", images[currentImageIndex]).fadeIn(300);
  });
});

$("#content").on("click","#next-button",function() {
  currentImageIndex++;
  $("prev-button").prop("diabled", false)
  if (currentImageIndex >= images.length - 1) {
    currentImageIndex = 0;
  }
  if (currentImageIndex == images.length - 1) {
    $("#next-button").prop("disabled", true)

  }
  $("#slideshow-image").fadeOut(1000, function() {
    $(this).attr("src", images[currentImageIndex]).fadeIn(300);
  });
});
1
// $("#services").click(function(){
//   $("#ServContent")
//   .slideToggle(1000)

// })
const listItems = $("#ServContent ul li"); // Select all list items
listItems.hide();

$("#services").click(function () {
  let index = 0;
  function slideNextItem() {
      if (index < listItems.length) {
          $(listItems[index]).slideToggle(500, function () {
              index++;
              slideNextItem();
          });
      }
  }
  slideNextItem();
});
$("#complain").click(function(){
  $("#content")
  .toggle()
  .html(`
    <div>
      <form class="form">
        <br/>
        <label for="name">Name</label>
        <input id="name" type="text"><br/><br/>
        <label for="email">Email</label>
        <input id="email" type="email"><br/>
        <br/>
        <label for="phone">Phone</label>
        <input id="phone" type="text"><br/>
        <br/>
        <label for="complain">Complain</label><br/>
        <br/>
        <textarea id="complainarea"></textarea>
        <br/>
        <br/>
        <button type="submit" class="send">Send</button>
      </form>
   
    </div>
    `);
})

$("#content").on("submit", ".form", function (event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form data
  const name = $("#name").val();
  const email = $("#email").val();
  const phone = $("#phone").val();
  const complain = $("#complainarea").val();

  // Store the data in a temporary object for re-editing
  $("#content").data("formData", { name, email, phone, complain });

  // Display the data with an Edit button
  const message = `
      Your name is ${name} <br/><br/>
      Your email is ${email} <br/><br/>
      Your phone number is ${phone} <br/><br/>
      Your problem is: ${complain} <br/><br/>
      <button id="back" class="back" style="background-color: white; color: black; width: 100px; padding: 10px;">Edit</button>
  `;
  $("#content").html(message);
});


  $("#content").on("click", ".back", function () {
    // Retrieve the stored data
    const formData = $("#content").data("formData");
    console.log(formData)

    // Re-render the form with the stored data
    $("#content").html(`
        <form class="form">
            <br/>
            <label for="name">Name</label>
            <input id="name" type="text" value="${formData.name}"><br/><br/>
            <label for="email">Email</label>
            <input id="email" type="email" value="${formData.email}"><br/><br/>
            <label for="phone">Phone</label>
            <input id="phone" type="text" value="${formData.phone}"><br/><br/>
            <label for="complain">Complain</label><br/><br/>
            <textarea id="complainarea">${formData.complain}</textarea><br/><br/>
            <button type="submit" class="send">Send</button>
        </form>
    `);
});
