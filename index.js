
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const ageEl = document.getElementById('age');

const result = document.getElementById('respo')
const post = document.getElementById("submit");

 
post.addEventListener("click", function() {
  uname = nameEl.value;
  mail = emailEl.value;
  uage = ageEl.value;


  document.getElementById('respo').innerHTML = `
    Name: ${uname},
    Email: ${mail},
    Age: ${uage}`;
});
  


