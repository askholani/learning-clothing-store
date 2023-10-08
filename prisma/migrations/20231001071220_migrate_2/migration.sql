-- CreateTable
CREATE TABLE "products" (
    "id_product" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "image" TEXT,
    "stock" INTEGER,
    "price" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "discount" INTEGER,
    "sizes" VARCHAR[],
    "colors" VARCHAR[],
    "product_images" TEXT[],

    CONSTRAINT "products_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "categories" (
    "id_product" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,
    "name" VARCHAR,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "collections" (
    "id_product" TEXT NOT NULL,
    "id_collection" TEXT NOT NULL,
    "name" VARCHAR,

    CONSTRAINT "collections_pkey" PRIMARY KEY ("id_collection")
);

-- CreateTable
CREATE TABLE "detail_transactions" (
    "id_detail_transactions" TEXT NOT NULL,
    "id_transaction" TEXT,
    "id_product" TEXT,
    "quantity" INTEGER,
    "size" VARCHAR,
    "color" VARCHAR,
    "created_at" TIME(6),
    "shipping_methode" VARCHAR,
    "payment_methode" VARCHAR,

    CONSTRAINT "detail_transactions_pkey" PRIMARY KEY ("id_detail_transactions")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id_transaction" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "total_quantity" INTEGER NOT NULL,
    "total_price" INTEGER NOT NULL,
    "created_at" TIME[],

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id_transaction")
);

-- CreateTable
CREATE TABLE "detail_transactions_no_login" (
    "id_transaction_no_login" TEXT NOT NULL,
    "id_transaction" TEXT,
    "idProduct" TEXT,
    "quantity" INTEGER,
    "size" VARCHAR,
    "created_at" TIMESTAMPTZ(6),
    "email" VARCHAR,
    "phone" INTEGER,
    "address" VARCHAR,
    "name" VARCHAR,
    "shipping_methode" VARCHAR,
    "payment_method" VARCHAR,

    CONSTRAINT "detail_transactions_no_login_pkey" PRIMARY KEY ("id_transaction_no_login")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id_account" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id_account")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id_session" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id_session")
);

-- CreateTable
CREATE TABLE "users" (
    "id_user" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_token_key" ON "verification_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collections" ADD CONSTRAINT "collections_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detail_transactions" ADD CONSTRAINT "detail_transactions_id_transaction_fkey" FOREIGN KEY ("id_transaction") REFERENCES "transactions"("id_transaction") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detail_transactions" ADD CONSTRAINT "detail_transactions_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id_product") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_id_transaction_fkey" FOREIGN KEY ("id_transaction") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detail_transactions_no_login" ADD CONSTRAINT "detail_transactions_no_login_id_transaction_fkey" FOREIGN KEY ("id_transaction") REFERENCES "transactions"("id_transaction") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detail_transactions_no_login" ADD CONSTRAINT "detail_transactions_no_login_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "products"("id_product") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
