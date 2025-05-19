const supportMessage = document.getElementById("supportMessage");
const submitButton = document.getElementById("submitButton");


submitButton.onclick = () => {
    supportMessage.innerHTML = "Täname toetamise eest";
}

const submit = ()=> {
    console.log("submitted");
}
