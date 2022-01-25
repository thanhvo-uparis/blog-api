import express from "express";

const users = {
    id: 1,
    email: "thanhvo.uparis@gmail.com",
    password: "NODE",
}

function main() {
    const application = express();

    application.use(express.json());

    // Users
    application.get("/users", (request, response) => {
        response.json({users : users})
    });
    
    application.listen(8080, () => console.log(`Server is listening on port 8080`));
}



main();