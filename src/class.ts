class Person {

    // 読み書きのみ
    readonly id: number = 32;

    //protectedとすると継承先で使用される

    constructor(public readonly name: string, protected  age: number) {
        // readonlyでもここでは書き換えられる
        this.id = 32;
    }

    incrementAge() {
        this.age += 1;
    }

}

class Teacher extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }

    greetting(){
        console.log(`${this.incrementAge()}`)
    }
}

const quill = new Person("quill", 38)

quill.incrementAge()