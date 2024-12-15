/*
  Warnings:

  - You are about to drop the column `projectOwnerUserId` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "projectOwnerUserId",
ADD COLUMN     "productOwnerUserId" INTEGER;
