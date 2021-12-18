const inputField = document.querySelector(".input-task");
const form = document.querySelector(".form");
const searcInput = document.querySelector(".filter");
const tasks = document.querySelector(".tasks");
const removeAllBtn = document.querySelector(".clear-tasks");
const msgBox = document.querySelector(".msg");

form.addEventListener('submit', addTask);
tasks.addEventListener('click', removeItem);
removeAllBtn.addEventListener('click', removeAll);
searcInput.addEventListener('keyup', searchTask);
function addTask(e){
    if(inputField.value === ''){
        alert('empty task')
    }else{
        //creating li
        let li = document.createElement('li');
        li.classList = 'task';
        //adding text to the new task
        li.appendChild(document.createTextNode(inputField.value));
        //creating div
        let icons = document.createElement('div');
        //adding to the new task
        icons.classList = 'icons';

        //creating remove link
        let remove = document.createElement('a');
        remove.classList = 'remove';
        remove.innerText = "🔴";
        //creating done link
        let done = document.createElement('a')
        done.classList = 'done';
        done.innerText = "✅";

        icons.appendChild(remove);
        icons.appendChild(done);
        
        li.appendChild(icons);
        //append li in tu ul
        tasks.appendChild(li)
        console.log(tasks);
        inputField.value = '';
        msgBox.style.display = 'none';
        
    }
      e.preventDefault();
}

// delete tasks
function removeItem(e){
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }else if(e.target.classList.contains('done')){
        e.target.parentElement.parentElement.style.background = '#9DD9D2';
    }
}

//delete all
function removeAll(e){
    if(confirm("are u fucking sure ")){
        tasks.innerHTML = '';
    }
}



function searchTask(e){
    const textInput = e.target.value.toLowerCase();
    document.querySelectorAll('.task').forEach(
        function(items){
            const item = items.firstChild.textContent;
            if(item.toLocaleLowerCase().indexOf(textInput) != -1){
            items.style.display = 'block';

            }else {
                items.style.display = 'none'
            }
        }
    )
}