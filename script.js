const cardData = [
  {
    image:
      "https://i.pinimg.com/736x/f5/11/bd/f511bd2092201c6851dd9b543f0f4b48.jpg",
    correctAnswer: "Fireman",
    complement: "Your meaning in spanish is bombero",
    options: ["Doctor", "Nurse", "Teacher", "Fireman"],
  },
  {
    image:
      "https://i.pinimg.com/736x/97/cb/c4/97cbc4aad0a029bb24e92de46ca79f7b.jpg",
    correctAnswer: "Park",
    complement: "Your meaning in spanish is Parque",
    options: ["Park", "Bank", "School", "University"],
  },
  {
    image:
      "https://i.pinimg.com/736x/4e/b7/78/4eb7781ccfc2ae6386c8097e8de87562.jpg",
    correctAnswer: "Ugly",
    complement: "Your meaning in spanish is Feo/a",
    options: ["Ugly", "Crazy", "Happy", "Sad"],
  },
  {
    image:
      "https://i.pinimg.com/736x/15/78/da/1578dafd521dcacb8cd3c6a82811de3b.jpg",
    correctAnswer: "Bone",
    complement: "Your meaning in spanish is Huesos",
    options: ["Hand", "Bone", "Nose", "Leg"],
  },
  {
    image:
      "https://i.pinimg.com/736x/d2/93/9d/d2939d2abdec9e54eece670d90760a46.jpg",
    correctAnswer: "American Football",
    complement: "Your meaning in spanish is Fútbol americano",
    options: ["Soccer", "American Football", "Baseball", "Hockey"],
  },
];

let currentCardIndex = 0;
let score = 0;

const imageElement = document.getElementById("card-image");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");

function loadCard(cardIndex) {
  if (cardIndex >= cardData.length) {
    endGame();
    return;
  }

  const card = cardData[cardIndex];
  imageElement.src = card.image;
  optionsContainer.innerHTML = "";

  card.options.forEach((option) => {
    const button = document.createElement("button");
    button.classList.add("option-button");
    button.textContent = option;
    button.addEventListener("click", () =>
      checkAnswer(option, card.correctAnswer)
    );
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedAnswer, correctAnswer) {
  const card = cardData[currentCardIndex];
  if (selectedAnswer === correctAnswer) {
    alert(`¡Correct! ${correctAnswer} ${card.complement || ""}`);
    score += 10;
  } else {
    alert(`Incorrect. The correct answer is: ${correctAnswer}`);
  }
  nextCard();
}

function nextCard() {
  currentCardIndex++;
  if (currentCardIndex < cardData.length) {
    loadCard(currentCardIndex);
  } else {
    endGame();
  }
}

function endGame() {
  alert(`Game over! Your final score is: ${score}`);
  currentCardIndex = 0;
  score = 0;
  loadCard(currentCardIndex);
}

nextButton.addEventListener("click", nextCard);

loadCard(currentCardIndex);
