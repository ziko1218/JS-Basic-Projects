function solve(arg1, arg2, arg3, arg4) {
    let contractTerm = arg1;
    let typeContract = arg2;
    let mobileInternet = arg3;
    let countMonth = Number(arg4);

    let totalMoney = 0;
    let tempMoney = 0;
    if (contractTerm === 'one') {
        switch (typeContract) {
            case "Small": tempMoney += 9.98;
                if (mobileInternet === 'yes') {
                    tempMoney += 5.50;
                    totalMoney = countMonth * tempMoney;
                } else {
                    totalMoney = countMonth * tempMoney;
                }
                break;
            case "Middle": tempMoney += 18.99;
                if (mobileInternet === 'yes') {
                    tempMoney += 4.35;
                    totalMoney = countMonth * tempMoney;
                } else {
                    totalMoney = countMonth * tempMoney;
                }
                break;
            case "Large": tempMoney += 25.98;
                if (mobileInternet === 'yes') {
                    tempMoney += 4.35;
                    totalMoney = countMonth * tempMoney;
                } else {
                    totalMoney = countMonth * tempMoney;
                }
                break;
            case "ExtraLarge": tempMoney += 35.99;
                if (mobileInternet === 'yes') {
                    tempMoney += 3.85;
                    totalMoney = countMonth * tempMoney;
                } else {
                    totalMoney = countMonth * tempMoney;
                }
                break;
        }
        console.log(totalMoney.toFixed(2));
    } else {
        switch (typeContract) {
            case 'Small': tempMoney += 8.58;
                if (mobileInternet === 'yes') {
                    tempMoney += 5.50;
                    totalMoney = countMonth * tempMoney;
                } else {
                    totalMoney = countMonth * tempMoney;
                }
                break;
            case "Middle": tempMoney += 17.09;
                if (mobileInternet === 'yes') {
                    tempMoney += 4.35;
                    totalMoney = countMonth * tempMoney;
                } else {
                    totalMoney = countMonth * tempMoney;
                }
                break;
            case "Large": tempMoney += 23.59;
                if (mobileInternet === 'yes') {
                    tempMoney += 4.35;
                    totalMoney = countMonth * tempMoney;
                } else {
                    totalMoney = countMonth * tempMoney;
                }
                break;
            case "ExtraLarge":
                tempMoney += 35.99;
                if (mobileInternet === 'yes') {
                    tempMoney += 3.85;
                    totalMoney = countMonth * tempMoney;
                } else {
                    totalMoney = countMonth * tempMoney;
                }
                break;

        }
        totalMoney = totalMoney * 0.9625;
        console.log(totalMoney.toFixed(2));
    }
}

solve('two', "Large", 'no', 10);