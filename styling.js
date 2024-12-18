const header = document.createElement('header');

const main = document.createElement('main');
const footer = document.createElement('footer');
const nav = document.createElement('nav');

header.style.height = '100px';
header.style.backgroundColor = '#FF6B6B';

main.style.height = '400px';
main.style.backgroundColor = '#4ECDC4';

footer.style.height = '80px';
footer.style.backgroundColor = '#45B7D1';

nav.style.height = '60px';
nav.style.backgroundColor = '#96CEB4';

document.body.append(header, nav, main, footer);