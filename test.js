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

console.log(house.calculatePrice())

Переключились на новую ветку «Vetka-2»
Переключились на новую ветку «Vetka-2»
Переключились на новую ветку «Vetka-2»
Переключились на новую ветку «Vetka-2»
