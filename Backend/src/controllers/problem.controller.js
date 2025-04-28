import {db} from "../libs/db.js"

export const createProblem = async (req,res) => {
    const {title,description,difficulty,tags,examples,constraints,testcases,codeSnippets,referenceSolutions} = req.body
    
    if(req.user.role !== "ADMIN"){
        return res.status(403).json({
            error: "You are not allowed to create a problem"
        })
    }
}

export const getAllProblems = async (req,res) => {

}

export const getProblemById = async (req,res) => {

}

export const updateProblemById = async (req,res) => {

}

export const deleteProblem = async (req,res) => {

}

export const getAllProblemSolvedByUser = async (req,res) => {

}
