-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_id_product_fkey";

-- DropForeignKey
ALTER TABLE "collections" DROP CONSTRAINT "collections_id_product_fkey";

-- DropForeignKey
ALTER TABLE "detail_transactions" DROP CONSTRAINT "detail_transactions_id_product_fkey";

-- DropForeignKey
ALTER TABLE "detail_transactions_no_login" DROP CONSTRAINT "detail_transactions_no_login_idProduct_fkey";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "categories" INTEGER[],
ADD COLUMN     "collections" INTEGER[];
