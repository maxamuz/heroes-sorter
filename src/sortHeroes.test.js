import sortHeroesByHealth from './sortHeroes';

describe('Sort Heroes by Health', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ];

    const expected = [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ];

    const result = sortHeroesByHealth(heroes);

    // Проверяем, что toEqual работает
    expect(result).toEqual(expected);
    
    // Проверяем, что toBe не работает (разные ссылки на объекты)
    expect(result).not.toBe(expected);
  });

  test('should return new array (not mutate original)', () => {
    const heroes = [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
    ];

    const result = sortHeroesByHealth(heroes);

    // Проверяем, что исходный массив не изменился
    expect(heroes).toEqual([
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
    ]);
    
    // Проверяем, что вернулся новый массив
    expect(result).not.toBe(heroes);
  });

  test('should handle empty array', () => {
    const heroes = [];
    const result = sortHeroesByHealth(heroes);
    const expected = [];

    expect(result).toEqual(expected);
    expect(result).not.toBe(heroes);
  });

  test('should handle single hero', () => {
    const heroes = [{name: 'маг', health: 50}];
    const expected = [{name: 'маг', health: 50}];

    const result = sortHeroesByHealth(heroes);

    expect(result).toEqual(expected);
  });

  test('should handle heroes with same health', () => {
    const heroes = [
      {name: 'мечник', health: 50},
      {name: 'маг', health: 50},
      {name: 'лучник', health: 80},
    ];

    const expected = [
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 50},
      {name: 'маг', health: 50},
    ];

    const result = sortHeroesByHealth(heroes);

    expect(result).toEqual(expected);
  });

  test('should handle already sorted array', () => {
    const heroes = [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ];

    const expected = [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ];

    const result = sortHeroesByHealth(heroes);

    expect(result).toEqual(expected);
  });
});