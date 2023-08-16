-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "image" TEXT,
    "stock" INTEGER,
    "price" INTEGER,
    "id_category" INTEGER,
    "id_lookbook" INTEGER,
    "id_new_collection" INTEGER,
    "id_rating" INTEGER,
    "id_review" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "discount" INTEGER,
    "sizes" VARCHAR[],
    "colors" VARCHAR[],

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collections" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,

    CONSTRAINT "collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_images" (
    "id_product" INTEGER NOT NULL,
    "images" VARCHAR[],

    CONSTRAINT "product_images_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "detail_transactions" (
    "id_detail_trasaction" INTEGER NOT NULL,
    "id_transaction" INTEGER,
    "id_product" INTEGER,
    "quantity" INTEGER,
    "size" VARCHAR,
    "color" VARCHAR,
    "created_at" TIME(6),

    CONSTRAINT "detail_transactions_pkey" PRIMARY KEY ("id_detail_trasaction")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id_trasaction" INTEGER NOT NULL,
    "id_user" INTEGER,
    "total_quantity" INTEGER,
    "total_price" INTEGER,
    "created_at" TIME[],

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id_trasaction")
);

-- AddForeignKey
ALTER TABLE "product_images" ADD CONSTRAINT "product_images" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

