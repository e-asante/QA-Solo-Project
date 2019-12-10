let recommended = document.getElementById("recommended");
function dipSesh(){
    if(sessionStorage.id == null)
    {
        
        document.getElementById("account").innerHTML = "login";
        document.getElementById("account").href = "./login.html";
    }
    else{
        
        document.getElementById("account").innerHTML="My Profile";
        document.getElementById("account").href = "./profile.html";
        document.getElementById("profileDisplayText").innerText=sessionStorage.username;
    }
    document.getElementById("genre1").value=sessionStorage.genre1;
    document.getElementById("genre2").value=sessionStorage.genre2;
    document.getElementById("genre3").value=sessionStorage.genre3;
    document.getElementById("platform").value=sessionStorage.platform;
    document.getElementById("gametype").value=sessionStorage.gametype;
    
}
function getRec(){
    let g1 = document.getElementById("genre1");
    let g2 = document.getElementById("genre2");
    let g3 = document.getElementById("genre3");
    let gtype = document.getElementById("gametype");
    let plat = document.getElementById("platform");

    const deets = {
        
        UserId: sessionStorage.id,
        genre1: g1.value,
        genre2: g2.value,
        genre3: g3.value,
        platform: plat.value,
        gametype: gtype.value
    }
     
    fetch('http://localhost:8080/item/recommendations', { 
        method: 'POST' ,
        body: JSON.stringify(deets),
        headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json())
    .then((json) => printMembers(json))
    .catch(err => console.log(err));
}
 function printMembers(m){
   
    
     document.getElementById("gameTitleText").innerText = m.name;
     document.getElementById("releaseDate").value = m.releaseDate;
     document.getElementById("rating").value = m.rating;
     document.getElementById("publisher").value = m.publisher;
     switch(m.platform)
     {
        case "PS4":
        {
            document.getElementById("recDetails").style= "background-image: url('ps4.jpg')";
            break;
        }
        case "XBOX ONE":{
            document.getElementById("recDetails").style= "background-image: url('xbox.jpg')";
            break;
        }
        case "SWITCH":{
            document.getElementById("recDetails").style= "background-image: url('switch.png')";
            break;
        }
        case "PC":{
            document.getElementById("recDetails").style= "background-image: url('pc.png')";
            break;
        }
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
getRec();

}