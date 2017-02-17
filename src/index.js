module.exports = function multiply(first, second) {

    var numm1 = first.split('').reverse();
    var numm2 = second.split('').reverse();
    var result = [];

    for (var i=0; numm1[i] >=0; i++){
        for(var j=0; numm2[j] >=0; j++){
            if (!result[i+j]) result [i+j] = 0;
            result[i+j] += (numm1[i]* numm2[j]);
        }
    }
    for (var k=0; result[k] >=0; k++){
        if (result[k] >=10){
            if(!result[k+1]) result[k+1] = 0;
            result[k+1] += parseInt(result[k] / 10);
            result[k] = result[k] % 10;
        }
    }
    var sol = result.reverse().join('');
    return sol;
}
