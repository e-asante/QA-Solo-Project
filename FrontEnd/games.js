
//let data;
function dipSesh(){
    if(sessionStorage.id == null)
    {
        alert("login");
        document.getElementById("account").innerHTML = "login";
        document.getElementById("account").href = "./login.html";
    }
    else{
        alert("hello "+sessionStorage.username);
        document.getElementById("account").innerHTML="My Profile";
        document.getElementById("account").href = "./profile.html";
    }
    
}
let recommended = document.getElementById("recommended");

function getRec(){
     
    fetch('http://localhost:8080/item/games', { method: 'GET' })
    .then((response) => response.json())
    .then((json) => printMembers(json))
    .catch(err => console.log(err));
}
 function printMembers(data){
   
    data.forEach(m => {
     let body = document.createElement('div');
     body.className ="card";
     body.style="border: 2px solid black";
     let title = document.createElement('h2');
     let details = document.createElement('p');
    
   
     title.innerText = "Title: "+m.name+"\n";
     body.appendChild(title);
     details.innerText = "Rating: "+m.rating+"    "
                 +"Release Date: "+m.releaseDate+"    "
                 +"Genre: "+m.genre1+"    "
                 +"Genre: "+m.genre2+"\n"
                 +"platform: "+ m.platform+"\n";
                  body.appendChild(details);
    
    
                  let space = document.createElement('div');
                  //space.style = "height:50";
                  
                  //space.style = "  margin: 30px background-color: #ffffff border: 1px solid black opacity: 0.6 filter: alpha(opacity=60)";
     recommended.appendChild(body);
     recommended.appendChild(space);
    
   
 });
}