let USER= [];

document.getElementById("SignupForm").addEventListener("submit", function register(event){
    event.preventDefault();
    let Name = document.getElementById("SignupName").value;
    let Email = document.getElementById("SignupEmail").value;
    let Password = document.getElementById("SignupPassword").value;

    let user ={
        Name: Name,
        Email: Email,
        Password: Password,
    }

    USER.push(user);
    document.getElementById("SignupForm").reset()   
}
)