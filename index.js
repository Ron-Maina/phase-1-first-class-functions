function receivesAFunction(spy){
    spy ();
}

function returnsANamedFunction (){
    return function done(){

    }
}
function returnsAnAnonymousFunction(){
    return ()=>{
        
    }
}