{
   const tasks = [
   ];

   const addNewTask = (newTaskContent) => {
      tasks.push({
         content: newTaskContent,
      });

      render();
      focus();
   };

   const removeTask = (taskIndex) => {
      tasks.splice(taskIndex, 1);
      render();
   };

   const toggleTaskDone = (doneIndex) => {
      tasks[doneIndex].done = !tasks[doneIndex].done;
      render();
   };

   const bindEvents = () => {
      const removeButtons = document.querySelectorAll(".js-remove");

      removeButtons.forEach((removeButton, index) => {
         removeButton.addEventListener("click", () => {
            removeTask(index);
         });
      });

      const toggleDoneButtons = document.querySelectorAll(".js-done");

      toggleDoneButtons.forEach((toggleDoneButton, index) => {
         toggleDoneButton.addEventListener("click", () => {
            toggleTaskDone(index);
         });
      });
   };

   const render = () => {
      let htmlString = "";

      for (const task of tasks) {
         htmlString += `
            <li class="list__item"> 
             <button class="js-done button__check button__check--done">
             ${task.done ? "&#10004;" : ""}
             </button>
             <span class="list__content${task.done ? " list__content--done " : ""}">${task.content}</span>
             <button class="js-remove button__remove">&#128465;</button>
            </li>
         `;
      }

      document.querySelector(".js-tasks").innerHTML = htmlString;

      bindEvents();

   };

   const onFormSubmit = (event) => {
      event.preventDefault();

      const newTaskContent = document.querySelector(".js-newTask").value.trim();

      if (newTaskContent === "") {
         return;
      }

      addNewTask(newTaskContent);

      document.querySelector(".js-newTask").value = "";
   };

   const init = () => {
      render();

      const form = document.querySelector(".js-form");

      form.addEventListener("submit", onFormSubmit);
   };

   init();
}