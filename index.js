function receivesAFunction(x) {
    return x();
}

const spy = chai.spy();

receivesAFunction(spy);


var fn = returnsANamedFunction();
function returnsANamedFunction() {
    return names = x => "This is the named function";
}

fn
fn.name

function returnsAnAnonymousFunction() {
    return () => "This is the anonymous function";
}