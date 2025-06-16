const response = await fetch("https://www.google.com");
const html = await response.text();

export { html };