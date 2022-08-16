    // ÖDEV_3
let maas = +prompt("Lütfen Maaşınızı Giriniz")
const asgari = 6000
if  (maas< asgari) {
    artıs= maas*1.5
    maas += artıs
    console.log(`yeni maas: ${maas}`)
} else if (maas>asgari) {
    artıs= maas*1.1
    maas += artıs
    console.log(`yeni maas: ${maas}`)
}else{
    console.log(`Yanlış İşlem Yaptınız....`)
}    