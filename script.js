// GFA 1: Charity For Me

// Get Information from HTML
const form = document.getElementById("charity-form");

// Form Declaration of Variables
form.addEventListener("submit", (event) => {
    const firstName = form["first-name"].value;
    const lastName = form["last-name"].value;
    const sex = form["sex"].value;
    const email = form["email"].value;
  
    // Alert Condition (If at least one was not submitted, in the right format.)
    if (!firstName || !lastName || !sex || !email) {
      event.preventDefault();
      alert("Please fill out all required fields.");
    }
  });
