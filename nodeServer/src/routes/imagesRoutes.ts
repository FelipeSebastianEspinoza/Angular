import { Router } from "express";

class ImagesRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", (req, res) => res.send("images"));
  }
}
const imagesRoutes = new ImagesRoutes();
export default imagesRoutes.router;
