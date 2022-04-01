/*
  Warnings:

  - You are about to drop the column `authorId` on the `Event` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "OrganizerRole" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_authorId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "authorId",
ADD COLUMN     "organizerId" INTEGER;

-- CreateTable
CREATE TABLE "Organizer" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Organizer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersInOrganizers" (
    "userId" INTEGER NOT NULL,
    "organizerId" INTEGER NOT NULL,
    "role" "OrganizerRole" NOT NULL DEFAULT E'USER',

    CONSTRAINT "UsersInOrganizers_pkey" PRIMARY KEY ("userId","organizerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organizer_email_key" ON "Organizer"("email");

-- AddForeignKey
ALTER TABLE "UsersInOrganizers" ADD CONSTRAINT "UsersInOrganizers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersInOrganizers" ADD CONSTRAINT "UsersInOrganizers_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "Organizer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "Organizer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
