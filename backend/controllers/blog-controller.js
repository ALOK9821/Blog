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
export const addBlogs = async (req, res, next) => {
    const {title,description,image,user} = req.body;
    const blog = new Blog({
        title: title,
        description: description,
        image: image,
        user: user,
    }) 
    try{
        blog.save();
    }
    catch(err){    console.log(err);  }
    return res.status(200).json({blog});
};
export  const updateBlog =async (req, res, next) => {
    const {title,description} = req.body;
    const blogId = req.params.id;
    let blog;
    try{
        const blog = await Blog.findByIdAndUpdate(blogId,{
            title: title,
            description: description,
        });
    }
    catch(err){ return console.log(err); }
    if(!blog) return res.status(500).json({message: 'unable to update the blog'});
   return res.status(200).json({blog: blog});
};
export const getById = async (req,res, next) => {
    const id = req.params.id;
    let blog;
    try{
        blog = await Blog.findById(id);
    }
    catch(err){ return console.log(err); }
    if(!blog){
        return res.status(404).json({message: 'unable to find blog'});
    }
    return res.status(200).json({blog: blog});
};
export const deleteBlog = async (req, res, next) => {
    const id=req.params.id;
    let blog;
    try{
        blog = await Blog.findByIdAndRemove(id);
    }
    catch(err){ return console.log(err); }
    if(!blog){
        return res.status(500).json({message: 'unable to delete blog'});
    }
    return res.status(200).json({message: 'successfully deleted the blog'});
};