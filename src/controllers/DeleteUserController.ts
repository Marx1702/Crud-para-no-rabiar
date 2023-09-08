import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteUserService = new DeleteUserService();

    try {
      await deleteUserService.delete(id).then(() => {
        response.render("message", {
          message: "User deleted succesfully"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Failed to delete user: ${err.message}`
      });
    }
  }
}

export { DeleteUserController };