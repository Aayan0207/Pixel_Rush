document.addEventListener("DOMContentLoaded", function () {
  function random_quote() {
    quotes = [
      "Have you tried clawing at it?",
      "Try unplugging it and the neighbor's fridge.",
      "Maybe the system needs therapy",
      "How about we let it stir for a while",
      "Listen to a cat DJ",
      "Come back on the next lunar eclipse",
      "This is beyond our expertise..lemme take a nap",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  function random_expert() {
    quotes = [
      "Sir Pussyboots",
      "Pouncealot III",
      "Furball",
      "Whiskerton",
      "Nya-chan",
      "Meowistic",
      "Purrfectionista",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  const home_button = document.querySelector("#home_button");
  const support_button = document.querySelector("#support_button");
  const contact_button = document.querySelector("#contact_button");
  const home = document.querySelector("#home");
  const support = document.querySelector("#support");
  const contact = document.querySelector("#contact");
  const support_form = document.querySelector("#support_form");
  const answer = document.querySelector("#answer");
  const expert_name = document.querySelector("#expert_name");
  const expert_advice = document.querySelector("#expert_advice");
  const expert = document.querySelector("#expert");
  home_button.onclick = () => {
    home.style.display = "block";
    support.style.display = "none";
    contact.style.display = "none";
  };
  support_button.onclick = () => {
    home.style.display = "none";
    support.style.display = "block";
    contact.style.display = "none";
  };
  contact_button.onclick = () => {
    home.style.display = "none";
    support.style.display = "none";
    contact.style.display = "block";
  };
  support_form.onsubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      answer.innerHTML = "Our reccomendation:\n" + random_quote();
    }, 100);
  };
  support_form.onreset = () => {
    answer.innerHTML = "";
  };
  expert.onclick = () => {
    setTimeout(() => {
        expert_name.innerHTML = "Expert supporter:" + random_expert();
      expert_advice.innerHTML = "Expert Opinion:\n" + random_quote();
    }, 100);
  }
});
