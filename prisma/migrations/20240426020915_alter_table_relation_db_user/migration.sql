/*
  Warnings:

  - You are about to drop the column `giver` on the `referralhistory` table. All the data in the column will be lost.
  - You are about to drop the column `receiver` on the `referralhistory` table. All the data in the column will be lost.
  - Added the required column `giver_id` to the `ReferralHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiver_id` to the `ReferralHistory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `referralhistory` DROP FOREIGN KEY `ReferralHistory_receiver_fkey`;

-- AlterTable
ALTER TABLE `referralhistory` DROP COLUMN `giver`,
    DROP COLUMN `receiver`,
    ADD COLUMN `giver_id` INTEGER NOT NULL,
    ADD COLUMN `receiver_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ReferralHistory` ADD CONSTRAINT `ReferralHistory_giver_id_fkey` FOREIGN KEY (`giver_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReferralHistory` ADD CONSTRAINT `ReferralHistory_receiver_id_fkey` FOREIGN KEY (`receiver_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
