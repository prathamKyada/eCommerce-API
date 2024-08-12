-- AlterTable
ALTER TABLE `product_details` ADD COLUMN `product_sub_category_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `product_details` ADD CONSTRAINT `product_details_product_sub_category_id_fkey` FOREIGN KEY (`product_sub_category_id`) REFERENCES `product_sub_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
