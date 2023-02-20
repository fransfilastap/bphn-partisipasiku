export const loadFont = (path: string) =>
  fetch(new URL(path, import.meta.url)).then((res) => res.arrayBuffer());
