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
