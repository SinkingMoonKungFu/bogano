export function toTitleCase(text) {
  return text
    .toLowerCase()
    .replace(/(?<!\S)\S/gu, (match) => match.toUpperCase());
}

export function fromCamelCaseToTitleCase(text) {
  return toTitleCase(text.replace(/[A-Z]/gu, (match) => ` ${match}`));
}

export function formatPhoneNumberInTextField(aInputText, lastCharCode) {
  lastCharCode = typeof lastCharCode !== "undefined" ? lastCharCode : 1;

  // Strip all characters from the input except numerical digits
  aInputText = aInputText.replace(/\D/g, "");

  // Trim the remaining input to ten characters, to preserve phone number format (US)
  aInputText = aInputText.substring(0, 10);

  // Add formatting as we go along
  var size = aInputText.length;
  if (size === 0) {
    return aInputText;
  } else if (size < 3 || (size === 3 && lastCharCode === 8)) {
    // There are less than 3 characters, or we have exactly 3 characters
    // and the last key was a backspace.
    aInputText = "(" + aInputText;
  } else if (size === 3) {
    aInputText = "(" + aInputText.substring(0, 3) + ")";
  } else if (size < 7) {
    aInputText =
      "(" + aInputText.substring(0, 3) + ") " + aInputText.substring(3, 6);
  } else {
    aInputText =
      "(" +
      aInputText.substring(0, 3) +
      ") " +
      aInputText.substring(3, 6) +
      "-" +
      aInputText.substring(6, 10);
  }

  return aInputText;
}

export function deformatPhoneNumber(value) {
  // Remove any non-digits
  return value.replace(/\D/g, "");
}
