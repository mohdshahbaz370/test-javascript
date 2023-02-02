/*class A {
    constructor(name) {
        this.name = name;
    }
    result() {
        return this.name + " woa "
    }
}

class B extends A {
    constructor(name, id) {
super(name);
this.id = id;
    }
    final() {
        return this.result() + this.id

    }
}
let obj = new B("sam", 7);
console.log(obj.final());*/

/*let arr = [1, 2, 3, 65, 25, 85, 100]
let result = arr.filter((arr) => arr < 63 )
console.log(result)*/

/*const arr = ["shahbaz", "zeeshan", 10, 20, "sameer"]

const [name, name2, ...rest] = arr
console.log(rest[2])*/

/*const obj = {name: "shahbaz", id: {nam: "sameer" , id: 10}}

const {name, ...rest} = obj
console.log(rest.id.id)*/

//5 > 21 ? console.log("yes") : console.log("no")

/*const obj = {name: "shahbaz", id: {nam: "sameer" , id: 10}}

const {name, id: {nam, id}} = obj
console.log(id)*/

/*const obj = {name: "shahbaz", id: 5}

const {name, id} = obj
console.log(id)*/

/*let promise = new Promise((resolve) => setTimeout(() => resolve("hi sameer"), 5000))

async function sameer() {
console.log(await promise)
console.log("hi aateer")
}

sameer()*/

/*let promise = new Promise(function(resolve, reject) {
    if(10 > 9) {
    resolve("shahbaz resolved")
} else {
reject("shahbaz rejected")
}

}
)
promise.then(function(response) {
    console.log(response)
}, function(err) {
    console.log(err)
})*/

/*const arr = ["abdus", "zeshan", 190]

for(let key of arr) {
console.log(key)
}*/
/*const obj = {name:"shahbaz", id: 5}

for(let key in obj) {
console.log(obj[key])
}*/

/*const obj = {name:["shahbaz", "sameer"], id: [5, 12]}
console.log(obj.id[1])*/





/*const obj = [{name: "Shahbaz", id: 15}, {name: "yaseen", id: 16}]
obj.map((item) => 
    console.log(item.id)
)*/