let currentScene = "start";

const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");

function renderScene() {
  const scene = story[currentScene];

  storyText.textContent = scene.text;
  choicesDiv.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      currentScene = choice.next;
      renderScene();
    };
    choicesDiv.appendChild(btn);
  });
}

// start game
renderScene();
