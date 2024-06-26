import { user } from "../../../../../../../frontend/src/services/user.js";
import { prisma } from "../../../../../adapters.js";
import fs from 'fs';
import path from 'path';
import xss from 'xss'


async function findUserByUsernameAndPassword(username, password) {
    return prisma.user.findFirst({
      where: {
        username: username,
        password: password,
      },
    });
  }

export async function login(req, res) {
    console.log("login data");
    console.log(req.body);
    const username = xss(req.body.username);
    const password = xss(req.body.password);

    findUserByUsernameAndPassword(username, password)
    .then((user) => {
        if (user) {
        console.log('Account found:', user);
        req.session.user_id = user.id;

        return res.status(201).json(user);
        } else {
        console.log('Account not found');
        return res.status(400).json(user);
        }
    })
    .catch((error) => {
        console.error('Something wrong for finding account:', error);
    });
  }

export async function logout(req, res) {
  req.session.destroy(() => {
    console.log('session destroyed')
  })
  res.setHeader("Set-Cookie", "cookieName='fffff'; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");;
  return res.send("logout successful");
}