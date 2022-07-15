import express from 'express';
import { addBlogs, deleteBlog, getAllBlogs, getById, updateBlog } from '../controllers/blog-controller';
const blogrouter = express.Router();

blogrouter.get('/',getAllBlogs);
blogrouter.post('/add',addBlogs);
blogrouter.put('/update/:id',updateBlog);
blogrouter.get("/:id",getById);
blogrouter.delete('/:id',deleteBlog);
export default blogrouter;