
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

