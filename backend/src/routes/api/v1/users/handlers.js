import { prisma } from "../../../../adapters.js";


export async function getAllUsers(req, res) {
  const allUsers = await prisma.user.findMany();
  return res.json(allUsers);
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function createOneUser(req, res) {
  console.log("Create user data");
  console.log(req.body);
  console.log(req.file);
  const username = req.body.username;
  const password = req.body.password;
  const filename = req.file.path;
  if (!filename.match(/\.(jpg|png)$/)){
    return res.status(400).json({msg: "Please upload png or jpg"});
  }
  
  const user = await prisma.user.create({ data: { username: username, password: password, filename: filename } });  // save to db
  return res.status(201).json({user});
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getOneUser(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });
  const user = await prisma.user.findUnique({ where: { id } });
  if (user === null) return res.status(404).json({ error: "Not Found" });
  return res.json(user);
}
