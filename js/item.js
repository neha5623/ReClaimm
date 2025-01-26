var url_string = window.location.href;
var addressUrl = new URL(url_string);
var cardno = parseInt(addressUrl.searchParams.get("cardno"));
console.log("Cardno:", cardno);



const API_KEY = 'AIzaSyBPsZJstA4soxiFjDSwtblKJOvObCgEkmg';
const clientId = '183058898586-ld3n87r7erfmj104c1a41c4ng625hsjv.apps.googleusercontent.com'
const SHEET_ID = '1Ccq3GMQp1i3rrO4di5CnsklPqqq0T7FCl4mZta2Pjuk';
const RANGE = 'Item List';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

var itemslist = [];

fetch(url)
   .then(response => response.json())
   .then(data => {

      itemslist = data.values;
      console.log("sheetData = ", itemslist);
      
      console.log("Cardno:", cardno);


      var image = itemslist[cardno][6];
      var  itemname= itemslist[cardno][1];
      var foundlocation = itemslist[cardno][2];
      var features = itemslist[cardno][4];
      var date = itemslist[cardno][3];
      var contactnumber = itemslist[cardno][5];
      

      console.log("Name:", itemname);

      if (typeof image === 'undefined'){
         image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaPyeDyTpc2U7lR96etWzLQU5s77awUPs1Zt17g8LwWLs9vzTmIxlgYHLdpDYRK9Mxj8&amp;usqp=CAU";
        }else{
         var params = new URLSearchParams(new URL(image).search);
         var id = params.get("id"); 
          image = `https://lh3.googleusercontent.com/d/${id}=w1024?authuser=0`;
          
        }     
        $("#item-name").html(`<p id ="item-name">ITEM NAME :${itemname}</p>`);
       
        $("#item-location").html( `<p id ="item-location">FOUND LOCATION :${foundlocation}</p>`);
        $("#item-date").html(`<p id ="item-date">DATE :${date}</p>`);
        
        $("#contact-number").html(`<p id = "contact-number">CONTACT NUMBER :${contactnumber}</p>`);
        $("#item-features").html( `<p id = "item-features">FEATURES :${features}</p>`) ;
        $("#item-img").attr("src",image);
  }
      
    
   )
   .catch(error => console.error('Error fetching data:', error));
   $(document).ready(function () {
   $(".claim-button").on('click',function(){
      alert("Claimed");
      console.log("hey");
   })
   
});
  

  
