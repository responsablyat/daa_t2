
var w =[2,5,10,5];
var p =[2000,3000,5000,100]
var bit = [0,0,0,0]
bestW = 0; bestP=0; bestComb =0;
var k = 16;
var opt = 0;
var batas =w.length

//for (var i = 0; i < Math.pow(2,batas); i++){
for (var i = 0; i <= 16; i++){
	var j = batas-1;
	tW = 0
	tP = 0
	while (bit[j] !=0 && j>0){
		bit[j] = 0;
		j = j-1;
	}
	bit[j] = 1;
	//console.log('Iter ' + i)
	console.log(bit);
	for (var k = 0; k<batas;k++){
		if(bit[k] == 1){
			tW = tW + w[k]
			tP = tP + p[k]
		}
	}
	//console.table(tW + '\t' + tP + '\n')
	// bestComb = bit;
}
//console.log(bestComb);

