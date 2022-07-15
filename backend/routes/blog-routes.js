import express from 'express';
import { getAllBlogs } from '../controllers/blog-controller';
const blogrouter = express.Router();

blogrouter.get('/',getAllBlogs);
export default blogrouter;