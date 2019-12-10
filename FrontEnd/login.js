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
function login(){

    let uname = document.getElementById("userName");
    let pword = document.getElementById("password");

    const deets = {
        username: uname.value,
        password: pword.value,
    }
    console.log(deets);

    fetch('http://localhost:8080/item/login', {
        method: 'POST',
        //body: JSON.stringify({ password: 'sniperg' }),
        
        body: JSON.stringify(deets),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
        .then((response) => saveSession(response))
        .catch(err => console.log(err));
        

        
}
function saveSession(data){
    if(data != null)
    {
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.username) {
              sessionStorage.username = data.username;
              sessionStorage.id = data.id;
              window.location.href ='./profile.html';
            } else {
              sessionStorage.username = String("guest");
              sessionStorage.id = 0;
            }
        }
    }
    else{
        alert("Login Failed");
    }
    
    console.log(sessionStorage.id+" "+sessionStorage.username);
}