function getvalueRange(){
    var input = document.getElementById('range').value;
    document.getElementById('value').value = input;
}

function generatePassword() {
    var  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=",
        retVal = "";
        var len = document.getElementById('range').value;
    for (var i = 0, n = charset.length; i < len; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('output').value =  retVal;
}


function copy() {
    var copyText = document.querySelector("#output");
    alert("Password Copied")
    copyText.select();
    document.execCommand("copy");
  }
