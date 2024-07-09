const params = new URLSearchParams(window.location.search);
const language = params.get("lang");

export const LANG = language == "en";
