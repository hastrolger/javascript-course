/*
    a promise is exactly what it sounds like 
    it is used to make a promise to do something, usually async

    promise is a contructure function (it is needed to instantiate it)
    and recieves two parameters a resolve and a reject (actually functions)

    a promise has three states => pending - fulfilled - rejected
    if the promise does not complete either resolve or reject it will be on a pending loop
*/

const myPromise = new Promise((res, rej) => {
    let resFromServer 
    if(resFromServer){
        res("Got it")
    } else {
        rej("Not Found")
    }
})

/*
 use then method 
 line bellow indicates if resolve is completed a callback is invoked
*/
myPromise.then(result => {
    console.log(result)
})

// handle error with catch method
myPromise.catch(err => {
    console.log(err)
})