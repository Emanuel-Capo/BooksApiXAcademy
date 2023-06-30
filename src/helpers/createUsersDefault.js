const { User } = require("../models")

// Crea un admin por default
const defaultAdmin = async () => {
    try {
        await User.findOrCreate({
            where: { email: "admin@mail.com" },
            defaults: {
                name: "admin",
                lastname: "admin",
                email: "admin@mail.com",
                password: "admin",
                role: "Admin"
            },
        })
    } catch (error) {
        console.log("Error when creating default admin ", error);
        throw error;
    }
}

module.exports = { defaultAdmin }

