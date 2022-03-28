const{parentPrime} =  workers{
    findPrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
})
