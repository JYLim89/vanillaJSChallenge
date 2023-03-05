const loginInput = document.querySelector('.loginInput');

function loginSubmit() {
    const userName = loginInput.value;
    alert(`Welcome!! ${userName}!!`);
}


// function greeting() {
//     let urlParams = new URL(location.href).searchParams;
//     let name = urlParams.get('name');
//     const greetingUser = document.querySelector('#greetingUser')
//     greetingUser.innerText = `Hi!! ${name}`;
// }

// window.addEventListener("load", greeting)