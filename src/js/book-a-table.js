const reservstionBtn = document.querySelector("#reservstion-btn");
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const dateInput = document.querySelector("#date-input");
const guestInput = document.querySelector("#guest-input");
const specialRequestsInput = document.querySelector("#special-requests-input");
const requiredInputs = document.querySelectorAll(".required-input");

const checkInputs = () => {
  let unfilledInputsCount = 0;

  requiredInputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("border-red-600/80");
      unfilledInputsCount++;
    } else {
      input.classList.remove("border-red-600/80");
    }
  });

  if (unfilledInputsCount > 0) {
    return false;
  } else return true;
};

reservstionBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const areIputsFlled = checkInputs();

  if (areIputsFlled) {
  } else {
  }
});
