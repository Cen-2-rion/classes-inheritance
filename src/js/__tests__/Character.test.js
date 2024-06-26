import Character from '../characters/Character';

// проверка длинны имени, если больше 10 символов
test('incorrect name length > 10', () => {
  expect(() => new Character('Mephistopheles', 'Daemon')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

// проверка длинны имени, если меньше 2 символов
test('incorrect name length < 2', () => {
  expect(() => new Character('S', 'Daemon')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

// проверка имени на строку
test('incorrect name type is not string', () => {
  expect(() => new Character(0, 'Daemon')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

// проверка типа персонажа на соответствие дефолтным типам и на строку
test('incorrect type', () => {
  expect(() => new Character('Belphegor', 'laziness')).toThrow('Такого типа не существует');
  expect(() => new Character('Beelzebub', 0)).toThrow('Такого типа не существует');
});

// проверка создания персонажа
test('character creation check', () => {
  expect(new Character('Asmodeus', 'Daemon')).toEqual({
    name: 'Asmodeus',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});
