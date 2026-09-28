// Type your code below this line!

function FriendsList(names) {
    this.names = names
}

const cantidad = Number(process.argv[3])
const nombres = []

for (let i = 0; i < cantidad; i++) {
    nombres.push(process.argv[4 + i])
}

const friends = new FriendsList(nombres)

console.log(friends.names)

// Type your code above this line!