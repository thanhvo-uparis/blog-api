import {Router} from 'express';
import * as ArticleController from '../../controllers/article.controller';

const api = Router();

api.get("/", ArticleController.findAll);
api.get("/:id", ArticleController.findOne);
api.post("/", ArticleController.createOne);
api.put("/:id", ArticleController.updateOne);
api.delete("/:id", ArticleController.deleteOne);

export default api;