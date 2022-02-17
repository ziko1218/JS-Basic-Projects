function solve(chickenMenuCount, fishMenuCount,vegiMenucount) {
  chickenMenuCount = Number(chickenMenuCount);
  fishMenuCount = Number(fishMenuCount);
  vegiMenucount = Number(vegiMenucount);
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let vegiMenu = 8.15;
    let priceChicketMenu = chickenMenu * chickenMenuCount;
    let priceFishMenu = fishMenuCount * fishMenu;
    let priceVegiMenu = vegiMenu * vegiMenucount;
    let totalAllMenus = priceChicketMenu + priceFishMenu + priceVegiMenu;
    let withDesertTotal = totalAllMenus + 0.2*totalAllMenus;
    let absoluteTotalWithDelivery = withDesertTotal + 2.5;

    console.log(`Total: ${absoluteTotalWithDelivery.toFixed(2)} leva`);
     
}
    solve(10,0,6);