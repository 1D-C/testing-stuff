const story = {
  start: {
    text: "You wake up in a dark room. What do you do?",
    choices: [
      { text: "Look around", next: "look" },
      { text: "Go back to sleep", next: "sleep" }
    ]
  },

  look: {
    text: "You find a door and a flashlight.",
    choices: [
      { text: "Open the door", next: "door" },
      { text: "Take flashlight", next: "flashlight" }
    ]
  },

  sleep: {
    text: "You fall asleep forever... game over.",
    choices: []
  },

  door: {
    text: "You escape into freedom. You win!",
    choices: []
  },

  flashlight: {
    text: "The flashlight reveals hidden writing on the wall.",
    choices: [
      { text: "Continue reading", next: "door" }
    ]
  }
};
