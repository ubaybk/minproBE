import { Request, Response, NextFunction } from "express" //middleware atau handler
import { verify } from "jsonwebtoken"
import { API_KEY } from "../config"
import { User } from "../types/express"
import jwt from 'jsonwebtoken';


const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "")

        if (!token) throw new Error("Token Invalid!")

        const verifyUser = verify(token, String(API_KEY))
        console.log(verifyUser)
        if (!verifyUser) throw new Error("unauthorized")

        req.user = verifyUser as User
        console.log (req.user)
        next()
    } catch (err) {
        next(err)
    }
}

const adminGuard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.user?.role.toLowerCase() !== "admin")
        throw new Error("Unauthorized");
  
      next();
    } catch (err) {
      next(err);
    }
  };

  const tokenId = (token: string): string => {
    try {
        // Lakukan verifikasi token untuk mendapatkan payload
        const decoded: any = jwt.verify(token, 'ubay'); // Ganti 'secret_key' dengan kunci rahasia Anda

        // Dapatkan userID dari payload
        const userID = decoded.id_user; // Anda perlu menyesuaikan ini dengan properti yang benar dalam payload token Anda
        
        return userID;
    } catch (err) {
        throw new Error('Invalid token');
    }
    
}



export { verifyToken, adminGuard, tokenId }