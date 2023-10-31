export function reduceText(testo, lunghezzaMassima) {
  if (testo.length > lunghezzaMassima) {
    return testo.slice(0, lunghezzaMassima) + "...";
  } else {
    return testo;
  }
}
