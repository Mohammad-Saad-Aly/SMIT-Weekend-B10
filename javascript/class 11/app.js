var getul = document.getElementById('getUl')



function addTodo() {
    var getInp = document.getElementById('inp')
    var createLi = document.createElement('li')
    var liText = document.createTextNode(getInp.value)
    createLi.appendChild(liText)
    getul.appendChild(createLi)
    getInp.value = ''
    var deleteBtn = document.createElement('button')
    var delText = document.createTextNode('DELETE')
    deleteBtn.appendChild(delText)
    createLi.appendChild(deleteBtn)

    var EditBtn = document.createElement('button')
    var editText = document.createTextNode('EDIT')
    EditBtn.appendChild(editText)
    createLi.appendChild(EditBtn)

    deleteBtn.setAttribute('class', 'btn btn-danger')
    EditBtn.setAttribute('class', 'btn btn-info')
    createLi.setAttribute('class', 'd-flex justify-content-around m-2')

    deleteBtn.setAttribute('onclick', 'delTodo(this)')

    EditBtn.setAttribute('onclick', 'editTodo(this)')
    

}



function delTodo(e) {
    e.parentNode.remove()
}

function delall() {
    getul.innerHTML = ''
}

function editTodo(e) {
    // var getPrompt = prompt('Enter Updated Value', e.parentNode.firstChild.nodeValue )
    // e.parentNode.firstChild.nodeValue = getPrompt


}