const cardData = [
  {
    image:
      "https://i.pinimg.com/736x/f5/11/bd/f511bd2092201c6851dd9b543f0f4b48.jpg",
    correctAnswer: "Fireman",
    complement: " Its meaning in spanish is bombero",
    options: ["Doctor", "Nurse", "Teacher", "Fireman"],
  },
  {
    image:
      "https://i.pinimg.com/736x/97/cb/c4/97cbc4aad0a029bb24e92de46ca79f7b.jpg",
    correctAnswer: "Park",
    complement: " Its meaning in spanish is Parque",
    options: ["Park", "Bank", "School", "University"],
  },
  {
    image:
      "https://i.pinimg.com/736x/4e/b7/78/4eb7781ccfc2ae6386c8097e8de87562.jpg",
    correctAnswer: "Ugly",
    complement: " Its meaning in spanish is Feo/a",
    options: ["Ugly", "Crazy", "Happy", "Sad"],
  },
  {
    image:
      "https://i.pinimg.com/736x/15/78/da/1578dafd521dcacb8cd3c6a82811de3b.jpg",
    correctAnswer: "Bone",
    complement: " Its meaning in spanish is Huesos",
    options: ["Hand", "Bone", "Nose", "Leg"],
  },
  {
    image:
      "https://i.pinimg.com/736x/d2/93/9d/d2939d2abdec9e54eece670d90760a46.jpg",
    correctAnswer: "American Football",
    complement: " Its meaning in spanish is Fútbol Americano",
    options: ["Soccer", "American Football", "Baseball", "Hockey"],
  },
  {
    image:
      "https://i.pinimg.com/736x/7f/bf/c5/7fbfc54b2dd2061a2f2523b1e8860387.jpg",
    correctAnswer: "Cook",
    complement: " Its meaning in spanish is Cocinar",
    options: ["Go", "Cook", "Walk", "Drive"],
  },
  {
    image:
      "https://i.pinimg.com/736x/02/ef/b8/02efb8b22d1563a466be81bdb3514cfa.jpg",
    correctAnswer: "Lonely",
    complement: " Its meaning in spanish is Solitario/a",
    options: ["Happy", "Honey", "Lonely", "Beautiful"],
  },
  {
    image:
      "https://i.pinimg.com/736x/a3/a3/81/a3a38155e33559f47939b2a7eee5b485.jpg",
    correctAnswer: "Hand",
    complement: " Its meaning in spanish is Mano",
    options: ["Hand", "Bone", "Nose", "Leg"],
  },
  {
    image:
      "https://i.pinimg.com/736x/51/a6/54/51a654efd6b0976a4ca89396b8456bce.jpg",
    correctAnswer: "University",
    complement: " Its meaning in spanish is Universidad",
    options: ["House", "Police Station", "Prision", "University"],
  },
  {
    image:
      "https://i.pinimg.com/736x/35/97/7e/35977eb075496fbacc49f629cc42e11d.jpg",
    correctAnswer: "Nurse",
    complement: " Its meaning in spanish is Enfermera",
    options: ["Doctor", "Nurse", "Teacher", "Fireman"],
  },
];

let currentCardIndex = 0;
let score = 0;
let corrects = 0;
let incorrects = 0;

const imageElement = document.getElementById("card-image");
const optionsContainer = document.getElementById("options-container");

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
    Swal.fire({
      title: "Correct Answer! 😊",
      text: `${correctAnswer} ${card.complement}`,
      icon: "success",
      confirmButtonText: "Cerrar",
    });
    score += 10;
    corrects++;
  } else {
    Swal.fire({
      title: "Incorrect! 😭",
      text: `The correct answer is: ${correctAnswer}`,
      icon: "error",
      confirmButtonText: "Cerrar",
    });
    incorrects++;
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
  // Restablece los valores antes de mostrar la alerta
  const finalCorrects = corrects;
  const finalIncorrects = incorrects;
  const finalScore = score;

  corrects = 0;
  incorrects = 0;
  score = 0;
  currentCardIndex = 0;

  Swal.fire({
    title: "Game over! 🦾",
    html: `<p>Your final score is: <strong>${finalScore}</strong></p>
           <p>The total number of correct answers is <strong>${finalCorrects}</strong></p>
           <p>The total number of incorrect answers is <strong>${finalIncorrects}</strong></p>`,
    icon: "info",
    confirmButtonText: "Cerrar",
  }).then(() => {
    loadCard(currentCardIndex);
  });
}

loadCard(currentCardIndex);
