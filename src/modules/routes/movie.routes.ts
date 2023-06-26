import { Router } from "express";
import { CreateMovieController } from "../movies/useCases/createMovie/CreateMovieController";

const createMovieController = new CreateMovieController()

const movieRoutes = Router()

movieRoutes.post("/", createMovieController.handle)

export { movieRoutes }