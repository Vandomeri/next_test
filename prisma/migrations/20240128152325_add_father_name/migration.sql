/*
  Warnings:

  - Added the required column `fatherName` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "job" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL
);
INSERT INTO "new_user" ("createdAt", "email", "id", "job", "name", "surname") SELECT "createdAt", "email", "id", "job", "name", "surname" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "User_email_key" ON "user"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
