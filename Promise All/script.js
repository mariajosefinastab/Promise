const promise1 = newPromise((res, rej) => {
  setTimeout(() => {
    res("Respuesta de la promesa 1");
  }, 5000);
});

const promise2 = newPromise((res, rej) => {
  setTimeout(() => {
    res("Respuesta de la promesa 2");
  }, 2000);
});

const promise3 = newPromise((res, rej) => {
  setTimeout(() => {
    res("Respuesta de la promesa 3");
  }, 3000);
});

//No secuencial

/* promise1.then(res => {
    console.log(res)
});

promise2.then(res => {
    console.log(res)
});

promise3.then(res => {
    console.log(res)
}); */

//Secuencial con PromiseAll

Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);
  })
  .catch((error) => {
    console.log(error);
  });
