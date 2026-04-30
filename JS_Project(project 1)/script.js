function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.innerText = taskText;

  // Mark complete on click
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}