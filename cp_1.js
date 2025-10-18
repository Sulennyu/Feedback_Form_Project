
// Declaring elements 

const form = document.getElementById("feedback-form");
const usernameInput= document.getElementById("username");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const charCount = document.getElementById("char-count");
const feedbackDisplay = document.getElementById("feedback-display");
const tooltip = document.getElementById("tooltip");

// Character Counting

commentsInput.addEventListener("input", () => {
  charCount.textContent = String(commentsInput.value.length);
});

// Displaying tooltips on mouseover and hiding using mouseout

form.addEventListener ("mouseover", event => {
  const message = event.target.getAttribute("data-tooltip");
  if (message) {
    tooltip.textContent = message;
    tooltip.style.display = "block";
    tooltip.style.left = (event.clientX + 2) +"px";
    tooltip.style.top = (event.clientY - 9 )+"px";
  }
});

form.addEventListener ("mouseout", event => {
    const message = event.target.getAttribute("data-tooltip");
    if (message) {
    tooltip.style.display = "none";
    }
});


//Prevent Submission 

 const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const comments = commentsInput.value.trim();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!username || !email || !comments) {
    alert("All fields are required!");
    return;
  }
});

// Dynamically appending valid feednack entries 

