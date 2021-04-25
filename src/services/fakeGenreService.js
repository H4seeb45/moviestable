export const genres = [
  { _id: "818", name: "Action" },
  { _id: "814", name: "Comedy" },
  { _id: "820", name: "Thriller" },
];

export default function getGenres() {
  return genres.filter((g) => g);
}
