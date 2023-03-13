export const sliceByWord = (
  phrase: string,
  length: number,
  skipEllipses?: boolean
): string => {
  if (phrase.length < length) return phrase;
  else {
    let trimmed = phrase.slice(0, length);
    trimmed = trimmed.slice(
      0,
      Math.min(trimmed.length, trimmed.lastIndexOf(' '))
    );
    return skipEllipses ? trimmed : trimmed + '…';
  }
};
