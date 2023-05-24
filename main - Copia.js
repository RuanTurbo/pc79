menuListArray = ["Pizza Vegetariana",//adicionar mais itens
                "Pizza de frango",
                "Pizza Portuguesa",
                "Pizza Quatro Queijos",
                "Pizza de Calabresa",
                "Pizza Extravaganza",
                ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
//Completar o código
}
document.getElementById("displayMenu").innerHTML = htmldata
}

function addItem(){
var htmldata;
var itemtags=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i] + '<br>'
//Completar o código
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
//Completar o código
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}