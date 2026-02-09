const crypto = require('crypto');

class UserManager {
    constructor() {
        this.users = [];
    }

    getUsers() {
        return this.users;
    }

    createUser(obj) {
        try {
        const user = { ...obj };
        user.secret_key = crypto.randomBytes(128).toString();
        user.password = crypto.createHmac('sha256', user.secret_key).update(user.password).digest('hex');
        this.users.push(user);
        return user;
            
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    Login(email, password) {
        try {
            const users = this.getUsers();
            const user = users.find(u => u.email === email);
            if (!user) 
                throw new Error("User not found");
                const nuevaCrypto = crypto
                .createHmac('sha256', user.secret_key)
                .update(password)
                .digest('hex');
                if (nuevaCrypto !== user.password) 
                    throw new Error("Invalid password");
                    return "Login OK";
                } catch (error) {
                    console.error("Error validating user:", error.message);
            }
        }
}

const userManager = new UserManager();

const user1 = {
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    password: "password123",
}

const user2 = {
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@example.com",
    password: "mypassword",
}

userManager.register(user1);
userManager.reister(user2);

console.log(userManager.getUsers());