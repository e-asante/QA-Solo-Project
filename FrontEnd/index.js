function dipSesh(){
    if(sessionStorage.id == null)
    {
        
        document.getElementById("account").innerHTML = "login";
        document.getElementById("account").href = "./login.html";
    }
    else{
       
        document.getElementById("account").innerHTML="My Profile";
        document.getElementById("account").href = "./profile.html";
    }
    
}

function saveDetails(){
    let genre1 = document.getElementById("genre1");
    let genre2 = document.getElementById("genre2");
    let genre3 = document.getElementById("genre3");
    let platform = document.getElementById("platform");
    let gametype = document.getElementById("gametype");
    if (typeof(Storage) !== "undefined") {
        
          //sessionStorage.id = 0;
          sessionStorage.genre1 = genre1.value;
          sessionStorage.genre2 = genre2.value;
          sessionStorage.genre3 = genre3.value;
          sessionStorage.platform = platform.value;
          sessionStorage.gametype = gametype.value;
          
        
        //console.log(sessionStorage.genre1);
    }


}