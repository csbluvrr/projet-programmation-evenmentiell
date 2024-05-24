
const users = [
  { username: 'mouna', password: 'mounajaimi' },
  { username: 'jimmimoo', password: '12345678' }
];
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

function showpws() {
    var x = document.getElementById("signinpw1");
    var y = document.getElementById("signinpw2");

    if (x.type === "password") {
      x.type = "text";
      y.type = "text";
    } 
    else {
      x.type = "password";
      y.type = "password";
    }
  }

  function showpwl() {
    var x = document.getElementById("loginpw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function add() {
    var userNameIn1 = document.getElementById('usrnamesign').value;
    var passwordIn1 = document.getElementById('signinpw1').value;
    var passwordIn2 = document.getElementById('signinpw2').value;
    var email = document.getElementById('emsign').value;

    // Réinitialiser les messages d'erreur
    document.getElementById('usrnamesign-error').innerHTML = "";
    document.getElementById('signinpw1-error').innerHTML = "";
    document.getElementById('signinpw2-error').innerHTML = "";
    document.getElementById('emsign-error').innerHTML = "";

    var hasError = false;

    // Vérifier si les mots de passe correspondent
    if (passwordIn1 !== passwordIn2) {
        document.getElementById('signinpw2-error').innerHTML = "Passwords do not match";
        hasError = true;
    }

    // Vérifier la longueur du mot de passe
    if (passwordIn1.length < 8) {
        document.getElementById('signinpw1-error').innerHTML = "Password must contain at least 8 characters";
        hasError = true;
    }

    // Vérifier le format de l'email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emsign-error').innerHTML = "Invalid email format";
        hasError = true;
    }

    if (hasError) {
        return;
    }

    // Ajouter l'utilisateur si toutes les vérifications passent
    var user = {
        username: userNameIn1,
        password: passwordIn1,
        email: email,
    };
    users.push(user);
    document.getElementById('s1').innerHTML = "User added successfully!";
    console.log(users); // Affiche les utilisateurs ajoutés dans la console
}

// Fonction pour la connexion
function login() {
    var userNameIn3 = document.getElementById('usrnamelog').value;
    var passwordIn4 = document.getElementById('loginpw').value;

    // Réinitialiser les messages d'erreur
    document.getElementById('usrnamelog-error').innerHTML = "";
    document.getElementById('loginpw-error').innerHTML = "";

    if (userNameIn3 === '') {
        document.getElementById('usrnamelog-error').innerHTML = "Username must be filled out";
        return false;
    } else if (passwordIn4 === '') {
        document.getElementById('loginpw-error').innerHTML = "Password must be filled out";
        return false;
    }

    var loginSuccessful = false;
    for (var i = 0; i < users.length; i++) {
        if (userNameIn3 === users[i].username && passwordIn4 === users[i].password) {
            loginSuccessful = true;
            break;
        }
    }

    if (loginSuccessful) {
        // Redirection vers une autre page en cas de succès de la connexion
        window.location.href = "home.html";
    } else {
        document.getElementById('s2').innerHTML = "Password and username do not match";
    }
    return false; // Assurez-vous de retourner false pour empêcher la soumission du formulaire
}