
const input = document.getElementById('input')
const button = document.getElementById('button')
const list = document.getElementById('list')

const handleClick = () => {
    if(input.value === '') return;
    clickAddBtn(input.value)
    input.value = "";
}

const clickAddBtn = (content) => {
    let card = document.createElement('div')
    card.setAttribute('class', 'card')

    let createInput = document.createElement('input')
    createInput.setAttribute('class', 'createInput')
    createInput.value = content;
    createInput.disabled = true;

    let createEdit = document.createElement('button')
    createEdit.setAttribute('class', 'createEdit')
    createEdit.setAttribute('type', 'button')
    createEdit.innerHTML = 'Edit'

    let createDel = document.createElement('button')
    createDel.setAttribute('class', 'createDel')
    createDel.setAttribute('type', 'button')
    createDel.innerHTML = 'Delete'

    list.appendChild(card)
    card.appendChild(createInput)
    card.appendChild(createEdit)
    card.appendChild(createDel)
    bind(card)
}

const bind = (card) => {
    const cardEdit = card.querySelector('.createEdit')
    cardEdit.addEventListener('click', () => clickEditBtn(cardEdit))

    const cardDel = card.querySelector('.createDel')
    cardDel.addEventListener('click', () => clickDelBtn(cardDel))
}


const clickEditBtn = (node) => {
    const card = node.parentNode;
    const cardInput = card.querySelector('.createInput')
    const cardEdit = card.querySelector('.createEdit')

    if(cardInput.disabled === false){
        cardInput.disabled = true;
        cardEdit.innerHTML = 'Edit'
    } else {
        cardInput.disabled = false;
        cardEdit.innerHTML = 'Done'
    }
}

const clickDelBtn = (node) => {
    const card = node.parentNode;
    const cardList = card.parentNode;

    cardList.removeChild(card)
}

const press = (e) => {
    if (e.keyCode === 13){
        handleClick()
    }
}

input.addEventListener('keyup', press)
button.addEventListener('click', handleClick);

