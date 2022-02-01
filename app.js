//module exporting
//inputs
const cosHight = document.getElementById("inpt-hight");
const cosWeight = document.getElementById("inpt-weight");
const cosDressType = document.getElementById("dress-type");
const btn_data_submit = document.getElementById("btn-data-submit");
const dataTable = document.querySelector("#data-table");

// fetch("./data.json")
//     .then((res) => {
//         return res.json();
//     })
//     .then((res) => {
//         data = res;
//     });

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
    orgnizedData.hightToWeight = cosHight.value - cosWeight.value - 100;
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
});

const azi = (orgnizedData) => {
    switch (true) {
        case orgnizedData.hight >= 150 && orgnizedData.hight < 155:
            if (orgnizedData.hightToWeight <= 30) {
                loadResult(["drezhy-qol", 58]);
            } else {
                loadResult(["drezhy-qol", 59]);
            }

            break;
        case orgnizedData.hight >= 155 && orgnizedData.hight < 160:
            console.log("the heigh is between 155 to 160");
            if (orgnizedData.hightToWeight <= 30) {
                loadResult(["drezhy-qol", 59]);
            } else {
                loadResult(["drezhy-qol", 60]);
            }
            break;

        case orgnizedData.hight >= 160 && orgnizedData.hight < 170:
            if (orgnizedData.hightToWeight <= 30) {
                loadResult(["drezhy-qol", 60]);
            } else {
                loadResult(["drezhy-qol", 61]);
            }
            break;

        case orgnizedData.hight >= 170 && orgnizedData.hight < 180:
            if (orgnizedData.hightToWeight <= 30) {
                loadResult(["drezhy-qol", 62]);
            } else {
                loadResult(["drezhy-qol", 64]);
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
            loadResult(["drezhy-qol", 68]);

            break;
        case orgnizedData.hight >= 155 && orgnizedData.hight < 160:
            console.log("the heigh is between 155 to 160");
            if (orgnizedData.hightToWeight <= 30) {
                loadResult(["drezhy-qol", 70]);
            } else {
                loadResult(["drezhy-qol", 71]);
            }
            break;

        case orgnizedData.hight >= 160 && orgnizedData.hight < 170:
            if (orgnizedData.hightToWeight <= 30) {
                loadResult(["drezhy-qol", 72]);
            } else {
                loadResult(["drezhy-qol", 73]);
            }
            break;

        case orgnizedData.hight >= 170 && orgnizedData.hight < 180:
            if (orgnizedData.hightToWeight <= 30) {
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

const aba_shan = (orgnizedData) => {
    switch (true) {
        case orgnizedData.hight >= 150 && orgnizedData.hight < 155:
            loadResult(["drezhy-qol", 83]);

            break;
        case orgnizedData.hight >= 155 && orgnizedData.hight < 160:
            loadResult(["drezhy_tanwra", 85]);
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

    let createRow = document.createElement("tr");
    let createCul1 = document.createElement("td");
    createCul1.innerHTML = result[0];
    let createCul2 = document.createElement("td");
    createCul2.innerHTML = result[1];

    createRow.append(createCul1);
    createRow.append(createCul2);
    dataTable.append(createRow);
};
