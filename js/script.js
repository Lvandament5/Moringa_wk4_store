
document.addEventListener("DOMContentLoaded", function(){
    var MenuItems = document.getElementById("MenuItems");
    MenuItems.style.maxHeight = "0px";

});


function menutoggle(){
    console.log("you toggled")
    if(MenuItems.style.maxHeight=="0px")
    {console.log("0px")
        MenuItems.style.maxHeight="200px";
    }
    else
    {console.log("Not 0px")
        MenuItems.style.maxHeight="0px";
    }
}

<<<<<<< HEAD
function address() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
=======
>>>>>>> Adding media queries and menu toggle
