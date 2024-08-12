/*
  Warnings:

  - A unique constraint covering the columns `[product_id,userId]` on the table `cart_details` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `cart_details_product_id_userId_key` ON `cart_details`(`product_id`, `userId`);
