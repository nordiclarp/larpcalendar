/*
  Warnings:

  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `content` on the `Event` table. All the data in the column will be lost.
  - The primary key for the `Organizer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `hash` on the `Organizer` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UsersInOrganizers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `startDate` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `organizerId` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Organizer` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_organizerId_fkey";

-- DropForeignKey
ALTER TABLE "UsersInOrganizers" DROP CONSTRAINT "UsersInOrganizers_organizerId_fkey";

-- DropForeignKey
ALTER TABLE "UsersInOrganizers" DROP CONSTRAINT "UsersInOrganizers_userId_fkey";

-- DropIndex
DROP INDEX "Organizer_email_key";

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
DROP COLUMN "content",
ADD COLUMN     "description" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "startDate" SET NOT NULL,
ALTER COLUMN "organizerId" SET NOT NULL,
ALTER COLUMN "organizerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Event_id_seq";

-- AlterTable
ALTER TABLE "Organizer" DROP CONSTRAINT "Organizer_pkey",
DROP COLUMN "hash",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ADD CONSTRAINT "Organizer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Organizer_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "UsersInOrganizers" DROP CONSTRAINT "UsersInOrganizers_pkey",
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "organizerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UsersInOrganizers_pkey" PRIMARY KEY ("userId", "organizerId");

-- AddForeignKey
ALTER TABLE "UsersInOrganizers" ADD CONSTRAINT "UsersInOrganizers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersInOrganizers" ADD CONSTRAINT "UsersInOrganizers_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "Organizer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "Organizer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
