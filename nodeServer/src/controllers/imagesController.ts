import { Request, Response } from "express";
import  connection  from '../database';


class ImagesController {
  index(req: Request, res: Response) {
   connection.query('DESCRIBE images');
   res.json('images');
  }
} 

const imagesController = new ImagesController();
export default imagesController;