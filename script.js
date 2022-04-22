let rate = document.getElementsByName('class')

let class_rate_btn = document.getElementById('class_rate_btn')
let total = 0;
class_rate_btn.addEventListener('click', (e) => {
    
    let class_rate_val = document.getElementById('class_rate_val')
    let value = class_rate_val.value
    total += parseInt(value)
    console.log(total)
})

