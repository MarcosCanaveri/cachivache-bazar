import fs from 'fs';
import bcrypt from 'bcrypt';

class UserManager {
    constructor(path) {
        this.path = path;
    }

    async getUsers() {
        try{
          if (!fs.existsSync(this.path)) 
            return [];
        
        const data = await fs.promises.readFile(this.path, 'utf-8');
        return JSON.parse(data);
    }
        catch (error) {
            console.error("Error reading users:", error);
        }
    }

    async register(obj) {
        try {
            const users = await this.getUsers();
        const user = { ...obj };
        user.password = bcrypt.hashSync(user.password, 10);
        users.push(user);
        await fs.promises.writeFile(this.path, JSON.stringify(users));
        return user;
            
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    async Login(email, password) {
        try {
            const users = this.getUsers();
            const user = users.find(u => u.email === email);
            if (!user) 
                throw new Error("User not found");
                const isValidPassword = bcrypt.compareSync(password, user.password);
                if (!isValidPassword) 
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

await userManager.register(user1);
await userManager.register(user2);

console.log(userManager.Login("john.doe@example.com", "password123")); 