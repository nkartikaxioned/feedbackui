/* Author: 

*/

const feedcontainer=document.querySelector('.feedback_container');
const wrapcontainer=document.querySelector('.wrapper');
const feedback=document.querySelectorAll('.rating');
const button=document.querySelector('.button');
const texts=document.querySelectorAll('.text');
let stringFeedback="";


feedback.forEach((element,index) => {
     element.addEventListener('click',() => {
      removActive();
        element.classList.add('active');
        stringFeedback=(texts[index].innerHTML).toUpperCase();
     })
        
})

function removActive(){
    feedback.forEach(elem => {
        elem.classList.remove('active');
    })
}

button.addEventListener('click',() => {
    wrapcontainer.innerHTML=`
    <span class="newspan">&#9829;</span>
    <h1 class="headerr">Thank You!</h1>
    Feedback: ${stringFeedback}
    <p class="paragraph">We'll use your feedback to improve our customer support</p>
    `
})


















