const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.post('/register', async (req,res)=>{
  // console.log(req.body)

  const emailExists  = await User.findOne({email: req.body.email})
  if(emailExists) return res.status(400).send('Email already exists')

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user  = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  try{
    console.log('try')
    const savedUser = await user.save();
    res.send({user : user._id});
  }catch(err){
    res.status(400).send(err)
  }
})

router.post('/login',async (req,res)=>{
  const user = await User.findOne({email: req.body.email});
  if(!user) return res.status(400).send('User does not exists')

  const validPass = await bcrypt.compare(req.body.password, user.password)
  if(!validPass) return res.status(400).send('Invalid pass');
  const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET)
  res.header('auth-token', token).send(token);
  res.send('Logged in')
})

module.exports = router;
