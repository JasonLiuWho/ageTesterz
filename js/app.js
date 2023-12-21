const today = new Date();

const dateInput = document.getElementById("dateInput");
const validYear = today.getFullYear() - 21;
const validMonth = today.getMonth();
const validDay = today.getDate();

const checkbox = document.getElementById("checkbox");

console.log(checkbox);

// console.log(dateInput);
const message = document.getElementById("message");

const validate = ()=> {
    const isChecked = checkbox.checked;
    // console.log("inside the function", isChecked);
    let messageText;
    if (!isChecked) {
        messageText = " Please check the box to verify your age.";
        message.innerHTML = `
            ${messageText};
        `
    } else {
        getDOB();
    }
}

const getDOB =()=> {
    // const isChecked = checkbox.checked;
    // const message = document.getElementById("message");
    // // console.log("inside the function", isChecked);
    // let messageText;
    // if (!isChecked) {
    //     messageText = " Please check the box to verify your age."
    //     message.innerHTML = `
    //         $(messageText);
    //     `
    // } else {
    //     console.log("checkbox is checked")
    // }

    const userDate = new Date(dateInput.value);
    const userYear = userDate.getFullYear();
    const userMonth = userDate.getMonth();
    const userDay = userDate.getDate();
    verifyAge(userYear, userMonth, userDay);
};


const verifyAge = (year, month, day)=> {
    // console.log(date, year, month, day);
    // const userDate = date;
    const userYear = year;
    const userMonth = month;
    const userDay = day;
    if (validYear >= userYear) {
        if (userMonth >= validMonth) {
            if (userDay >= validDay) {
                messageText = "i guess you're old enough";
                message.innerHTML = `
                ${messageText};
            `
            } else {
                messageText = "too young";
                message.innerHTML = `
                ${messageText};
            `
            } 
        } else {
            messageText = "little baby";
            message.innerHTML = `
            ${messageText};
        `
            } 
        } else {
            messageText = "grow more";
            message.innerHTML = `
            ${messageText};
        `
        }
};