const num = document.querySelector('p');
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.delete');

function pluse() {
    num.textContent++
};

addBtn.addEventListener("click", pluse);

function reset() {
    num.textContent = 0;
}

resetBtn.addEventListener("click", reset)