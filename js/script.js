async function sendFormSubmission(form = new HTMLFormElement()) {
  form.querySelector("button").style.opacity = 0.5;
  document.querySelector("*").style.cursor = "progress";
  let inputs = form.querySelectorAll("input");
  let values = {};
  inputs.forEach((input) => {
    values[input.name] = input.value;
  });

  await fetch(form.action, {
    body: JSON.stringify(values),
    method: form.method,
    mode: "no-cors",
  });
  form.querySelector("button").style.opacity = 1;
  document.querySelector("*").style.cursor = "default";
}

document.querySelectorAll("#booking-form, #contact-form").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await sendFormSubmission(event.target);
    alert("Your request has been registered, You will be contacted shortly");
  });
});
