const colors: string[] = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-indigo-500"
];

const generarColor = (): string => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export default generarColor;