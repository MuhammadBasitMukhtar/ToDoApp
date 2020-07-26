tasks = [];
var idForUpdate = 0;
const form = document.querySelector(".frm");

const submit = document.querySelector("#sbm");
form.addEventListener("submit", event => {
    event.preventDefault();

    const input = document.querySelector("#task");    
    const inpvalue = input.value.trim();
    if(submit.value == "Add to List")
    {
        addTask(inpvalue)
    }
    else
    {
        UpdateTask(inpvalue)
    }

});
LoadData();
const input = document.querySelector("#task");
function LoadData()
{
    if(tasks.length < 1)
    {
        var li = document.getElementById("ul");
        li.innerHTML = "<li style='text-align: center !important;'>Lets Add Some Tasks!!</li>";

    }
    else
    {
        var li = document.getElementById("ul");
        var txt = "";
        for (let index = 0; index < tasks.length; index++) {
            txt += "<li>"+ tasks[index] +" <span onclick='RemoveTask("+ index +")'><img src='images/close.png' width='25'></span><span onclick='EditTask("+ index +")'><img src='images/edit.jpg' width='25'></span></li>";
        }
        txt += "<span class='remove' onclick='RemoveAll()'>Remove All</span>";
        li.innerHTML = txt;
        input.value = "";
    }
    
    
}

function addTask(task)
{
    tasks.push(task);
    LoadData();
}

function RemoveTask(id)
{
    tasks.splice(id,1);
    LoadData();
}
function EditTask(id)
{
    input.value = tasks[id];
    idForUpdate = id;
    submit.value = "Update Task";
}

function UpdateTask(task)
{
    tasks[idForUpdate] = task;
    LoadData();
    submit.value = "Add to List";
}

function RemoveAll()
{
    tasks = [];
    LoadData();
}