import { Router } from "express";
import ImagesController from '../controllers/imagesController' 

class ImagesRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/",ImagesController.list);
    this.router.get("/:id",ImagesController.listOne);
    this.router.post('/',ImagesController.create);
    this.router.put('/:id',ImagesController.update);
    this.router.delete('/:id',ImagesController.delete);
  }
}
const imagesRoutes = new ImagesRoutes();
export default imagesRoutes.router;
