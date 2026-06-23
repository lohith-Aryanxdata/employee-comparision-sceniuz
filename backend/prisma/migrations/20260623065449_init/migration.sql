-- CreateEnum
CREATE TYPE "Role" AS ENUM ('EMPLOYEE', 'ADMIN');

-- CreateEnum
CREATE TYPE "AnswerOption" AS ENUM ('A', 'B', 'C', 'D');

-- CreateEnum
CREATE TYPE "AttemptStatus" AS ENUM ('IN_PROGRESS', 'SUBMITTED', 'AUTO_SUBMITTED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "department" TEXT,
    "role" "Role" NOT NULL DEFAULT 'EMPLOYEE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "self_assessments" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "html_rating" INTEGER NOT NULL,
    "css_rating" INTEGER NOT NULL,
    "js_rating" INTEGER NOT NULL,
    "react_rating" INTEGER NOT NULL,
    "communication_rating" INTEGER NOT NULL,
    "problem_solving_rating" INTEGER NOT NULL,
    "overall_percentage" DOUBLE PRECISION NOT NULL,
    "completed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "self_assessments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "question_text" TEXT NOT NULL,
    "option_a" TEXT NOT NULL,
    "option_b" TEXT NOT NULL,
    "option_c" TEXT NOT NULL,
    "option_d" TEXT NOT NULL,
    "correct_answer" "AnswerOption" NOT NULL,
    "topic" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_attempts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submitted_at" TIMESTAMP(3),
    "time_taken_seconds" INTEGER,
    "score_percentage" DOUBLE PRECISION,
    "total_questions" INTEGER NOT NULL,
    "correct_answers" INTEGER,
    "status" "AttemptStatus" NOT NULL DEFAULT 'IN_PROGRESS',

    CONSTRAINT "test_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "responses" (
    "id" TEXT NOT NULL,
    "attempt_id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "selected_answer" "AnswerOption",
    "is_correct" BOOLEAN,
    "answered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "responses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "self_assessments_user_id_key" ON "self_assessments"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "responses_attempt_id_question_id_key" ON "responses"("attempt_id", "question_id");

-- AddForeignKey
ALTER TABLE "self_assessments" ADD CONSTRAINT "self_assessments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_attempts" ADD CONSTRAINT "test_attempts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responses" ADD CONSTRAINT "responses_attempt_id_fkey" FOREIGN KEY ("attempt_id") REFERENCES "test_attempts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responses" ADD CONSTRAINT "responses_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
