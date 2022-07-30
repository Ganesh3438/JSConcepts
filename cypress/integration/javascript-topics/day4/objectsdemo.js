let person = {

    fName : "Mohan",
    loc: "Viskahapatnam",
    mobile: 70138072,
    status: false,
    address: {
        area: "Urvasi",
        city: "Viskahapatnam",
        pincode: 530008
    }


}

// console.log(person)
// console.log(typeof(person));
// console.log(person.fName)
console.log(person.address.area)
console.log(person.address["area"])