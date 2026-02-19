export const decodeText = (text: string) => {
  const decodedText = decodeURIComponent(text);

  return decodedText.slice(0, 1).toUpperCase() + decodedText.slice(1);
};
