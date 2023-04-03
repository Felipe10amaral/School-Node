/*
  Warnings:

  - You are about to drop the column `name` on the `OrderServices` table. All the data in the column will be lost.
  - Added the required column `name_client` to the `OrderServices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tel_client` to the `OrderServices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderServices" DROP COLUMN "name",
ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name_client" TEXT NOT NULL,
ADD COLUMN     "tel_client" TEXT NOT NULL,
ALTER COLUMN "numberOs" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Adm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,

    CONSTRAINT "Adm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Adm_user_key" ON "Adm"("user");
