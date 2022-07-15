import Blog from '../model/blog';

export const getAllBlogs = async (req, res, next) => { 
    let blogs;
    try{
        blogs = await Blog.find();
    }catch(err){    console.log(err); }
    if(!blogs){
        return res.status(404).send({ message: 'Not Found' });
    }
    return res.status(200).json({blogs});
};