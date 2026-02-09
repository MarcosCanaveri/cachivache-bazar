import crypto from 'crypto';
import fs from 'fs';

class UserManager {
    constructor(path) {
        this.path = path;
    }

    getUsers() {
        if (!fs.existsSync(this.path)) {
            return [];
        }
        const data = fs.readFileSync(this.path, 'utf-8');
        return JSON.parse(data);
    }

    register(obj) {
        try {
            const users = this.getUsers();
        const user = { ...obj };
        user.secret_key = crypto.randomBytes(128).toString();
        user.password = crypto.createHmac('sha256', user.secret_key).update(user.password).digest('hex');
        users.push(user);
        fs.writeFileSync(this.path, JSON.stringify(users));
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

const userManager = new UserManager('./users.json');

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
userManager.register(user2);

console.log(userManager.Login("john.doe@example.com", "password123")); 