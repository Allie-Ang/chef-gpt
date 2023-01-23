let saveButton = document.querySelector("#save-button");

let titleInput = document.querySelector("#new-suggestion-title");
let contentInput = document.querySelector("#new-suggestion-content");



async function saveSuggestion() {
  let title = titleInput.value;
  let content = contentInput.placeholder;
  if (!title) {
    return;
  }
  console.log(title)
  console.log(content)
  const response = await fetch(`/api/suggestions`, {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resolved = await response.json();
  console.log(resolved);
}

saveButton.addEventListener("click", saveSuggestion);
