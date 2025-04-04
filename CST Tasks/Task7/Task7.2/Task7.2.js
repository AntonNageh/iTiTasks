function onSubmit(e) {
    let choice = confirm("Do you want to submit? Y/N");
    if(!choice){
        e.preventDefault()
    }
}
const form = document.getElementById('myForm');
form.addEventListener('submit', onSubmit);
