
const myPromise = new Promise ((resolve, reject) =>{

    const random = Math.round(Math.random()*10)

    setTimeout(() => {
        resolve(random)
    }, 500); //En medio segundo calcula un número del 1 al 10
});

const isEven = number => {
    const even = number % 2 == 1 ? 'es impar' : 'es par'
        document.getElementById('loading').innerHTML = ''
        document.getElementById('response').innerHTML = `El número generado ${number} ${even}`
}

document.getElementById('loading').innerHTML = 'Cargando...'

myPromise.then(isEven
).catch(error => {
    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = error
});