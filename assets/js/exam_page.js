// get some elements
const questions = document.querySelector('.questions > p');

// Fetch dummy questions sand answers
fetch('https://the-trivia-api.com/api/questions')
.then((response)=> response.json())
.then((data)=> {
    data.forEach(element => {
        console.log(element.question)
        questions.innerHTML = element.question;
    });
    
})