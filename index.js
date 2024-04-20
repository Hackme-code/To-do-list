function addtask(){
     const newtask = document.createElement('li')
     const addedtask = document.getElementById('tasklist')
     addedtask.appendChild(newtask)
     newtask.textContent = document.getElementById('inputTask').value
     document.getElementById('inputTask').value = ""
     deletetask(newtask)
}
function deletetask(newtask){
    const deletebtn = document.createElement('button')
     deletebtn.textContent = 'Delete'
     newtask.appendChild(deletebtn)
     deletebtn.onclick = function(){
        newtask.remove();
     }
}

