function validate() {
    var msg;
    var str = document.getElementById("mdp").value;

    if (str.length >= 8) {
        msg = "<p style='color:green'>Mot de passe fort.</p>";
    } else {
        msg = "<p style='color:red'>Mot de passe faible.</p>";
    }

    document.getElementById("msg").innerHTML = msg;
}

