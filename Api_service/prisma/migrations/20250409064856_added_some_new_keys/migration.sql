/*
  Warnings:

  - You are about to drop the column `suscriptionPerHalfYear` on the `ApiService` table. All the data in the column will be lost.
  - You are about to drop the column `suscriptionPerMonth` on the `ApiService` table. All the data in the column will be lost.
  - You are about to drop the column `suscriptionPerYear` on the `ApiService` table. All the data in the column will be lost.
  - You are about to drop the column `suscriptionQuater` on the `ApiService` table. All the data in the column will be lost.
  - Added the required column `isPaid` to the `ApiService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isSecured` to the `ApiService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rateLimit` to the `ApiService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionPerHalfYear` to the `ApiService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionPerMonth` to the `ApiService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionPerQuatre` to the `ApiService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionPerYear` to the `ApiService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApiService" DROP COLUMN "suscriptionPerHalfYear",
DROP COLUMN "suscriptionPerMonth",
DROP COLUMN "suscriptionPerYear",
DROP COLUMN "suscriptionQuater",
ADD COLUMN     "isPaid" BOOLEAN NOT NULL,
ADD COLUMN     "isSecured" BOOLEAN NOT NULL,
ADD COLUMN     "rateLimit" INTEGER NOT NULL,
ADD COLUMN     "subscriptionPerHalfYear" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "subscriptionPerMonth" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "subscriptionPerQuatre" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "subscriptionPerYear" DOUBLE PRECISION NOT NULL;
