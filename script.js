document.head.innerHTML = '';
document.body.innerHTML = '';

let title = document.createElement('title');
title.innerHTML = 'Contact JS';
let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

document.head.appendChild(title);
document.head.appendChild(metaUtf8);


let h1 = document.createElement('h1');
h1.innerHTML = 'Контакты';

let p1 = document.createElement('p');
p1.innerHTML = 'Конта́кт (от лат. contactus «прикосновение») — поверхность соприкосновения чего-либо; взаимодействие, связь, сотрудничество. Геологический контакт. Электрический контакт. Нормально замкнутые контакты. Нормально разомкнутые контакты.';

let div1 = document.createElement('div');
div1.classList.add('block');

let p2 = document.createElement('p');
p2.innerHTML = 'Это обусловлено хорошими высокочастотными свойствами контакта металл– полупроводник и развитием технологий изготовления полупро-водниковых приборов. 2.1. Свойства контакта металл – полупроводник.';

let span1 = document.createElement('span');
span1.innerHTML = ' TEXT';

let ul1 = document.createElement('ul');
ul1.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
<li>Item 5</li>
`;

let h2 = document.createElement('h2');
h2.innerHTML = 'Инфо';

let liN = document.createElement('li');
liN.innerHTML = 'Item New';

let banner = document.createElement('div');
banner.innerHTML = 'Любой контакт за деньги, дорого!';
banner.classList.add('banner1');
banner.style.backgroundColor = '#999';
banner.style.color = '#fff';
banner.style.fontSize = '36px';
banner.style.fontWeight = 'bold';
banner.style.padding = '40px';
banner.style.width = '555px';

let style = document.createElement('style');
style.innerHTML = `
.banner1 {
position: fixed;
top: 10%;
left: 50%;
margin-left: -313px;
box-shadow: 0 0 20px #ccc;
border-radius: 5px;
}`;
document.head.appendChild(style);

let span1Cl = span1.cloneNode(true);


document.body.appendChild(h1);
document.body.appendChild(p1);
document.body.appendChild(div1);
div1.appendChild(p2);
p1.appendChild(span1);
document.body.appendChild(ul1);
document.body.insertBefore(h2, document.querySelector('.block'));
ul1.insertBefore(liN, ul1.querySelector('li:nth-child(5)'));
document.body.insertBefore(banner, document.body.firstElementChild);
document.body.insertBefore(span1Cl, p1);
document.body.appendChild(p1);

// banner.remove();

ul1.removeChild(ul1.querySelector('li:nth-child(2)'));