
const title = document.getElementsByClassName('title');
const reponse = document.getElementsByClassName('reponse');


for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', () => {
        title[i].classList.toggle('active');
        reponse[i].classList.toggle('show');
    })
}







const btn = document.querySelector('.navBar button');
const nav_ul = document.querySelector('.navBar .links ul');


btn.addEventListener('click', () => {

    nav_ul.classList.toggle('activee');
})







/****************rejex******************* */
const regex = {
    name: /^[a-z\d ]{5,12}$/i,
    mail: /^([a-z\d.-]+)@([a-z-]+).([a-z]{1,3}).([a-z]{1,3})?$/,
   
}

let inputs = document.querySelectorAll('input');

function validate(input, regex) {
    if(regex.test(input.value)){
        input.className = 'valid';
        // input.nextElementSibling.style.display = "none";
    } else {
        input.className = 'invalid';
        input.nextElementSibling.style.display = "block";
    }
}

inputs.forEach(input => input.addEventListener(
  'focusout', function(event) {
    validate(event.target, regex[event.target.attributes.name.value])
  }
));




// var coll = document.getElementsByClassName("plan");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     } 
//   });
// } 

