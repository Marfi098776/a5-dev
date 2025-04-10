document.getElementById("Discover").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = 'blog.html'
})


// btn-1
document.getElementById("task-btn1").addEventListener("click", function(event){
    event.preventDefault();
    const task = document.getElementById("assigned").innerText;
    const convertedTask = parseInt(task);

    const abc = convertedTask-1;
    document.getElementById("assigned").innerText = abc;

    const completed = document.getElementById("Completed").innerText;
    const convertedComplete = parseInt(completed);
    const def = convertedComplete + 1;
    document.getElementById("Completed").innerText = def;
    alert("Board Updated Successfully");
    const taskComplete = document.getElementById("fix").innerText;

    
    const container = document.getElementById("history");
    

    const div = document.createElement("div");
    div.innerHTML =  `
    <p class="m-3 p-2 bg-[#F4F7FF] rounded-[8px]">You have complete The task ${taskComplete} at 12:48:12 PM</p>
    `
    container.appendChild(div);
    event.target.disabled = true;
})



// btn-2
document.getElementById("task-btn2").addEventListener("click", function(event){
    event.preventDefault();
    const task = document.getElementById("assigned").innerText;
    const convertedTask = parseInt(task);

    const abc = convertedTask-1;
    document.getElementById("assigned").innerText = abc;

    const completed = document.getElementById("Completed").innerText;
    const convertedComplete = parseInt(completed);
    const def = convertedComplete + 1;
    document.getElementById("Completed").innerText = def;
    alert("Board Updated Successfully");
    const taskComplete = document.getElementById("add").innerText;

    
    const container = document.getElementById("history");
    

    const div = document.createElement("div");
    div.innerHTML =  `
    <p class="m-3 p-2 bg-[#F4F7FF] rounded-[8px]">You have complete The task ${taskComplete} at 12:48:12 PM</p>
    `
    container.appendChild(div);
    event.target.disabled = true;
})

// btn-3
document.getElementById("task-btn3").addEventListener("click", function(event){
    event.preventDefault();
    const task = document.getElementById("assigned").innerText;
    const convertedTask = parseInt(task);

    const abc = convertedTask-1;
    document.getElementById("assigned").innerText = abc;

    const completed = document.getElementById("Completed").innerText;
    const convertedComplete = parseInt(completed);
    const def = convertedComplete + 1;
    document.getElementById("Completed").innerText = def;
    alert("Board Updated Successfully");
    const taskComplete = document.getElementById("optimize").innerText;

    
    const container = document.getElementById("history");
    

    const div = document.createElement("div");
    div.innerHTML =  `
    <p class="m-3 p-2 bg-[#F4F7FF] rounded-[8px]">You have complete The task ${taskComplete} at 12:48:12 PM</p>
    `
    container.appendChild(div);
    event.target.disabled = true;
})
// btn-4
document.getElementById("task-btn4").addEventListener("click", function(event){
    event.preventDefault();
    const task = document.getElementById("assigned").innerText;
    const convertedTask = parseInt(task);

    const abc = convertedTask-1;
    document.getElementById("assigned").innerText = abc;

    const completed = document.getElementById("Completed").innerText;
    const convertedComplete = parseInt(completed);
    const def = convertedComplete + 1;
    document.getElementById("Completed").innerText = def;
    alert("Board Updated Successfully");
    const taskComplete = document.getElementById("emoji").innerText;

    
    const container = document.getElementById("history");
    

    const div = document.createElement("div");
    div.innerHTML =  `
    <p class="m-3 p-2 bg-[#F4F7FF] rounded-[8px]">You have complete The task ${taskComplete} at 12:48:12 PM</p>
    `
    container.appendChild(div);
    event.target.disabled = true;
})
// btn-5
document.getElementById("task-btn5").addEventListener("click", function(event){
    event.preventDefault();
    const task = document.getElementById("assigned").innerText;
    const convertedTask = parseInt(task);

    const abc = convertedTask-1;
    document.getElementById("assigned").innerText = abc;

    const completed = document.getElementById("Completed").innerText;
    const convertedComplete = parseInt(completed);
    const def = convertedComplete + 1;
    document.getElementById("Completed").innerText = def;
    alert("Board Updated Successfully");
    const taskComplete = document.getElementById("api").innerText;

    
    const container = document.getElementById("history");
    

    const div = document.createElement("div");
    div.innerHTML =  `
    <p class="m-3 p-2 bg-[#F4F7FF] rounded-[8px]">You have complete The task ${taskComplete} at 12:48:12 PM</p>
    `
    container.appendChild(div);
    event.target.disabled = true;
})
// btn-6
document.getElementById("task-btn6").addEventListener("click", function(event){
    event.preventDefault();
    const task = document.getElementById("assigned").innerText;
    const convertedTask = parseInt(task);

    const abc = convertedTask-1;
    document.getElementById("assigned").innerText = abc;

    const completed = document.getElementById("Completed").innerText;
    const convertedComplete = parseInt(completed);
    const def = convertedComplete + 1;
    document.getElementById("Completed").innerText = def;
    alert("Board Updated Successfully");
    alert("Congrats!!! You have completed all the currents task")
    const taskComplete = document.getElementById("job").innerText;

    
    const container = document.getElementById("history");
    

    const div = document.createElement("div");
    div.innerHTML =  `
    <p class="m-3 p-2 bg-[#F4F7FF] rounded-[8px]">You have complete The task ${taskComplete} at 00:00: PM</p>
    `
    container.appendChild(div);
    event.target.disabled = true;
})

document.getElementById("Clear").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("history").innerHTML = "";
})

const btn = document.getElementById("theme");
const colors = ["#ADADAD", "#F5E1E7", "#36C591", "#FFF4DD", "#E8B4BA"];
let clickCount = 0;

btn.addEventListener("click", function() {
document.body.style.backgroundColor = colors[clickCount % colors.length];
clickCount++;
});


