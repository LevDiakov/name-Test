let materialPrice = {
  'wood': 2000, // Это я внёс примечание
  'stone': 505,
  'brick': 5555 // внёс изменения в значение
};
Вношу серьёзные изменения в код для второго коммита
Проверяю команду git diff

let house = {
  calculateSquare: function () {
  return this.rooms * this.coefficient * this.rooms;
},
rooms: 100000,
floors: 500000,
material: 'red',
coefficient: 10.5,
calculatePrice: function () {
  return this.calculateSquare() * materialPrice[this.material];
}
};
4566666666666666666666666666666666666666666666666666666666666666666666666
console.log(house.calculatePrice())
4566666666666666666666666666666666666666666666666666666666666666666666666
4566666666666666666666666666666666666666666666666666666666666666666666666

444444444444444444444444444444444444
555555555555555555555555555555555555555
66666666666666666666666666666666666666666
