import { PrismaClient, User } from "@prisma/client";
import { IUser } from "../interfaces/auth.interfaces";

const prisma = new PrismaClient();

const generateUniqueCode = async (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 8; // Panjang kode yang diinginkan

    let code = '';
    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }

    return code;
};

const createRegisterQuery = async (data: User, pass: string) => {
    try {
        const uniqueCode = await generateUniqueCode(8);

        const t = await prisma.$transaction(async (prisma) => {
            try {
                let point = 0;
                let voucherClaim = 0

                // Cek apakah pengguna memiliki kode referral
                if (data.claimedCode) {
                    // Cari pengguna yang memiliki referralCode yang digunakan
                    const referringUser = await prisma.user.findUnique({
                        where: { referralCode: data.claimedCode }
                    });

                    // Jika pengguna ditemukan, tambahkan 10 poin
                    if (referringUser) {
                        // Update poin pengguna pemilik referral code
                        await prisma.user.update({
                            where: { id: referringUser.id },
                            data: { point: referringUser.point + 10000 }
                        });
                        voucherClaim = 0.1; // Set point untuk pengguna baru
                    }
                }

                console.log("Nilai voucherClaim sebelum pembuatan pengguna:", voucherClaim); // Tambahkan ini

                const user = await prisma.user.create({
                    data: {
                        username: data.username,
                        email: data.email,
                        password: pass,
                        isVerified: data.isVerified,
                        roleId: data.roleId,
                        claimedCode: data.claimedCode,
                        point: point, // Menggunakan poin yang telah dihitung
                        voucherClaim: voucherClaim,
                        referralCode: uniqueCode
                    }
                });

                return user;
            } catch (err) {
                throw err;
            }
        });

        return t;
    } catch (err) {
        throw err;
    }
};


const getRegisterQuery = async (token:any) => {
    try {
        const userId = token.userId

        const register = await prisma.user.findMany({
            where: {
                id : userId
            }
        })
        return register
    } catch (err) {
        throw err
    }
}

const loginQuery = async (data: User ) => {
    try {
        const user = await prisma.user.findUnique({
            select:{
                id: true,
                username: true,
                email: true,
                role:{
                    select: {
                        name: true
                    },
                },
            },
            where: { email: data.email, password: data.password},
        });

        return user;
    } catch (err) {
        throw err;
    }
};

export {
    createRegisterQuery,
    loginQuery,
    getRegisterQuery
};
