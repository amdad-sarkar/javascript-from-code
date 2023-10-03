//Stack (primitive), Heap (Non-Primitive)

let myYouTubeName = "amdadDotCom"

let AnotherName = myYouTubeName

AnotherName = "chacha ka code"

console.log(myYouTubeName);
console.log(AnotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "amdad@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);