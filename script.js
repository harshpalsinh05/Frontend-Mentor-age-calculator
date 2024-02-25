const outputyear = document.querySelector('.output-year')
const outputmonth = document.querySelector('.output-month')
const outputday = document.querySelector('.output-day')
const submitbtn = document.querySelector('.submit-btn')

let isvalid = false
const inputyear = document.querySelector('#year')
const inputmonth = document.querySelector('#month')
const inputday = document.querySelector('#day')

const errorday = document.querySelector('.error-day')
const errormonth = document.querySelector('.error-month')
const erroryear = document.querySelector('.error-year')

inputday.addEventListener('input', (e) => {
    if (+inputday.value > 31 || +inputday.value < 0) {
        errorday.textContent = 'Must be a Valid Date'
        isvalid = false
        return
    } else {
        isvalid = true
        errorday.textContent = ''
    }

    if (+inputday.value === 0) {
        errorday.textContent = 'This Field is Required'
        isvalid = false
        return
    } else {
        isvalid = true
        errorday.textContent = ''
    }
})

inputmonth.addEventListener('input', (e) => {
    if (+inputmonth.value > 12 || +inputmonth.value < 0) {
        errormonth.textContent = 'Must be a Valid Month'
        isvalid = false
        return
    } else {
        isvalid = true
        errormonth.textContent = ''
    }

    if (+inputmonth.value === 0) {
        errormonth.textContent = 'This Field is Required'
        isvalid = false
        return
    } else {
        isvalid = true
        errormonth.textContent = ''
    }
})

let yearin = new Date().getFullYear()

inputyear.addEventListener('input', (e) => {
    if (+inputyear.value > yearin || +inputyear.value < 1800) {
        erroryear.textContent = 'Must be a Valid Year'
        isvalid = false
        return
    } else {
        isvalid = true
        erroryear.textContent = ''
    }

    if (+inputyear.value === 0) {
        erroryear.textContent = 'This Field is Required'
        isvalid = false
        return
    } else {
        isvalid = true
        erroryear.textContent = ''
    }
})

// document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         // Your code for handling the Enter key goes here
//     }
// });


submitbtn.addEventListener('click', calculatedate)
function calculatedate() {
    if (isvalid) {
        let birthday = `${inputmonth.value}/${inputday.value}/${inputyear.value}/`
        console.log(birthday)

        let birthdayobj = new Date(birthday);
        console.log(birthdayobj)

        let agedifference = Date.now() - birthdayobj
        let agedate = new Date(agedifference)
        console.log(agedate)

        let ageyears = agedate.getUTCFullYear() - 1970
        console.log(ageyears)

        let agemonths = agedate.getUTCMonth()
        console.log(agemonths)

        let agedays = agedate.getUTCDate() - 1 
        console.log(agedays)

        outputday.textContent = agedays
        outputmonth.textContent = agemonths
        outputyear.textContent = ageyears

    } else {
        alert("Invalid Input")
    }
}





