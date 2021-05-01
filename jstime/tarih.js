
/*prompt ile kullanici ismi alindi*/ 
let userName = prompt("Isminizi giriniz")

let paragraph = document.querySelector("#hosgeldiniz")

paragraph.innerHTML = `Merhaba ${userName}, Javascript zaman gostergecine hosgeldin!`



/*Date nesnesi olusturuldu ve suanki zamanlar cekildi*/ 
/*updateTime fonksiyonu ile anlik olarak saat bilgisi cekildi*/ 
function updateTime(){
    let timeNow = new Date();
    
    let day;
    if( timeNow.getDay() == 1) day="Pazartesi";
    if( timeNow.getDay() == 2) day="Salı";
    if( timeNow.getDay() == 3) day="Çarşamba";
    if( timeNow.getDay() == 4) day="Perşembe";
    if( timeNow.getDay() == 5) day="Cuma";
    if( timeNow.getDay() == 6) day="Cumartesi";
    if( timeNow.getDay() == 7) day="Pazar"; 


    /*Saat,dakika ve saniyeler eger 10 dan kucukse yanlarina bir adet 0 eklenerek yazilir*/
    let dateTime = `${day} :
                    ${timeNow.getHours() < 10 ? "0" +timeNow.getHours() : timeNow.getHours()} :
                    ${timeNow.getMinutes() < 10 ? "0" +timeNow.getMinutes() : timeNow.getMinutes()}  : 
                    ${timeNow.getSeconds() < 10 ? "0" +timeNow.getSeconds() : timeNow.getSeconds()}`; 
    document.querySelector("#Timing").innerHTML = `${dateTime}`;
}
updateTime();
setInterval(updateTime,1000); // her 1 sn de bir saat bilgisi guncellenir

