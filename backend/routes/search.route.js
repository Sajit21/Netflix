import express from "express";
import {searchPerson, searchMovie, searchTv,searchHistory, removeSearchHistory} from "../controller/search.controller.js"
const router=express.Router();



router.get("/person/:query",searchPerson);
router.get("/movie/:query",searchMovie);

router.get("/tv/:query",searchTv);
router.get("/history",searchHistory);
router.get("/remove/:id",removeSearchHistory);




export default router;
