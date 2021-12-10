
setInterval(() => {
  // new Date() er dit pc klok instilling
  // getHours() er så 'timer' ud fra dit klok instilling
  // getMinutes() er så 'minuter' ud fra dit klok instilling
  // Basically der mange "getStuff", bare søg på google.
  const date = new Date()

  let hours = date.getHours()
  // 'padStart' er en metode til at få fat i begyndelsen af et string. (der er også en 'padEnd' giver lidt sig selv)
  //'2' er minimum af de tegn der skal vises i en string og 
  //'0' er hvad der skal visis hvis der er ikke noget Fx. !9:5 men 09:05. Du kunne også skriv '6' så vil der stå 69:95.
  hours = String(hours).padStart(2, '0')

  let minutes = date.getMinutes()
  minutes = String(minutes).padStart(2, '0')



  document.querySelector('#Hours').innerText = hours
  document.querySelector('#Minutes').innerText = minutes

  // Her setter man ens 'time-delay' i 'nano-seconds'
}, 1000)



setInterval(() => {
let hook = document.querySelector("#switchContainer")


}, 1000)
