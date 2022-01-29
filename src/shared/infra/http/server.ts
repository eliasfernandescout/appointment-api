import express from 'express';

const app = express();
app.use(express.json());

app.get('/customer', (request, response) => {
    const customerData = {
        name: 'Ragnar Lothbrook',
        cpf: '144.767.890-00',
        dataDeNascimento: '13/09/1991',
    };

    response.send(customerData);
});

app.listen(5002, () => {
    console.log('🟠 Server started on port 5002');
});
