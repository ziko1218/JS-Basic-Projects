function FishTank (lenghtt,widthh,heightt,procentt) {
let length = Number(lenghtt);
let width  = Number(widthh);
let height = Number (heightt);
let procent = Number (procentt);
let volument = length * height * width;
let restOfWater = (volument - 17 * 0.01 * volument) * 0.001;
console.log(restOfWater);
}
FishTank ("105","77","89","18.5")

