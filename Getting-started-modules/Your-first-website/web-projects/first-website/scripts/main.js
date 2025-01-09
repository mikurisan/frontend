const myImage = document.querySelector('img');

const src1 = 'https://cdn-icons-png.flaticon.com/256/5968/5968863.png';
const src2 = 'https://cdn.pixabay.com/photo/2013/01/29/22/07/google-76659_1280.png'

myImage.addEventListener('click', () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === src1) {
        myImage.setAttribute('src', src2)
    } else {
        myImage.setAttribute('src', src1)
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Hear me now, ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Hear me now, ${storedName}`;
}

myButton.addEventListener('click', () => {
    setUserName();
});