export interface IUser {
    id: number
    username: string,
    email: string,
    password: string,
    isVerified: boolean,
    createAt: Date,
    updateAt: Date,
    roleId: number,
    claimedCode: string,
    point: number,
    referralCode: string


}