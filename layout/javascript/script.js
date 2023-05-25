var x = 1;

function passwordToggle() {
  var passwordInput = document.getElementById('password');
  var hidePasswordImg = document.getElementById('hide-password');
  
  if (x === 1) {
    passwordInput.type = 'text';
    hidePasswordImg.src = './assets/icon/Show.png';
    x = 0;
  } else {
    passwordInput.type = 'password';
    hidePasswordImg.src = './assets/icon/Hide.png';
    x = 1;
  }
}