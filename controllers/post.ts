import Post from '../models/post';
require('express-async-errors')


export async function getAllPosts(req, res, next) {
    const posts = await Post.find().populate('categoryID');
    if (!posts) return res.status(404).send('not found')
    res.status(200).json(posts)
}

export async function getPostByID(req, res, next) {
    const post = await Post.findById(req.params.id)
    .populate('categoryID','name -_id')
    .populate('userID','email  _id') ;;
    if (!post) return res.status(404).send('not found')
    res.status(200).json(post)
}

export async function createPost(req, res, next) {

    const userId = req.user.userId;
    debugger;
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        categoryID: req.body.categoryID,
        userID: userId
    })

    const result = await post.save()
    res.status(200).json(result)

}



export async function updatePost(req, res, next) {
    // const { error } = validate(req.body)
    // if (error) return res.status(400).send('invalid data')
    const post = await Post.findByIdAndUpdate(
        req.params.id,
        { title: req.body.title, content: req.body.content },
        { new: true });
    if (!post) return res.status(404).send('not found')
    res.status(200).json(post)
}

export async function deletePost(req, res, next) {
    const post = await Post.findByIdAndRemove(req.params.id);
    if (!post) return res.status(404).send('not found')
    res.status(200).json(post)
}