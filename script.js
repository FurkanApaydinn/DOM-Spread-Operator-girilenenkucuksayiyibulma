const birinciNumara=document.querySelector("#number1")
const ikinciNumara=document.querySelector("#number2")
const üçüncüNumara=document.querySelector("#number3")
const btn=document.querySelector("#submit")
const çıktı=document.querySelector("#result")

btn.addEventListener("click", function(){
 const numara=[birinciNumara.value, ikinciNumara.value, üçüncüNumara.value]
 çıktı.textContent=Math.min(...numara)
})