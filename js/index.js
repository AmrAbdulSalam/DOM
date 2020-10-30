const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here


// amr star coddding form here

document.getElementById('first').innerText = siteContent.nav['nav-item-1'];
document.getElementById('second').innerText = siteContent.nav['nav-item-2'];
document.getElementById('third').innerText = siteContent.nav['nav-item-3'];
document.getElementById('four').innerText = siteContent.nav['nav-item-4'];
document.getElementById('five').innerText = siteContent.nav['nav-item-5'];
document.getElementById('six').innerText = siteContent.nav['nav-item-6'];
document.querySelector('.logo').src = siteContent.nav['img-src'];

//class cta
document.querySelector('.header').innerText = siteContent.cta.h1;
document.getElementById('firstbtn').innerText = siteContent.cta.button;
document.getElementById('cta-img').src = siteContent.cta["img-src"];

//main content class
document.getElementById('firsth').innerText = siteContent["main-content"]["features-h4"];
document.getElementById('featurercon').innerText = siteContent["main-content"]["features-content"];
document.getElementById('secondh').innerText= siteContent["main-content"]["about-h4"];
document.getElementById('secondp').innerText = siteContent["main-content"]["about-content"];
document.querySelector('.middle-img').src = siteContent["main-content"]["middle-img-src"];
document.getElementById('thirdh').innerText = siteContent["main-content"]["services-h4"];
document.getElementById('thirdp').innerText = siteContent["main-content"]["services-content"];
document.getElementById('fourh').innerText = siteContent["main-content"]["product-h4"];
document.getElementById('fourp').innerText = siteContent["main-content"]["product-content"];
document.getElementById('fiveh').innerText = siteContent["main-content"]["vision-h4"];
document.getElementById('fivep').innerText = siteContent["main-content"]["vision-content"];


document.getElementById('cont').innerText = siteContent.contact["contact-h4"];
document.getElementById('para1').innerText = siteContent.contact.address ;
document.getElementById('para2').innerText = siteContent.contact.phone;
document.getElementById('para3').innerText = siteContent.contact.email;

document.getElementById('copyr').innerText = siteContent.footer.copyright;

//#taasks

const arr = ['first' , 'second' , 'third' , 'four','five' ,'six']

for(let i = 0 ; i < arr.length ; i++){
  document.getElementById(arr[i]).style.color = 'green';
}


//adding 2 elemtns to thr navigation

var additem = document.createElement('a');
additem.innerText = 'navigation1'
document.getElementById('navigat').appendChild(additem);

var additem2 = document.createElement('a');
additem2.innerText = 'navigation2'
document.getElementById('navigat').appendChild(additem2);

