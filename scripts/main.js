// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/images.png") {
    myImage.setAttribute("src", "images/images2.jpeg");
  } else {
    myImage.setAttribute("src", "images/images.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// Initialization code.
// V1.
// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `My test page, ${myName}`;
//   }
  
//   if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `My test page, ${storedName}`;
//   }
// V2.
// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     if (!myName) {
//       setUserName();
//     } else {
//       localStorage.setItem("name", myName);
//       myHeading.textContent = `Mozilla is cool, ${myName}`;
//     }
// }
// V3. Broken: if cancel or empty string it pops up again correctly,
// but when a nonempty input is entered, it still shows empty or null.
// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     localStorage.setItem("name", myName);
//     if (!myName) {
//         setUserName();
//     }
//     myHeading.textContent = `My test page, ${myName}`;
//   }
  
//   if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `My test page, ${storedName}`;
//   }
// V4.
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    if (!myName) {
        setUserName();
    }
    myHeading.textContent = `My test page, ${localStorage.getItem("name")}`;
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `My test page, ${storedName}`;
  }
  
myButton.addEventListener("click", () => {
    setUserName();
});


  