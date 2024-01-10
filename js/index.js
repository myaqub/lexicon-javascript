let price =55;

let vat = price*12/100;

let delivery =40;
let  total = price+vat;

let allergy= "free";

let payment="Swish visa and master";

let status= "Not avaiabl" ;

let tracking="not available";



function display_price (){    
    let  price_id = document.getElementById("price"); 
    let  vat_id = document.getElementById("vat"); 
    let  finalprice_id = document.getElementById("finalprice"); 
    let  delivery_id = document.getElementById("delivery"); 
    let  allergy_id = document.getElementById("allergy"); 
    let  totalcost_id = document.getElementById("totalcost"); 

   price_id.textContent= "Price:   "+price;
   vat_id.textContent="VAT 12%:    "+vat;
   finalprice_id.textContent="Final Price:   " +total;
   delivery_id.textContent="Delivery:   50 kr .  not place order yet  ";
   allergy_id.textContent="Allergy:   no allergy";


    
}
