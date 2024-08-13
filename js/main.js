// import sayHay from './sayHay.js';
import notCompleteTitle from './notCompleteTitle.js';
import authenticationFu from './authenticationUser.js';

document.addEventListener("DOMContentLoaded", function () {
    notCompleteTitle()

    const form = document.getElementById('loginForm'); // Define the form element
    form.addEventListener('submit', authenticationFu);
});
