var dayContainer = document.getElementById("dayContainer")
var resultContainer = document.getElementById("resultContainer")

var startDay = document.getElementById("startDay")

var mounthResultPay = 0
var mounthResultHour = 0
var mounthResultMin = 0

// Обработка кнопки Добавить день
startDay.onclick = function(e) {
    e.preventDefault()
    
    let days = document.getElementById("days")
    let salary = document.getElementById("salary")

    let payPerDay = salary.value / days.value  // Выплата в день
    let payPerMin = payPerDay / 480 // Выплата в минуту с учётом 8 часов в день

    // Создание формы дня

    let divDay = document.createElement('div')
    divDay.classList.add('form-container')

    let formDay = document.createElement('form') 
    formDay.classList.add('calcPay')

    dayContainer.append(divDay)
    divDay.append(formDay)

    // Создание контейнера часов
    let divHour = document.createElement('div')
    divHour.classList.add('resultContainer')
    formDay.append(divHour)
    let divHourText = document.createElement('div')
    divHourText.classList.add('dayText')
    divHour.append(divHourText)
    divHourText.innerHTML = "Часы"
    let divHourInput = document.createElement('input')
    divHourInput.setAttribute("type", "number")
    divHourInput.setAttribute("name", "hour")
    divHour.append(divHourInput)

    // Создание контейнера минут
    let divMin = document.createElement('div')
    divMin.classList.add('resultContainer')
    formDay.append(divMin)
    let divMinText = document.createElement('div')
    divMinText.classList.add('dayText')
    divMin.append(divMinText)
    divMinText.innerHTML = "Минуты"
    let divMinInput = document.createElement('input')
    divMinInput.setAttribute("type", "number")
    divMinInput.setAttribute("name", "min")
    divMin.append(divMinInput)

    // Создание контейнера дохода за день
    let divDayRes = document.createElement('div')
    divDayRes.classList.add('dayPayment')
    formDay.append(divDayRes)

    let divResInput = document.createElement('input')
    divResInput.setAttribute("type", "submit")
    divResInput.setAttribute("value", "")
    divResInput.classList.add('endDay')
    divDayRes.append(divResInput)

    // Функция обработки кнопки подтвердить день
    divResInput.onclick = function (e) {
        e.preventDefault()
        // Создаём переменные часов и минут и цепляем их из текущего дня
        let hour = Number(divHourInput.value)
        let min = Number(divMinInput.value)
        // Записываем в переменную все минуты за день
        totalMin = hour * 60 + min


        // записываем в переменную итоговую прибыль за день
        let dayResult = totalMin * payPerMin

        // Выводим прибыль за день
        let divDayResText = document.createElement('div')
        divDayRes.append(divDayResText)
        divDayResText.innerHTML = "Прибыль за день"
        let divDayResVal = document.createElement('div')
        divDayResText.innerHTML = dayResult.toFixed(2) + " р"
        // Суммируем все прибыли, часы, минуты по всем дням
        mounthResultPay += dayResult
        mounthResultHour = Number(mounthResultHour) + Number(divHourInput.value)
        mounthResultMin = Number(mounthResultMin) + Number(divMinInput.value)
        if (mounthResultMin >= 60) {
            mounthResultMin = mounthResultMin - 60
            mounthResultHour += 1
        }
    }
}

var endDay = document.getElementById("endDay")

//Обработка кнопки Завершить месяц
endDay.onclick = function(e) {
    e.preventDefault()

    // Создание общего контейнера результатов месяца
    let divResult = document.createElement('div')
    divResult.classList.add('form-container')
    divResult.classList.add('result')
    resultContainer.append(divResult)

    // Создание поля Часы (весь месяц)
    let resDivHour = document.createElement('div')
    resDivHour.classList.add('resultContainer')
    divResult.append(resDivHour)

    let divHourText = document.createElement('div')
    resDivHour.append(divHourText)
    divHourText.innerHTML = "Всего часов"

    let divHourNum = document.createElement('div')
    resDivHour.append(divHourNum)
    divHourNum.innerHTML = mounthResultHour

    
    // Создание поля Минуты (весь месяц)
    let resDivMin = document.createElement('div')
    resDivMin.classList.add('resultContainer')
    divResult.append(resDivMin)

    let divMinText = document.createElement('div')
    resDivMin.append(divMinText)
    divMinText.innerHTML = "Всего минут"

    let divMinNum = document.createElement('div')
    resDivMin.append(divMinNum)
    divMinNum.innerHTML = mounthResultMin

    // let resDivMinText = document.createElement('div')
    // divResult.append(resDivMinText)
    // resDivMinText.innerHTML = "Минуты"
    // resDivMinText.innerHTML = mounthResultMin

    // Создание поля Зарплата (весь месяц)
    let resultPaymentPerMounth = document.createElement('div')
    resultPaymentPerMounth.classList.add('itogPay')
    divResult.append(resultPaymentPerMounth)
    resultPaymentPerMounth.innerHTML = "Зарплата"
    resultPaymentPerMounth.innerHTML = mounthResultPay.toFixed(2)
}


// let delay = 10000
// let t = 0
// let res = []

// for (i = 0; i < delay; i++) {
//     t += 3.33
//     res.push(t)
// }
// // ф-ция счетчика
// function printNumbers(from, to) {
//     let current = from
    
//     let timerId = setInterval(function() {
//         document.getElementById("mark").innerHTML = current
//         if (current == to) {
//         clearInterval(timerId)
//         }
//         current += res[0]
//     }, 60000)
// }
// // ф-ции калькулятора:
// printNumbers(res[0], res[60])
