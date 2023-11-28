export class Fruit {
  constructor(
    public name: string,
    protected sweetness: number = 50,
    public tasty: boolean = false,
    private isEdible: boolean = true,
  ) {
    if (this.sweetness > 60) {
      this.tasty = true;
    }
  }

  static cook(fruit: Fruit): string {
    return `Cooked ${fruit.name}`;
  }
}

export class Apple extends Fruit {
  constructor(public variety: string) {
    super("Apple", 80, true);
  }
}
