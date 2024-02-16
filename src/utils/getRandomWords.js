const TEXT_FILE_URL = "https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-usa-no-swears-medium.txt";

export default async (count = 100) => {
  try {
    const response = await fetch(TEXT_FILE_URL);
    const data = await response.text();
    const words = data.split("\n");
    const randomWords = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      randomWords.push(words[randomIndex]);
      words.splice(randomIndex, 1);
    }
    return randomWords;
  } catch (error) {
    console.error(error);
  }
};
