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
type Mix =NumberBoolean & StringNumber;