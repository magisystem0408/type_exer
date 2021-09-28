interface Engineer {
    name: string
    role: string
}

interface Blogger {
    name: string
    follower: number;
}


// かつの表現方法
type EngineerBlogger = Engineer & Blogger

const mamushi: EngineerBlogger = {
    name: "test",
    role: "frontend",
    follower: 1000
}


type NumberBoolean = number | boolean;
type StringNumber = string | number

// ベン図
type Mix = NumberBoolean & StringNumber;


function toUpperCase(x: string | number) {
    // 型チェック
    if (typeof x === "string") {
        return x.toUpperCase()
    }
    return ""

}

type NomadWorker = Engineer | Blogger

function describeNomadWorkerProfile(nomadWorker: NomadWorker) {

    // nameだけアクセスができる
    //両方持っているものしかアクセスできない
    console.log(nomadWorker.name)

    // 存在するか
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role)
    }

    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower)
    }

}

class Dog {
    speak() {
        console.log("bow-wow")
    }
}

class Bird {
    speak() {
        console.log("tweet")
    }

    fly() {
        console.log("flutter")
    }
}

type Pet = Dog | Bird;

function havePet(pet:Pet){
    pet.speak()

    // 関数の指定
    // Birdクラスから生成されたpetであるならば出力
    if (pet instanceof Bird){
        pet.fly()
    }
}


