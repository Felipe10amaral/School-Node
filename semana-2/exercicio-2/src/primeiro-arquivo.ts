import express from 'express';

const app = express();

app.use(express.json());

app.listen(3330, () => {
    console.log(" Server is running on port 3330 🚀")
})

app.get("/", (request, response) => {
    console.log('Meu primeiro arquivo typescript');

    return response.status(200).send()
    
})
