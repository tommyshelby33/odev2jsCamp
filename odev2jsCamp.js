//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
//(Araştırma konusu : şart blokları : if ) Örnek kullanım : findPrime(2,5,8,21,13) findPrime(3,5)
//1.SORU
console.log("Asal sayı uygulaması")
function findPrime(...numbers) {
  let number
  for(let i =0; i<numbers.length; i++) {
    number = 0
    for (let j =1; j<=numbers[i]; j++) {
      if(numbers[i]% j==0){
        number++
      }
    }
    if(number==2) {
      console.log(numbers[i] + " bu bir asal sayıdır")
    } else {
      console.log(numbers[i]+ " bu bir asal sayı değildir")
    }
  }
}
findPrime(2,5,6,17,18,10,14,13,17,23,25,28)



//2.SORU
function arkadasSayilar(sayi1,sayi2) {
  let toplam1 = 0
  let toplam2 = 0

  for (let i=1; i<sayi1; i++){
    if (sayi1 % i == 0){
      toplam1 = toplam1+i
    }
  }
  for(let i=1; i<sayi2; i++){
    if(sayi2 % i ==0){
      toplam2 = toplam2+i
    }
  }
  if((toplam1=sayi2) && (toplam2==sayi1)){
    console.log(sayi1+ " ve "+ sayi2+ " arkadaş sayılardır ")
  }
  else{
    console.log(sayi1+ " ve "+ sayi2+ " arkadaş sayı değildir ")
  }
}
arkadasSayilar(220 , 284)
arkadasSayilar(200 , 450)
arkadasSayilar(66928 , 66992)


//3.SORU
function perfectNumbers(number) {
  for (let i = 1; i < number; i++) {
      let total = 0
      for (let j = 1; j < i; j++) {
          if (i % j == 0) {
              total = total+ j
          }
      }
      if (total == i) {
          console.log(i)
      }
  }
}

perfectNumbers(1000)

//4.SORU
function primeNumbers() {
  for(let i = 2; i<=1000; i++){
    let number=0
    for(let j=0; j<i; j++){
      if(i%j==0){
        number++
      }
    }
    if(number==1){
      console.log(i + " asal sayıdır")
    }
  }
  
}
primeNumbers()
