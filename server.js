import express from "express";
import cors from "cors";
import router  from "./routes/index.js";

const app = express();
const port = 3002;


app.use(express.json());
app.use(cors());

app.use("/api", router)

// app.post('/user', (req,res) => {
//     try {
//        const {name, email} = req.body;
//         if(name.trim() && email.trim()){
//             users.push({id: users.length + 1 ,...req.body})
//             res.statusCode(200).send({ statusCode: 200 ,message: "Data added successfully!"})
//         }
//         else{
//             res.statusCode(403).send({statusCode: 403, message: "Name & Email are required"})
//         }
//     } 
//     catch (error) {
//         console.log("==>" , error.message);
//         res.statusCode(500).send({statusCode: 500, error: error.message})
//     }
// })



app.listen(port, () => console.log('Server started'));