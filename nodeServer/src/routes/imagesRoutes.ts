import { Router } from "express";
import ImagesController from '../controllers/imagesController' 

class ImagesRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/",ImagesController.index);
  }
}
const imagesRoutes = new ImagesRoutes();
export default imagesRoutes.router;
