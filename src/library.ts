// 即時実行関数にコンパイルされる
namespace myApp {
    const hello: string = "test"
    export const name = "Cuill"

    export interface Nameable {
        name: string
    }
}

const hello = myApp.name
let nameble: myApp.Nameable