import express,{Router} from "express";
import {addTodo,getTodo,toggleTodo,updateTodo,deleteTodo} from "../Controller/controller.js";

const router=Router();
const app=express();

app.use(router);

router.post("/todos",addTodo);
router.get("/todos",getTodo);
router.get("/todos/:id",toggleTodo);
router.put("/todos/:id",updateTodo);
router.delete("/todos/:id",deleteTodo);

export default router;
