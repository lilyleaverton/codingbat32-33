
function prime_position(x){
    var arr = [];
    var a = 0;
    var factors = 0;
    while(x>=arr.length){
        a += 1;
        if(a<2){
            prime = 2;
        }
        for( var i=2; i<=Math.sqrt(a); i++) {
            if (a % i == 0) {
                factors += 1;
            }
            if (factors >= 1) {
                break;
            }
        }
        if(factors == 0){
            arr.push(a);
        }
        factors = 0;
    }
    return arr[x];
}


function sort_subtract(n){

    var string = String(n);
    var strX = "";
    var strY = "";
    var arr = [];

    for(var i = 1; i<string.length+1; i ++){
        arr.push(string.substring(i-1,i));
    }
    arr.sort((a,b) => a-b);
    for(var l = arr.length-1; l >= 0; l--){
        strX += arr[l];
    }
    for(var u = 0; u<arr.length; u++){
        strY += arr[u];
    }
    var x = parseInt(strX);
    var y = parseInt(strY);
    return x-y;
}


