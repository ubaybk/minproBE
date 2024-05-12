/*
  Warnings:

  - You are about to drop the column `imgEvent` on the `event` table. All the data in the column will be lost.
  - Added the required column `avatar` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `imgEvent`,
    ADD COLUMN `avatar` VARCHAR(191) NOT NULL;
