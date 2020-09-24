import { Request, Response } from "express";
import connection from "../database";

class ImagesController {
  public async list(req: Request, res: Response) {
    const images = connection.query("SELECT * FROM images");
    res.json(images);
  }
  public async listOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const images = await connection.query("SELECT * FROM games WHERE id=?", [
      id,
    ]);
    res.json(images);
  }
  public async create(req: Request, res: Response): Promise<any> {
    await connection.query("INSERT INTO images set ?", [req.body]);
    res.json({ message: "creating a image" });
  }
  public async delete(req: Request, res: Response):Promise<void> {
    const { id } = req.params;
    connection.query("DELETE FROM images WHERE id=?", [id]);
    res.json({ text: "deleting a image" });
  }
  public async update(req: Request, res: Response):Promise<void> {
    const { id } = req.params;
    await connection.query("UPDATE images set ? WHERE id=?",[req.body,id])
    res.json({ text: "updating a image" + req.params.id });
  }
}

const imagesController = new ImagesController();
export default imagesController;
