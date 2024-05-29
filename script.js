const form = document.getElementById('form');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    var fname = document.getElementById('fname').value;

    console.log('fname');

    var email = document.getElementById('email').value;

    console.log('email');

    result1.textContent = "Welcome to the most anabolic newsletter in history. You will now be able to stay up to date on all of the most important steroid related news. This will include general information about the latest steroids to the most in depth analyses of various cycles you can experiment with."
    result2.textContent = "!!!!!LETS GET JACKED!!!!!"
})
