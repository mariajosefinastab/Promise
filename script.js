const number = prompt('Completá con un número del 1 al 10');

const myPromise = new Promise ((resolve, reject) =>{
    //llamadas a servicios
    //lectura o escritrura de archivos

    

    setTimeout(() => {
        const success = true

        if(success){
            resolve('Esta operación ha sido existosa');
        }else{
            reject('Ha fallado la operación');
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
}).finally(
    console.log('Esto se ejecuta siempre')
)