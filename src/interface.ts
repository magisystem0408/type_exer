
// interfaceはオブジェクトのみで扱う。


//はてなをつけるとあってもなくても良いことになる。
interface Nameable{
    name:string
    nickName?:string;
}

// extendsで継承できる
interface Human extends Nameable{
    //継承前の型が一緒だと同じであれば上書きができる
    readonly name: string
    age: number

    greeting(message: string): void
}

const human: Human = {
    name: "neko",
    age: 20,
    greeting(message: string): void {
        console.log(message)
    }
}

let developer: Human;


//classの生成するinterfaceが少なくともinterfaceを持つようにする
// imprementsは複数interfaceをつけることができる。

class Developer implements Human {
    constructor(public name: string, public age: number,public exprerience:number) {
    }

    greeting(message: string) {
        console.log("hello")
    }

}


// インスタンス化する時interfaceに入っているものが入ってればok
const user: Human = new Developer("test", 48, 2);

// readonlyの書き換えはDevelopreから生成されるものであればok