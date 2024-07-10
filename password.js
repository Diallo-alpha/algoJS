function validate() {
    var msg;
    let error = [];
    var str = document.getElementById("mdp").value;
    if(!Number(str))
    {
        msg = "<p style='color:red'>Mot de passe faible il doit contenir au moins un chiffre.</p>";
        error.push;
    }
    if (str.length >= 8) {
        msg = "<p style='color:green'>Mot de passe fort.</p>";
    } else {
        msg = "<p style='color:red'>Mot de passe faible.</p>";
    }

    document.getElementById("msg").innerHTML = msg;
}