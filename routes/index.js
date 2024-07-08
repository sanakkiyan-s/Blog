const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.render('index', { posts });
});

router.get('/new', (req, res) => {
  res.render('new-post');
});

router.post('/new', async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content });
  await post.save();
  res.redirect('/');
});

router.get('/post/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
});

router.get('/edit/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit-post', { post });
});

router.post('/edit/:id', async (req, res) => {
  const { title, content } = req.body;
  await Post.findByIdAndUpdate(req.params.id, { title, content });
  res.redirect(`/post/${req.params.id}`);
});

router.post('/delete/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;

