let username="ram"
let password="1234"
let iusername="ram"
let ipassword="12345"

if (username == iusername){
  if (password == ipassword){
    console.log("user can login")
  }
  else{
    console.log("Invalid password")
  }
}
else{
    console.log("Incorrect username")
  }