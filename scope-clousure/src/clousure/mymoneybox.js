function moneyBox() {
  let saveCoins = 0;
  return function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(4);
myMoneyBox(4);

const otraAlcancia = moneyBox();
otraAlcancia(30);
otraAlcancia(20);
console.log(otraAlcancia(1));
