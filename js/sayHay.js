export default function sayHay(WelcomeName) {
    let welcomeNameSpan = document.querySelector('.welcomeName')
    if (welcomeNameSpan) welcomeNameSpan.innerHTML = WelcomeName
}