

function callModal(){
    $("#createFairStepOne").modal('show');
}

function callBulkUploadModal(){
    document.querySelector(".product-upload-modal").style.display = 'block';
    document.querySelector(".upload-row-body").style.display = 'block';
    document.querySelector(".bulk-product-upload-container-body").style.display = 'block';
}

function callSingleUploadModal(){
    document.querySelector(".product-upload-modal").style.display = 'block';
    document.querySelector(".upload-row-body").style.display = 'block';
    document.querySelector(".single-product-upload-container-body").style.display = 'block';
}



function closeAll(){
    document.querySelector(".product-upload-modal").style.display = 'none';
   // document.querySelector(".upload-row-body").style.display = 'none';
    document.querySelector(".upload-row-body").style.display = 'none';
    document.querySelector(".bulk-product-upload-container-body").style.display = 'none';
    document.querySelector(".single-product-upload-container-body").style.display = 'none';
}


/*
    
$(".owl-carousel").owlCarousel({
    autoPlay: 3000,
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    pagination: false
});



$(".owl-carousel2").owlCarousel({
    autoPlay: 3000,
    items: 2,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    pagination: false,
    itemsMobile: [479,2]
});

*/


$(document).ready(() => {
    
    $('.scroll-event-side-bar').slimScroll({
		height: '490px'
	});


    $("#visitors-btn").click(() => {
        $("#visitors-btn").removeClass("btn-outline-secondary");
        $("#visitors-btn").addClass("bg-secondary text-white");
        $("#shop-btn").removeClass("bg-secondary text-white");
        $("#shop-btn").addClass("btn-outline-secondary");  

        window.location = "index.html";
      
    });


    $("#shop-btn").click(() => {
        $("#visitors-btn").removeClass("bg-secondary text-white"); 
        $("#visitors-btn").addClass("btn-outline-secondary");
        $("#shop-btn").removeClass("btn-outline-secondary");
        $("#shop-btn").addClass("bg-secondary text-white");
        window.location = "vendor-shop.html";
    });


    $("#category-toggle").click(() => {
        $(".cat_menu"). slideToggle();
    });
   
   
    $("#cart").click(() => {
        window.location = "cart.html";
    });
    
    $("#home").click(() => {
        window.location = "index.html";
    });

    $("#profile").click(() => {
        window.location = "profile.html";
    });

    $("#story").click(() => {
        window.location = "story.html";
    });

    $("#event").click(function() {
        window.location.assign("./event.html");
    });

    $("#shop-btn").click(() => {
        window.location.assign("./shop.html");
    });

    $("#visitor-btn").click(() => {
        window.location = "visitors.html";
    });

    $("#live-btn").click(() => {
        window.location = "index.html";
    });

    

    
    

    $("#close-sign-up-btn-trigger").click(() => {
        $("#close-sign-up-btn-target").click();
        $("#call-sign-in-modal").click();
    });

    $("#close-sign-in-btn-trigger").click(() => {
        $("#close-sign-in-btn-target").click();
        $("#call-sign-up-modal").click();
    });

    $("#login-btn-call").click(() => {
        $("#close-sign-up-btn-target").click();
        $("#call-sign-in-modal").click();
    })

    $("#slide-left").click(() => {
        $("#goLeft").click();
    });

    $("#slide-right").click(() => {
        $("#goRight").click();
    });

    $("#callForgotPasswordModal").click(() => {
       // $("#close-sign-up-btn-target").click();
        $("#close-sign-in-btn-target").click();
        $("#call-forgot-password-modal").click();
    });

    $("#close-sign-up2-btn-trigger").click(() => {
        $("#close-forgot-password-btn-target").click();
        $("#call-sign-up-modal").click();
    });

    ///////////modal switch///////////

    

    $("#openStepOneModal").click(() => {
        $("#createFairStepOne").modal('show');
        $("#sub-step-one").removeClass("d-none");
        $("#sub-step-two").addClass("d-none");
        $("#sub-step-three").addClass("d-none");
        $("#sub-step-four").addClass("d-none");
    });

    $("#closeModal").click(() => {
        $("#createFairStepOne").modal('hide');
        $("#sub-step-one").addClass("d-none");
        $("#sub-step-two").addClass("d-none");
        $("#sub-step-three").addClass("d-none");
        $("#sub-step-four").addClass("d-none");
    });

    $("#goBackToStepOne").click(() => {
        $("#stepOneLink").click();
        $("#sub-step-one").removeClass("d-none");
        $("#sub-step-two").addClass("d-none");
        $("#sub-step-three").addClass("d-none");
        $("#sub-step-four").addClass("d-none");
    });

    
    $("#goToStepTwo").click(() => {
        $("#stepTwoLink").click();
        $("#sub-step-one").addClass("d-none");
        $("#sub-step-three").addClass("d-none");
        $("#sub-step-four").addClass("d-none");
        $("#sub-step-two").removeClass("d-none");
    });


    $("#goToStepThree").click(() => {
        $("#stepThreeLink").click();
        $("#sub-step-one").addClass("d-none");
        $("#sub-step-two").addClass("d-none");
        $("#sub-step-three").removeClass("d-none");
        $("#sub-step-four").addClass("d-none");
    });

    $("#goToStepFour").click(() => {
        $("#stepFourLink").click();
        $("#sub-step-one").addClass("d-none");
        $("#sub-step-two").addClass("d-none");
        $("#sub-step-three").addClass("d-none");
        $("#sub-step-four").removeClass("d-none");
    });

    $("#goBackToStepTwo").click(() => {
        $("#stepTwoLink").click();
        $("#sub-step-one").addClass("d-none");
        $("#sub-step-three").addClass("d-none");
        $("#sub-step-four").addClass("d-none");
        $("#sub-step-two").removeClass("d-none");
    });

    $("#goBackToStepThree").click(() => {
        $("#stepThreeLink").click();
        $("#sub-step-one").addClass("d-none");
        $("#sub-step-two").addClass("d-none");
        $("#sub-step-three").removeClass("d-none");
        $("#sub-step-four").addClass("d-none");
    });


    $("#stepOneLink").click(() => {
        $("#sub-step-one").removeClass("d-none");
        $("#sub-step-two").addClass("d-none");
        $("#sub-step-three").addClass("d-none");
        $("#sub-step-four").addClass("d-none");
    });

    $("#stepTwoLink").click(() => {
        $("#sub-step-one").addClass("d-none");
        $("#sub-step-three").addClass("d-none");
        $("#sub-step-four").addClass("d-none");
        $("#sub-step-two").removeClass("d-none");
    });

    $("#stepThreeLink").click(() => {
        $("#sub-step-one").addClass("d-none");
        $("#sub-step-two").addClass("d-none");
        $("#sub-step-three").removeClass("d-none");
        $("#sub-step-four").addClass("d-none");
    });

    $("#stepFourLink").click(() => {
        $("#sub-step-one").addClass("d-none");
        $("#sub-step-two").addClass("d-none");
        $("#sub-step-three").addClass("d-none");
        $("#sub-step-four").removeClass("d-none");
    });

    

        

    $("#shop-vendor-trigger").click(() => {
        $("#shop-ven-con").slideToggle();

        if($("#vendor-icon-toggle-shop").attr("class") == "fa fa-angle-up shop-vendor-icon"){
            $("#vendor-icon-toggle-shop").attr("class", "fa fa-angle-down shop-vendor-icon");
        }else{
            $("#vendor-icon-toggle-shop").attr("class", "fa fa-angle-up shop-vendor-icon");
        }
    });


    $("#fair-vendor-text-trigger").click(() => {
        $("#fair-vendor-text-target").slideToggle();
        if($("#vendor-icon-toggle-fair").attr("class") == "fa fa-angle-up shop-vendor-icon"){
            $("#vendor-icon-toggle-fair").attr("class", "fa fa-angle-down shop-vendor-icon");
        }else{
            $("#vendor-icon-toggle-fair").attr("class", "fa fa-angle-up shop-vendor-icon");
        }
    });


})

function callSignUpFromForgotPass(){
    $("#close-forgot-password-btn-target").click();
    $("#call-sign-up-modal").click();
}


function callForgotPasswordModal(){
    $("#close-sign-in-btn-target").click();
    $("#call-forgot-password-modal").click();
}

function callSignUpModalFromSignIn(){
    $("#close-sign-in-btn-target").click();
    $("#call-sign-up-modal").click();
}


function callSignInModal(){
    $("#call-sign-in-modal").click();
}


function callSignUpModal(){
    $("#call-sign-up-modal").click();
}

function callSignInModalFromSignUp(){
    $("#close-sign-up-btn-target").click();
    $("#call-sign-in-modal").click();
}


var totalSib = document.getElementsByClassName('sib');
var i = 0;

setInterval(() => {  

    var textin = totalSib[i].innerHTML;
    totalSib[i].remove();   
    ///totalSib[i].slideUp();
    
    totalSib[i].style.color = "orange";
    var myBody = document.getElementById("body-text");
    var createText = document.createElement('h4');

    var att = document.createAttribute("class");       
    att.value = "sib";                           
    createText.setAttributeNode(att);

var textnode = document.createTextNode(textin);
        createText.appendChild(textnode);
        myBody.appendChild(createText);  

}, 2000);




var totalSib2 = document.getElementsByClassName('sib2');
var t = 0;
var cPlus2 = setInterval(() => {  
var textin2 = totalSib2[t].innerHTML;

 totalSib2[t].remove();   
   console.log(t);

totalSib2[t].style.color = "orange";
var myBody2 = document.getElementById("body-text2");
var createText2 = document.createElement('h5');
var att2 = document.createAttribute("class");       
        att2.value = "sib2";                           
        createText2.setAttributeNode(att2);
var textnode2 = document.createTextNode(textin2);
        createText2.appendChild(textnode2);
        myBody2.appendChild(createText2);  

}, 2000);






/*================= select box script============*/


var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);







   

