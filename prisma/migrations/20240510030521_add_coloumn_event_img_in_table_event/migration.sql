/*
  Warnings:

  - Added the required column `imgEvent` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `imgEvent` VARCHAR(191) NOT NULL;
