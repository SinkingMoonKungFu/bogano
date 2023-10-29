export function toTitleCase(text) {
  return text
    .toLowerCase()
    .replace(/(?<!\S)\S/gu, (match) => match.toUpperCase());
}

export function fromCamelCaseToTitleCase(text) {
  return toTitleCase(text.replace(/[A-Z]/gu, (match) => ` ${match}`));
}
