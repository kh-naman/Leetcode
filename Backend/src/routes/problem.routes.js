import express from "express"
import { authMiddleware } from "../milddleware/auth.middleware.js"
import { checkAdmin} from "../milddleware/auth.middleware.js"

import { createProblem, getAllProblems, getProblemById, updateProblemById, deleteProblem, getAllProblemSolvedByUser } from "../controllers/problem.controller.js"


const problemRoutes = express.Router()

problemRoutes.post("/create-problem", authMiddleware, checkAdmin, createProblem)
problemRoutes.get("/get-all-problems", authMiddleware, getAllProblems)
problemRoutes.get("/get-problem/:id", authMiddleware, getProblemById)
problemRoutes.put("/update-problem/:id", authMiddleware, updateProblemById)
problemRoutes.delete("/delete-problem/:id", authMiddleware, checkAdmin, deleteProblem)
problemRoutes.get("/get-solved-problems", authMiddleware, getAllProblemSolvedByUser)


export default problemRoutes