/*
  Warnings:

  - You are about to drop the column `earneddate` on the `referralhistory` table. All the data in the column will be lost.
  - You are about to drop the column `earnedpoint` on the `referralhistory` table. All the data in the column will be lost.
  - You are about to drop the `voucher` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[referralCode]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[claimedCode]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `price` to the `Attendee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `earnedDate` to the `ReferralHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `earnedPoint` to the `ReferralHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `claimedCode` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `point` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referralCode` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `voucher` DROP FOREIGN KEY `Voucher_user_Id_fkey`;

-- AlterTable
ALTER TABLE `attendee` ADD COLUMN `price` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `referralhistory` DROP COLUMN `earneddate`,
    DROP COLUMN `earnedpoint`,
    ADD COLUMN `earnedDate` DATETIME(3) NOT NULL,
    ADD COLUMN `earnedPoint` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ticket` MODIFY `available` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `claimedCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `point` INTEGER NOT NULL,
    ADD COLUMN `referralCode` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `voucher`;

-- CreateIndex
CREATE UNIQUE INDEX `User_referralCode_key` ON `User`(`referralCode`);

-- CreateIndex
CREATE UNIQUE INDEX `User_claimedCode_key` ON `User`(`claimedCode`);

-- AddForeignKey
ALTER TABLE `Attendee` ADD CONSTRAINT `Attendee_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `Transaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendee` ADD CONSTRAINT `Attendee_tiket_id_fkey` FOREIGN KEY (`tiket_id`) REFERENCES `Ticket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
