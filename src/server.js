import express from 'express';
import routes from './routes';

export const launch = ({port}) => {
    const app = express();
    app.use(express.json());
    
    app.use(routes);
    app.listen(port, () => console.log(`API ready at ${port}`))

}