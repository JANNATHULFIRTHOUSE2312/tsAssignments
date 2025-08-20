type User = {
    firstName: string;
    lastName: string;
};

function greet(suser: User): string {
    return `Hello, ${user.firstName} ${user.lastName}!`;
}

const customer: User = { firstName: "Jannathul", lastName: "firthouse" };
console.log(greet(customer));
