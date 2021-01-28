$("#regist").click(function () {

    var email = $("#email").val()
    var password = $('#password').val()
    var confirmPasword = $('#confirm-password').val()
    if (confirmPas(password, confirmPasword)){
        createUser(email,password)
    }

});

function confirmPas(pass, conpas){
    if(pass == conpas){
        return true
    }else{
        alert("Password didn't match!")
        return false
    }
}

function createUser(email,password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            alert("Succes Register")
            location.href = "/public/index.html"
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        alert("Logout Success")
    }).catch((error) => {
        alert(error.message)
    });
}

$("#logout").click(function () {
    logout()
});

$("#login").click(function () {
    // alert('lgoin')
    var email = $("#email").val()
    var password = $('#password').val()

    login(email,password)
});

function login(email,pass) {
    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((user) => {
            // alert("Succes Login")
            location.href = "index.html"
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            alert(errorMessage)
        });
}

$(document).ready(function () {
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        $("#nick").text(user.email)
        $("#nickEmail").text(user.email)

        $(".hideIfLogin").hide();
        $(".hideIfLogout").show();

    } else {
        console.log('no user login')
        $(".hideIfLogin").show();
        $(".hideIfLogout").hide();

    }
});