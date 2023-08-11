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
    "id_discount" INTEGER,
    "id_rating" INTEGER,
    "id_review" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

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
    "descriptions" VARCHAR[],

    CONSTRAINT "product_images_pkey" PRIMARY KEY ("id_product")
);

-- AddForeignKey
ALTER TABLE "product_images" ADD CONSTRAINT "product_images" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

