abstract class Person {

    static species = "homo sapiens"

    // 読み書きのみ
    readonly id: number = 32;

    //protectedとすると継承先で使用される

    constructor(public readonly name: string, protected age: number) {
        // readonlyでもここでは書き換えられる
        this.id = 32;
    }

    incrementAge() {
        // インスタンス化されていないのでthisが使えない。
        Person.species = "test"
        this.age += 1;
    }

    // 継承先で入れらないといけない
    abstract explainJob():void

}

class Teacher extends Person {
    explainJob() {
        console.log("継承先で使用しないといけない")
    }

    // ゲッターは何か返さないと行けない
    get subject(): string {
        // 空文字だった場合
        if (!this._subject) {
            throw new Error("There is no subject")
        }
        return this._subject
    }

    // 絶対に一つの値を入れる必要がある
    // getの返り値を推測してくれる

    set subject(value) {
        if (!value) {
            throw  new Error("There is no subject")
        }
        this._subject = value;
    }

    constructor(name: string, age: number, private _subject: string) {
        // 継承前のコンストラクタを出している
        super(name, age);
    }

    greetting() {
        console.log(`${this.incrementAge()}`)
    }
}

const quill = new Person("quill", 38)
quill.incrementAge()


const teacher = new Teacher("timi", 230, "math")
console.log(teacher.subject)

// setterで格納する
teacher.subject = "test"

teacher.greetting()


// pythonの@staticmethodと同じ
console.log(Teacher.species)