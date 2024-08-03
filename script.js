// Validate the input field
document.querySelector("#push").onclick = function() {
    if (document.querySelector("#newtask input").value.length === 0) {
        alert("Please Enter a Task!");
    } 
    // Add a new task
    else {
        document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector("#newtask input").value}
            </span>
            <button class="delete">
                <img id="trash" src="./im/trash.png">
            </button>
        </div>
        `;

        // Deleting a task
        let currentTasks = document.querySelectorAll(".delete");
        for (let i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.remove();
            }
        };

        // Crossing off a completed task
        let tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle("completed");
            }
        }

        // Clearing input field after entry
        document.querySelector("#newtask input").value = "";
    }
}