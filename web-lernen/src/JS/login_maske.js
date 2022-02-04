function validate() {
    let username = document.getElementById("login_field").value;
    let password = document.getElementById("password").value;
    if(username === "admin" && password === "1234") {
        alert("Signed in successfully");
    } else {
        alert("Invalid username or password!");
    }
}

