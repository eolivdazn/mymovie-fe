-- CreateTable
CREATE TABLE "Cast" (
    "id" SERIAL NOT NULL,
    "adult" BOOLEAN NOT NULL,
    "gender" INTEGER NOT NULL,
    "themoviedbId" INTEGER NOT NULL,
    "knownForDepartment" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL,
    "profilePath" TEXT,
    "castId" INTEGER NOT NULL,
    "character" TEXT NOT NULL,
    "creditId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "Cast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crew" (
    "id" SERIAL NOT NULL,
    "adult" BOOLEAN NOT NULL,
    "gender" INTEGER NOT NULL,
    "themoviedbId" INTEGER NOT NULL,
    "knownForDepartment" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL,
    "profilePath" TEXT,
    "creditId" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "Crew_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "adult" BOOLEAN NOT NULL,
    "backdropPath" TEXT NOT NULL,
    "genreIds" INTEGER[],
    "idThemoviedb" INTEGER NOT NULL,
    "originalLanguage" TEXT NOT NULL,
    "originalTitle" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL,
    "posterPath" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "video" BOOLEAN NOT NULL,
    "voteAverage" DOUBLE PRECISION NOT NULL,
    "voteCount" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cast" ADD CONSTRAINT "Cast_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crew" ADD CONSTRAINT "Crew_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
