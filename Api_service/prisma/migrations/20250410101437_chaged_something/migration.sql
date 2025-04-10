-- AlterTable
ALTER TABLE "ApiService" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "termsOfUse" DROP NOT NULL,
ALTER COLUMN "docs" DROP NOT NULL,
ALTER COLUMN "subscriptionPerHalfYear" DROP NOT NULL,
ALTER COLUMN "subscriptionPerMonth" DROP NOT NULL,
ALTER COLUMN "subscriptionPerQuatre" DROP NOT NULL,
ALTER COLUMN "subscriptionPerYear" DROP NOT NULL;
