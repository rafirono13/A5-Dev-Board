let buttons = document.querySelectorAll('.disable-button');
let taskDecrementElement = document.getElementById('task-decrement');
let taskIncrementElement = document.getElementById('task-increment');
let activityLogContainer = document.getElementById('msg-container');

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        alert("button updated Successfully")
        this.disabled = true;

        let currentIncrementCount = parseInt(taskIncrementElement.textContent);
        let currentDecrementCount = parseInt(taskDecrementElement.textContent);

        currentIncrementCount++;
        currentDecrementCount--;
        taskIncrementElement.textContent = currentIncrementCount;
        taskDecrementElement.textContent = currentDecrementCount;
        let cardContainer = this.closest('.p-6');
        
        // Get the task title from within that container
        let taskTitle = cardContainer.querySelector('.task-title').textContent.trim();

        // Get the current time
        let currentTime = new Date().toLocaleTimeString();

        // Create the new activity log div
        let activityDiv = document.createElement('div');
        activityDiv.className = "bg-slate-300 w-80 h-auto mx-auto rounded-lg p-4 space-y-2 mb-4";
        activityDiv.textContent = `You have completed "${taskTitle}" at ${currentTime}`;

        // Append it to the activity log container
        activityLogContainer.appendChild(activityDiv);


    });
}


// buttons.forEach(function (button) {
//     button.addEventListener('click', function(){
//         this.disabled = true;
//     })
// })