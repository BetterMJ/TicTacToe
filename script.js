function randombg(){
    var random = Math.floor(Math.random() * 5);
    var img = ["url(img/landscape-7236275_1280.jpg)",
                "url(img/lightning-7401119_1280.webp)",
                "url(img/mountains-7345777_1280.jpg)",
                "url(img/nature-6602056_1280.jpg)",
                "url(img/sea-7125929_1280.jpg)"];
    document.getElementById("random").style.backgroundImage=img[random];
}

function doborder(){
    document.getElementById("1").style.borderColor
}