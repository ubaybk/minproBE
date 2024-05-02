/*
  Warnings:

  - You are about to drop the `trasaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `trasaction` DROP FOREIGN KEY `Trasaction_discount_id_fkey`;

-- DropTable
DROP TABLE `trasaction`;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dateCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `discount_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_discount_id_fkey` FOREIGN KEY (`discount_id`) REFERENCES `Promotion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
