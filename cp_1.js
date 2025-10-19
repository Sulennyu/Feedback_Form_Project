
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

// Displaytooltips on mouseover and hide using mouseout

form.addEventListener ("mouseover", event => {
  const message = event.target.getAttribute("data-tooltip");
  if (message) {
    tooltip.textContent = message;
    tooltip.style.display = "block";
    tooltip.style.left = (event.clientX) +"px";
    tooltip.style.top = (event.clientY - 9 )+"px";
  }
});

form.addEventListener ("mouseout", event => {
    const message = event.target.getAttribute("data-tooltip");
    if (message) {
    tooltip.style.display = "none";
    }
});


//Prevent Submission of Empty Fields

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const comments = commentsInput.value.trim();

  if (!username || !email || !comments) {
    alert("All fields are required!");
    return;
  }

// Dynamically append valid feedback entries 

const entry = document.createElement("div");
entry.textContent = `${username} (${email}): ${comments}`;
feedbackDisplay.appendChild(entry);

});

// Use event bubbling and delegation to manage events

document.querySelector("#feedback-form").addEventListener("input", (event) => {
  if (event.target.matches("input,textarea")) {
    console.log("Interacting with:", event.target.id);
  }
});

// Prevent form related trigger events

 form.addEventListener ("click" , (event) => {
  event.stopPropagation();
  console.log("stopping triggers")
 });



