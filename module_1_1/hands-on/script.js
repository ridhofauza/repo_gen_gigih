console.log("hello world");

function checkVal(event) {
   event.preventDefault();
   const email = document.querySelector("input[name=email]").value;
   const password = document.querySelector("input[name=password]").value;
   const emailErr = document.querySelectorAll(".error-msg")[0];
   const passwordErr = document.querySelectorAll(".error-msg")[1];

   if(email === '') {
      emailErr.innerText = 'E-mail tidak boleh kosong';
   } else if(!email.match(/^\S+@\S+\.\S+$/)) {
      emailErr.innerText = 'E-mail tidak valid';
   } else {
      emailErr.innerText = '';
   }

   if(password === '') {
      passwordErr.innerText = 'Password tidak boleh kosong';
   } else if(password.length < 6) {
      passwordErr.innerText = 'Password minimal 6 karakter';
   } else {
      passwordErr.innerText = '';
   }
}