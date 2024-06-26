// базовый класс
export default class Character {
  constructor(name, type, _health, _level, attack, defence) {
    // массив с типами персонажей
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    // проверка имени на строку и количество символов
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    } else {
      this.name = name;
    }

    // проверка типа персонажа на строку и её наличие
    if (typeof type !== 'string' || !types.includes(type)) {
      throw new Error('Такого типа не существует');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  // validation(name, type) {
  //   // массив с типами персонажей
  //   const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  //   // проверка имени на строку и количество символов
  //   if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
  //     throw new Error('Имя должно быть строкой от 2 до 10 символов');
  //   }
  //   // проверка типа персонажа на строку и наличие
  //   if (typeof type !== 'string' || !types.includes(type)) {
  //     throw new Error('Такого типа не существует');
  //   }
  //   return [name, type];
  // }
}
