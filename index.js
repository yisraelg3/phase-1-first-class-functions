function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction(){
    const namedFunction = () => {};
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return () => {};
}