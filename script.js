const supper=80;
const contract =100
const grant =150
const height =200



let forName = prompt('Ism va familiyangizni kiriting kiriting', 'name') ;
let score = prompt('balingizni kiriting', 0) -0;

let elTitle =document.querySelector('#title');

if(score>height){
   elTitle.textContent = (forName +" Noto'gri ball kiritdingiz eng yuqori ball 200 😂")
}

else if (score>grant && score <=height){
    elTitle.textContent = (forName +" grant asosida o'qishga qabul qilindingiz 😍 ")
}

else if (score>contract && score<=grant){
    elTitle.textContent =(forName + " kantrak asosida o'qishga qabul qilindingiz 😊")


}

else if (score>supper && score<=contract){

    let userConfirm = confirm( forName + " to'plagan ball super kantrakt uchun yetarli, 300$ to'lab student bo'lishingiz mumkin, tasdiqlash tugmasini bosing va koproq malumot olishingiz mumkin 🤦‍♀️🤦‍♂️")

    let userMoney =prompt("Supercontract bo'yicha sizni qiziqtirgan savollarni berishingiz mumkin" , 'Abc')


}

else{
    elTitle.textContent=( forName + " O'qishga kira olmadingiz, yaxshiroq o'qing 😢")
}