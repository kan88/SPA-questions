import './style/style.css';
import {createModal, isValueValid} from './utils.js';
import { Question } from './question';
import { getAuthForm } from './auth';
import { authWithEmailAndPassword } from './auth';

const form = document.querySelector('.mui-form');
const input = form.querySelector('.mui-input');
const button = form.querySelector('.mui-btn');
const modalBtn = document.querySelector('.floating-btn')

window.addEventListener('load', Question.renderList)


const onFormSubmit = (evt) => {
    evt.preventDefault()

    if (isValueValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()

        }
        button.disabled = true
        //async request to server to save question
        Question.create(question).then(() => {
            input.value = ''
            input.className = ''
            button.disabled = false
        })
        console.log('Question', question)

    }
}
form.addEventListener('submit', onFormSubmit);
modalBtn.addEventListener('click', openModal)
input.addEventListener('input', () => {
    button.disabled = !isValueValid(input.value)
})

const onAuthFormSubmit = (evt) => {
    evt.preventDefault()

    const btn = evt.target.querySelector('button')
    const email = evt.target.querySelector('.email').value
    const password = evt.target.querySelector('.password').value
    btn.disabled = true
    authWithEmailAndPassword(email, password)
    .then(token => {
        return Question.fetch(token)
    })
    .then(renderModalAfterAuth)
    .then(() => btn.disabled = false)
}

function openModal() {
    createModal('Авторизация', getAuthForm())
    document
    .querySelector('.auth-form')
    .addEventListener('submit', onAuthFormSubmit, {once: true})
}

function renderModalAfterAuth(content) {
if (typeof content === 'string') {
    createModal('Ошибка', content)
} else {
    createModal('Список вопросов', Question.listToHtml(content))
}
}
