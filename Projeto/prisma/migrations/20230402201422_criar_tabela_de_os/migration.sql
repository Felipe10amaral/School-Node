-- CreateTable
CREATE TABLE "OrderServices" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "guarantee" TEXT NOT NULL,
    "numberOs" INTEGER NOT NULL,

    CONSTRAINT "OrderServices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrderServices_numberOs_key" ON "OrderServices"("numberOs");
