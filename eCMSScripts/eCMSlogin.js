function login_01() {
    //  alert("login-eCMS");
    window.location.assign("http://s104e7fd.dragados-usa.local:30000/ecms/login.faces")
}

function login_02() {
    //  alert("login-eCMS");
    document.getElementById("username").value = "jbravof";
}

function login_03() {
    alert("login-eCMS");
    document.getElementById("password").addEventListener("change", function() {

        document.getElementById("login").click();

    });

}
login_03();