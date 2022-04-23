//module exporting
//inputs
const cosHight = document.getElementById("inpt-hight");
const cosWeight = document.getElementById("inpt-weight");
const cosDressType = document.getElementById("dress-type");
const btn_data_submit = document.getElementById("btn-data-submit");
const dataTable = document.querySelector("#data-table");
btn_data_submit.addEventListener("click", () => {
    dataTable.innerHTML = "";
    let orgnizedData = {
        hight: Number,
        weight: Number,
        dressType: String,
        hightToWeight: Number,
    };
    orgnizedData.hight = Number(cosHight.value);
    orgnizedData.weight = Number(cosWeight.value);
    orgnizedData.hightToWeight = (cosHight.value - cosWeight.value - 100)*-1;
    orgnizedData.dressType = cosDressType.value;
   console.log(typeof orgnizedData.dressType);
    switch (orgnizedData.dressType) {
        case "azi":
            azi(orgnizedData);
            break;
        case "aba_sar":
            aba_sar(orgnizedData);
            break;
        case "aba_shan":
            aba_shan(orgnizedData);
            break;
        default:
            break;
    }
    dress_length(orgnizedData);
    if(orgnizedData.hightToWeight < 0 ){
    loadResult(["jiawazy", orgnizedData.hightToWeight *-1 + "  -  کەمترە    " ]);
    }else{
        loadResult(["jiawazy", orgnizedData.hightToWeight     +" - زیاترە  " ]);
    } 
    console.log("here")
    console.log(orgnizedData)
    let a = orgnizedData.hightToWeight
    console.log(typeof a )
    console.log(a)
    console.log(a <= -  30)
});
const azi = (orgnizedData) => {
    switch (true) {
        case orgnizedData.hight >= 150 && orgnizedData.hight < 155:
            if (orgnizedData.hightToWeight < 30) {
                loadResult(["drezhy-qol", 58]);
            } else {
                loadResult(["drezhy-qol", 59]);
            }
            break;
        case orgnizedData.hight >= 155 && orgnizedData.hight < 160:
            console.log("the heigh is between 155 to 160");
            if (orgnizedData.hightToWeight < 30) {
                loadResult(["drezhy-qol", 59]);
            } else {
                loadResult(["drezhy-qol", 60]);
            }
            break;
        case orgnizedData.hight >= 160 && orgnizedData.hight < 170:
            if (orgnizedData.hightToWeight < 30) {
                loadResult(["drezhy-qol", 61]);
               
            } else {
                loadResult(["drezhy-qol", 62]);
            }
            break;
        case orgnizedData.hight >= 170 && orgnizedData.hight < 180:
            if (orgnizedData.hightToWeight < 30) {
                loadResult(["drezhy-qol", 63]);
            } else {
                loadResult(["drezhy-qol", 64]);
            }
            break;
        default:
            alert("ئەو پێوانانە پێشبینی نەکراوە");
            break;
    }
};
const aba_shan = (orgnizedData) => {
    switch (true) {
        case orgnizedData.hight >= 150 && orgnizedData.hight < 155:
            loadResult(["drezhy-qol", 68]);

            break;
        case orgnizedData.hight >= 155 && orgnizedData.hight < 160:
            if (orgnizedData.hightToWeight < 30) {
                loadResult(["drezhy-qol", 70]);
            } else {
                loadResult(["drezhy-qol", 71]);
            }
            break;

        case orgnizedData.hight >= 160 && orgnizedData.hight < 170:
            if (orgnizedData.hightToWeight < 30) {
                loadResult(["drezhy-qol", 72]);
            } else {
                loadResult(["drezhy-qol", 73]);
            }
            break;

        case orgnizedData.hight >= 170 && orgnizedData.hight < 180:
            if (orgnizedData.hightToWeight < 30) {
                loadResult(["drezhy-qol", 74]);
            } else {
                loadResult(["drezhy-qol", 75]);
            }
            break;

        default:
            alert("ئەو پێوانانە پێشبینی نەکراوە");
            break;
    }
};
const aba_sar = (orgnizedData) => {
    switch (true) {
        case orgnizedData.hight >= 150 && orgnizedData.hight < 155:
            loadResult(["drezhy-qol", 83]);
            break;
        case orgnizedData.hight >= 155 && orgnizedData.hight < 160:
            loadResult(["drezhy-qol", 85]);
            break;
        case orgnizedData.hight >= 160 && orgnizedData.hight < 170:
            loadResult(["drezhy-qol", 88]);
            break;
        case orgnizedData.hight >= 170 && orgnizedData.hight < 180:
            loadResult(["drezhy-qol", 90]);
          break;
        default:
            alert("ئەو پێوانانە پێشبینی نەکراوە");
            break;
    }
};
const dress_length = (orgnizedData) => {
    switch (true) {
        case orgnizedData.hight >= 150 && orgnizedData.hight < 160:
            if (orgnizedData.hightToWeight < 40) {
                loadResult(["drezhy tanwra", 100]);
            } else {
                loadResult(["drezhy tanwra", 102]);
            }
            break;
        case orgnizedData.hight >= 160 && orgnizedData.hight < 170:
            if (orgnizedData.hightToWeight < 40) {
                loadResult(["drezhy tanwra", 105]);
            } else {
                loadResult(["drezhy tanwra", 107]);
            }
            break;
        case orgnizedData.hight >= 170 && orgnizedData.hight < 180:
            if (orgnizedData.hightToWeight < 40) {
                loadResult(["drezhy tanwra", 110]);
            } else {
                loadResult(["drezhy tanwra", 112]);
            }
            break;
    }
};
/// loading a result as a table
let loadResult = (result) => {
    console.log(result);
    let data;
    if (result[0] === "drezhy-qol") {
        data = ["درێژی قۆڵ", result[1]];
    } else if (result[0] === "drezhy tanwra") {
        data = ["درێژی تەنورە", result[1]];
    }else if(result[0] === "jiawazy"){
data = ["جیاوازی کێش بۆ باڵا",result[1]]
}
    let createRow = document.createElement("tr");
    let createCul1 = document.createElement("td");
    createCul1.innerHTML = data[0];
    let createCul2 = document.createElement("td");
    createCul2.innerHTML = data[1];

    createRow.append(createCul1);
    createRow.append(createCul2);
    dataTable.append(createRow);
};