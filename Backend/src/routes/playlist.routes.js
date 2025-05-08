import express from 'express'
import { authMiddleware } from '../milddleware/auth.middleware.js'
import {
    getAllListDetails,getPlayListDetails,createPlaylist,addProblemToPlaylist,deletePlaylist,removeProblemFromPlaylist
} from "../controllers/playlist.controller.js"
const playlistrouter = express.Router()

playlistrouter.get("/",authMiddleware,getAllListDetails)
playlistrouter.get("/:playlistId",authMiddleware,getPlayListDetails)
playlistrouter.post("/create-playlist",authMiddleware,createPlaylist)
playlistrouter.post("/:playlistId/add-problem",authMiddleware,addProblemToPlaylist)
playlistrouter.delete("/:playlistId",authMiddleware,deletePlaylist)
playlistrouter.delete("/:playlistId/remove-problem",authMiddleware,removeProblemFromPlaylist)


export default playlistrouter