-- AlterTable
ALTER TABLE `cart_details` ADD COLUMN `userAddressId` INTEGER NULL,
    ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `cart_details` ADD CONSTRAINT `cart_details_userAddressId_fkey` FOREIGN KEY (`userAddressId`) REFERENCES `user_address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
