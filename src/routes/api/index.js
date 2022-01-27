import {Router} from 'express';
import articles from './articles.route';
import users from './users.route';

const api = Router();

api.use("/articles", articles);
api.use("/users", users);

export default api;