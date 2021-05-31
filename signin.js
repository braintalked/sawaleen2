
$("#signIn").click(function(){
  var email = $("#email").val();
  var password = $("#password").val();

if(email != "" && password !="")
{
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
else
{
  alert("Please fill in all empty fields");
}
});
