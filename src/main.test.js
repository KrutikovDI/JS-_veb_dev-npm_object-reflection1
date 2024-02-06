import orderByProps from './main.js';

test('проверка функции orderByProps()', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
    };
  const correct = [
      {key: "name", value: "мечник"},
      {key: "level", value: 2},
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10}
    ];
  expect(orderByProps(obj, ["name", "level"])).toEqual(correct);
});

test('проверка на отсутствие свойства у объекта', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
    };
  expect(() => orderByProps(obj, ["name", "evel"])).toThrow("Несуществующее свойство объекта");
});