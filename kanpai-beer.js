var lagerBeerCollection={
    light :["bohemianPilsner","http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-pilsener.jpg"],
    rich :["dunkel","http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-dunkel.jpg"]
}

var aleBeerCollection={
    light :["hefeWeize","http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/german-style-hefeweizen.jpg"],
    rich :["milkStout","http://www.craftbeer.com/wp-content/uploads/_SF/thumbnails/english-style-sweet-stout-milk-stout.jpg"],
}
var arg = new Object;
var url = location.search;//URLのパラメータを取得する
var pair=location.search.substring(1).split('&');
for(var i=0;pair[i];i++) {
    var kv = pair[i].split('=');
    arg[kv[0]]=kv[1];
}
console.log(pair);
console.log(arg.param1);
console.log(arg.param2);

//URLのパラメータから画像を出力するビールを決める
if (arg.param1 === "beerish") {
    if(arg.param2 === "light"){
        var beerName =(lagerBeerCollection.light[0])
        var beerJpg =(lagerBeerCollection.light[1])
        console.log("パターン1");
    }else{
        var beerName =(lagerBeerCollection.rich[0])
        var beerJpg =(lagerBeerCollection.rich[1])
        console.log("パターン2")
    }
}else{
    if(arg.param2 === "light"){
        var beerName =(aleBeerCollection.light[0])
        var beerJpg =(aleBeerCollection.light[1])
        console.log("パターン3")
    }else{
        var beerName =(aleBeerCollection.rich[0])
        var beerJpg =(aleBeerCollection.rich[1])
        console.log("パターン4")
    }
}
console.log(beerName + beerJpg);
document.getElementById("beerName").innerText =beerName ; //ビールの名前を入れる
document.getElementById("beerImage").src = beerJpg;//ビールの画像のURLを入れる
