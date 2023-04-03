/*
  Warnings:

  - Added the required column `adm_id` to the `OrderServices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderServices" ADD COLUMN     "adm_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderServices" ADD CONSTRAINT "OrderServices_adm_id_fkey" FOREIGN KEY ("adm_id") REFERENCES "Adm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
