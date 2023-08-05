const validUsernamePasswords = [
  {
    username: "sadia",
    password: "password1",
  },
  {
    username: "fatima",
    password: "password2",
  },
];

// html codes

const loginForm = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const passwordTag = document.getElementById("error");

// Clears the error when data in inputs are changed

usernameField.onfocus = clearError;
passwordField.onfocus = clearError;

// This will prevent the user to come to login page from resume list page

window.history.forward();
function noBack() {
  window.history.forward();
}

// Clears the error

function clearError() {
  passwordTag.innerText = "";
}

// calls onLoginClick when submit on the login page is clicked

loginForm.onsubmit = function (event) {
  onLoginClick(event);
};

// validates the info entered by user
// redirect the user to resume list page or shows the error based on entered data

function onLoginClick(event) {
  event.preventDefault();
  const username = usernameField.value;
  const password = passwordField.value;
  const currentUser = validUsernamePasswords.find((userData) => {
    return userData.username === username;
  });
  if (!currentUser) {
    passwordTag.innerText = "Invalid Userame/Password";
  } else if (currentUser.password === password) {
    
    // Save Credentials In Local Storage

    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
    
    // Navigate to Resume Page
    
    window.location.href = "./resume_page.html";
  } 
  else 
  {
    passwordTag.innerText = "Invalid Credentials";
  }
}
