let son1 = +prompt('1-sonni kiriting')

let son2 = +prompt('2-sonni kiriting')

let math = +prompt(`amalni tanlang 
  1.qoshish 
  2.ayirish 
  3.kopaytirish 
  4.bolish 
  amalni tanlang  (1,2,3,4.)`)

if (math == 1) {
    alert(son1+son2)
}else if(math == 2) {
    alert(son1-son2)
}else if(math == 3) {
    alert(son1*son2)
}else if(math == 4) {
    alert(son1 / son2)
}




