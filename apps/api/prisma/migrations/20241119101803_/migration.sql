/*
  Warnings:

  - You are about to drop the `samples` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `samples`;

-- CreateTable
CREATE TABLE `EventDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(75) NOT NULL,
    `summary` VARCHAR(140) NOT NULL,
    `type` ENUM('SINGLE', 'RECURRING') NOT NULL DEFAULT 'SINGLE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventTransaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventPromotion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventRating` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrizePoint` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `role` ENUM('ATTENDEES', 'ORGANIZERS') NOT NULL DEFAULT 'ATTENDEES',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
