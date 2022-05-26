/*
  Warnings:

  - You are about to drop the column `passwrod` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(240)`.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `passwrod`,
    ADD COLUMN `password` VARCHAR(255) NOT NULL,
    MODIFY `name` VARCHAR(240) NOT NULL;
