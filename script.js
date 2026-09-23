const jokeElement = document.getElementById("joke");
const newJokeButton = document.getElementById("new-joke");
const copyButton = document.getElementById("copy-joke");
const statusElement = document.getElementById("status");

const API_URL = "https://v2.jokeapi.dev/joke/Any?safe-mode";
let currentJoke = "";

function setStatus(message = "") {
  statusElement.textContent = message;
}

function renderJoke(data) {
  if (data.type === "single") {
    currentJoke = data.joke;
    jokeElement.innerHTML = `<p>${escapeHtml(data.joke)}</p>`;
    return;
  }

  currentJoke = `${data.setup}\n\n${data.delivery}`;
  jokeElement.innerHTML = `
    <div>
      <p class="setup">${escapeHtml(data.setup)}</p>
      <p class="delivery">${escapeHtml(data.delivery)}</p>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function getRandomJoke() {
  newJokeButton.disabled = true;
  copyButton.disabled = true;
  setStatus("Loading a fresh joke...");
  jokeElement.innerHTML = '<p class="loading">Finding something funny...</p>';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("The joke service is unavailable.");

    const data = await response.json();
    if (data.error) throw new Error("The API could not return a joke.");

    renderJoke(data);
    copyButton.disabled = false;
    setStatus("Here is your joke!");
  } catch (error) {
    jokeElement.innerHTML = '<p class="loading">Could not load a joke. Please try again.</p>';
    setStatus(error.message);
  } finally {
    newJokeButton.disabled = false;
  }
}

async function copyJoke() {
  if (!currentJoke) return;

  try {
    await navigator.clipboard.writeText(currentJoke);
    setStatus("Joke copied to clipboard!");
  } catch {
    setStatus("Copy failed. Please select the joke manually.");
  }
}

newJokeButton.addEventListener("click", getRandomJoke);
copyButton.addEventListener("click", copyJoke);
getRandomJoke();
