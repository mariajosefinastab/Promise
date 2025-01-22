const number = prompt('Completá con un número del 1 al 10');

const myPromise = new Promise ((resolve, reject) =>{
    //llamadas a servicios
    //lectura o escritrura de archivos

    const random = Math.round(Math.random()*10)

    setTimeout(() => {
        const success = true

        if(random == number){
            resolve('Felicitaciones! ganaste el juego');
        }else if(random > number){
            reject(`El número ${number} fue más pequeñño que ${random}`)
        }else{
            reject(`El número ${number} fue más pequeñño que ${random}`)
        }
    }, 5000);
});

document.getElementById('loading').innerHTML = 'Cargando...'

myPromise.then(res => {
    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = res
    //console.log(res)
}).catch(error => {
    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = error
    //console.error(error)
});