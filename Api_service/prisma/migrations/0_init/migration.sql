-- CreateEnum
CREATE TYPE "ApiCategory" AS ENUM ('FINANCE', 'WEATHER', 'SOCIAL', 'MAPS', 'ECOMMERCE', 'OTHER');

-- CreateEnum
CREATE TYPE "KeyUsageType" AS ENUM ('HEADERS', 'BODY', 'PARAMETERS');

-- CreateTable
CREATE TABLE "ApiService" (
    "id" TEXT NOT NULL,
    "publisherId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "ApiCategory" NOT NULL,
    "tags" TEXT[],
    "baseUrl" TEXT NOT NULL,
    "availableRoute" TEXT[],
    "applicableFilter" TEXT[],
    "termsOfUse" TEXT NOT NULL,
    "visibility" BOOLEAN NOT NULL,
    "isLive" BOOLEAN NOT NULL,
    "docs" TEXT NOT NULL,
    "suscriptionPerMonth" DOUBLE PRECISION NOT NULL,
    "suscriptionQuater" DOUBLE PRECISION NOT NULL,
    "suscriptionPerHalfYear" DOUBLE PRECISION NOT NULL,
    "suscriptionPerYear" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ApiService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiKey" (
    "id" TEXT NOT NULL,
    "apiId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "whereToUse" "KeyUsageType" NOT NULL,
    "apiKey" TEXT NOT NULL,

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "apiId" TEXT NOT NULL,
    "apiKeyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "apiId" TEXT NOT NULL,
    "apiKeyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "toUser" TEXT NOT NULL,
    "fromUser" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "isOpened" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_apiId_fkey" FOREIGN KEY ("apiId") REFERENCES "ApiService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_apiId_fkey" FOREIGN KEY ("apiId") REFERENCES "ApiService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_apiKeyId_fkey" FOREIGN KEY ("apiKeyId") REFERENCES "ApiKey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_apiId_fkey" FOREIGN KEY ("apiId") REFERENCES "ApiService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_apiKeyId_fkey" FOREIGN KEY ("apiKeyId") REFERENCES "ApiKey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

