import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});