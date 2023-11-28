class EdibleThing {
  // protected name: string;
  // private color: string;
  // readonly canNotBeModified: boolean = true;

  // constructor(name: string, color: string) {
  //   this.name = name;
  //   this.color = color;
  // }

  // shorthand
  constructor(
    protected storeName: string, // don't need to assign arguments to properties
    private color: string,
    readonly canNotBeModified: boolean = true,
  ) {}

  get name() {
    return this.storeName[0].toLowerCase() + this.storeName.slice(1);
  }
}

class Fruit extends EdibleThing {
  #esPrivateField: string = "I am a es private field"; // es private field (native runtime private)

  constructor(name: string, private storedSweetness: number, color: string) {
    super(name, color);
    this.storedSweetness = storedSweetness;
  }

  public sayName() {
    console.log(this.name);
  }

  public sayColor() {
    console.log(this.color); // private, unaccessible outside of itself
  }

  public sayPrivateField() {
    console.log(this.#esPrivateField);
  }

  set sweetness(sweetnessValue: number) {
    if (sweetnessValue < 0) {
      throw new Error("Sweetness cannot be less 0.");
    } else if (sweetnessValue > 100) {
      throw new Error("Sweetness cannot be greater than 100.");
    } else this.storedSweetness = sweetnessValue;
  }

  get sweetness() {
    return this.storedSweetness;
  }
}

const apple = new Fruit("Apple", 80, "red");

apple.sayPrivateField(); // "I am a es private field"

apple.sweetness = -1; // Sweetness cannot be less 0.

apple.storeName = "Banana"; // protected and unaccessible outside of itself and subclasses

apple.name = "Banana"; // read-only

apple.sayName();

apple.canNotBeModified = false; // read-only
