/*
  Warnings:

  - You are about to alter the column `voucherClaim` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `voucherClaim` DECIMAL(65, 30) NOT NULL;
