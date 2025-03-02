const completeBtns = document.querySelectorAll('.completeBtn');
completeBtns.forEach(function (completeBtn) {
    completeBtn.addEventListener("click", function () {
        completeBtn.disabled = true;
        completeBtn.style.backgroundColor = "#d3d3d3";
        alert("Board Updated Successfully !!");
        // console.log("Button clicked!");
        const history = document.getElementById("history");
        const pTag = document.createElement("p");
        const time = new Date();
        const currentTime = time.toLocaleTimeString();
        // const card = completeBtn.closest(".card ");
        // const cardTitle = card.querySelector (".card-title").innerText;
        pTag.innerText = `You have Complete The Task  ${currentTime}`;
        pTag.style.backgroundColor = "#d3d3d3";
        pTag.style.padding = "5px";
        pTag.style.borderRadius = "5px";
        history.appendChild(pTag);
        const task = document.getElementById("task");
        const taskNumber = Number(task.innerHTML);
        const newTask = taskNumber - 1;
        task.innerText = newTask;

        const completeTask = document.getElementById("completeTask");
        const completeTaskNumber = Number(completeTask.innerHTML);
        const newCompleteTask = completeTaskNumber + 1;
        completeTask.innerText = newCompleteTask;
    });
})
const lastButton = document.getElementById("last-button");
lastButton.addEventListener('click', function () {
    alert("Congrates!!! You have completed all the current task");
});


const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function () {
    const history = document.getElementById("history");
    history.innerHTML = "";
})

const calander = document.getElementById("calander");
const date = new Date();
const currentDate = date.toDateString();
const pTag = document.createElement("p");
pTag.innerText = `${currentDate}`;
calander.appendChild(pTag);

const button = document.getElementById('btn-id')
button.addEventListener('click', function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
})
function disableButton() {
    document.querySelectorAll('.completeBtn').forEach(button => {
        button.disabled = true;
    });
}
