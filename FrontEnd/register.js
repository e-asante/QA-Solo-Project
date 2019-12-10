function register(){
    
    let uname = document.getElementById("userName");
    let pword = document.getElementById("password");
    let fgame = document.getElementById("favgame");
    let g1 = document.getElementById("genre1");
    let g2 = document.getElementById("genre2");
    let g3 = document.getElementById("genre3");
    let gtype = document.getElementById("gametype");
    let plat = document.getElementById("platform");

    const deets = {
        username: uname.value,
        password: pword.value,
        favourite_Game: fgame.value,
        genre1: g1.value,
        genre2: g2.value,
        genre3: g3.value,
        platform: plat.value,
        gametype: gtype.value
    };

    fetch('http://localhost:8080/item/new', {
        method: 'POST',
        //body: JSON.stringify({ password: 'sniperg' }),
        
        body: JSON.stringify(deets),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => console.log(response))
        .catch(err => console.log(err));
}
function dipSesh(){
    if(sessionStorage.id == null)
    {
        
        document.getElementById("account").innerHTML = "login";
        document.getElementById("account").href = "./login.html";
        alert("login");
    }
    else{
        
        document.getElementById("account").innerHTML="My Profile";
        document.getElementById("account").href = "./profile.html";
    }
    
}