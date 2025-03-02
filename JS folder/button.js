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
        

        let taskTitle = cardContainer.querySelector('.task-title').textContent;


        let currentTime = new Date().toLocaleTimeString();
        let activityDiv = document.createElement('div');
        activityDiv.className = "bg-slate-300 w-80 h-auto mx-auto rounded-lg p-4 space-y-2 mb-4";
        activityDiv.textContent = `You have completed "${taskTitle}" at ${currentTime}`;

        // Append it to the activity log container
        activityLogContainer.appendChild(activityDiv);



        let allDisabled = true;
        buttons.forEach(function(button) {
            if (!button.disabled) {
                allDisabled = false;
            }
        });

        if (allDisabled) {
            alert("Congrats, you've completed all tasks!");
        }

    });
}

let clearHistoryButton = document.getElementById('clear-history-btn');

if (clearHistoryButton) {
    clearHistoryButton.addEventListener('click', function () {
      
        let activityLogContainer = document.getElementById('msg-container');
        activityLogContainer.innerHTML = '';
    });
}