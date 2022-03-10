const bob1 = {
    name: 'Bob',
    friends: ['ALice', 'Jane'],
    printFrineds() {
        const self = this;
        this.friends.forEach(
            function(f) {
                console.log(`${self.name} knowa ${f}`);
            }
        );
    }
}

// Alternative way with bind
const bob2 = {
    name: 'Bob2',
    friends: ['ALice', 'Jane'],
    printFrineds() {
        const f = function(f) {
            console.log(`${this.name} knows ${f}`);
        }.bind(this);
        this.friends.forEach(f);
    }
}

// lternative way with arrow function
const bob3 = {
    name: 'Bob3',
    friends: ['ALice', 'Jane'],
    printFrineds() {
        this.friends.forEach(f => console.log(`${this.name} knows ${f}`));
    }
}