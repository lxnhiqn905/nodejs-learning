// Object - Doi tuong student co dang JSON(key-value)
var studentA = {
    firstName: "Nhi",
    lastName: "Le Xuan"
}
console.log("Full name: " + studentA.firstName + " " + studentA.lastName)

// Define User class
// Using tu khoa function
function User() {
    // this co nghia la con tro, tro toi doi tuong dang dinh nghia
    // this dang la User class 
    // this == self
    this.firstName = "" // Khoi tao
    this.lastName = ""
    this.age = 18
}

// Tao doi tuong tu User - Dung tu khoa new
var userA = new User()
userA.firstName = "Alex"
userA.lastName = "Trang"
console.log("Fullname: " + userA.firstName + " " + userA.lastName + ", Tuoi: " + userA.age)

// Them thuoc tinh vao doi tuong
userA.email = "lxnhiqn905"
console.log(userA.email); // lxnhiqn905 - gia tri cua thuoc tinh moi cua rieng doi tuong nay

var userB = new User()
console.log(userB.email); // undefine - doi tuong nay chua dinh nghia thuoc tinh, o class cung chua dinh nghia

// Them thuoc tinh vao class - Dung keyword prototype
User.prototype.address = "Chua co"
// cac doi tuong duoc tao tu User se duoc phan anh thuoc tinh moi
console.log(userA.address); // chua co 
console.log(userB.address); // chua co

userA.address = "Quang Nam"
userB.address = "Da Nang"
console.log(userA.address); // Quang Nam
console.log(userB.address); // Da Nang

// Them class vao object - Add truc tiep vao doi tuong
userA.getFullName = function () {
    var fullname = this.firstName + " " + this.lastName;
    return fullname
}
console.log(userA.getFullName()) // Hien thi fullname
//console.log(userB.getFullName()) // Bao loi vi doi tuong B khong co function getFullName

// Them class vao class - Add function vao class
User.prototype.getInformation = function () {
    var info = this.firstName + " " + this.lastName + "-" + this.age + "-" + this.address;
    return info
}
console.log(userA.getInformation()) // Hien thi ten, tuoi, dia chi
console.log(userB.getInformation()) // Hien thi tuoi, dia chi vi firstname. lastname khoi tao la null