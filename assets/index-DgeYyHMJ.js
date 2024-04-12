(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function n(){return`
    <div class="wrapper-info border-bottom" id="info">
    <div class="chain">
    <div class="blur">
    <p class="p-chain p-24">СЕТЬ КОФЕЕН COFFEE DELIGHT В БЕЛАРУСИ</p>
    <p class="p-improve p-18">Развиваем кофейни с посадкой и кофейни самообслуживания</p>
    <button class="more-info btn">Узнать Подробнее</button>
    </div>
</div>
<div class="picture-about">
<p class="p-stat">COFFEE DELIGHT сегодня - более 50 кофеен с посадкой и более 100 кофеен самообслуживания по всей Беларуси</p>
</div>
</div>
  `}const l=()=>`
    <div class="wrapper-info border-bottom"> 
    <div class="section-numbers">
    <p class="p-18">МЫ - БЫСТРОРАСТУЩАЯ СЕТЬ КОФЕЕН БЕЛАРУСИ</p>
    <div class="stat">
    <div class="stat-div"><p>56</p> <p class="text-center">Кофейни с посадкой открыто сейчас</p></div>
    <div class="stat-div"><p>100</p> <p class="text-center">Кофеен самообслуживания</p></div>
    <div class="stat-div"><p>200 000</p> <p class="text-center">Продаем напитков ежемесячно</p></div>
    <div class="stat-div"><p>140 000</p> <p class="text-center">Человек приходят к нам ежемесячно</p></div>
</div>
</div>
    <div class="text-idea-way">
    <div class="section">
    <h3 class="idea">Идея</h3>
    <p class="alot-text text-stretch">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto asperiores consectetur consequatur cum debitis dolorem dolores, earum impedit in ipsam ipsum laborum laudantium libero, magni molestiae nam necessitatibus nihil numquam odit omnis porro quas quidem quod ratione recusandae rem repellat similique tempora tenetur totam ullam velit voluptatum. Id, optio.</p>
    </div>
    <div class="section">
    <h3 class="way">Направление</h3>
    <p class="alot-text text-stretch">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea, error ex harum iste odio quisquam repellendus sit vel vero! At atque error eum explicabo ipsum iure nam pariatur provident, quae, quaerat quisquam ratione similique, ullam. Assumenda delectus magni, non odit quisquam rem repudiandae? Aperiam explicabo sint totam velit vero.</p>
    </div>
    </div>
</div>
    `,d=()=>`
    <div class="wrapper-info border-bottom" id="address"> 
    <div class="city">
    <p class="p-city">СЕГОДНЯ COFFEE DELIGHT ПРЕДСТАВЛЕНА В 10-ТИ ГОРОДАХ БЕЛАРУСИ</p>
    <p class="p-locate">Кофейни расположены в следующих городах: Минск, Барановичи, Новополоцк, Витебск, Слуцк, Солигорск, Гомель, Вилейка, Молодечно и Мозырь</p>
    <button class="more-info btn"><a class="a-more-info" href="https://www.google.com/maps/search/%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D0%B8+%D0%BC%D0%B8%D0%BD%D1%81%D0%BA/@53.89014,27.5677181,12z/data=!3m1!4b1?entry=ttu">Смотреть Адреса</a></button>
</div>
   <div class="text-idea-way">
   <a href="https://www.google.com/maps/search/%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D0%B8+%D0%BC%D0%B8%D0%BD%D1%81%D0%BA/@53.89014,27.5677181,12z/data=!3m1!4b1?entry=ttu">
   <img class="map-img" src="/img/map.jpg" alt="map">
   </a>
</div>
</div>
    `,r=()=>`
    <div class="team-wrapper border-bottom" id="vacancies">
    <p class="text-team text-center p-24">СТАНЬТЕ ЧАСТЬЮ ДРУЖНОЙ СЕМЬИ КОФЕЕН COFFEE DELIGHT</p>
    <div class="main-section-vacancy">
    <div class="our-vacancy">
    <p>Актулаьные вакансии</p>
    <div class="vacancies">
    <div class="vacancy">
    <p class="text-center">Менеджер отдела сопровождения</p>
    <button class="btn">Подробнее</button>
</div>
    <div class="vacancy">
    <p class="text-stretch">Менеджер по продажам</p>
    <button class="btn">Подробнее</button>
</div>
</div>
</div>
<button class="leave-comment btn" id="leave">Оставьте заявку</button>
</div>
</div>
    `,p=()=>{document.getElementById("modal").showModal()},m=()=>{document.getElementById("modal").close(),document.getElementById("inputName").value="",document.getElementById("inputTel").value="",document.getElementById("inputEmail").value="",document.getElementById("inputLink").value=""},u=()=>`
    <div class="stock-wrapper border-bottom" id="stock">
    <p class="stock-text p-24">Акции</p>
    <div class="vacancies">
     <div class="vacancy">
    <p class="text-center">Плати за кофе сколько хочешь</p>
    <button class="btn">Подробнее</button>
    </div>
     <div class="vacancy">
    <p class="text-center">3-й кофе в подарок</p>
    <button class="btn">Подробнее</button>
    </div>
     <div class="vacancy">
    <p class="text-center">Скидка 10% в свой стакан</p>
    <button class="btn">Подробнее</button>
</div>
</div>
<button class="leave-comment btn">Смотреть все</button>
</div>
    `,v=()=>`
    <div class="comments-wrapper border-bottom" id="comments">
    <p class="comments-text p-24">Отзывы</p>
    <div class="comments-div">
    <div class="user-comment">Отзыв 1</div>
    <div class="user-comment">Отзыв 2</div>
    <div class="user-comment">Отзыв 3</div>
    <div class="user-comment">Отзыв 4</div>
    <div class="user-comment">Отзыв 5</div>
</div>
</div>
    `,b=()=>`
    <div class="footer-wrapper" id="footer"> 
    <p class="p-24">Контакты</p>
    <div class="main-footer">
    <div class="address-info-wrapper">
    <div class="address-info">Адрес главного офиса: Минск, ул. Сурганова, 2, Офис 402,406,409</div>
    <div class="call"><a href="tel:+37544521-33-58" class="tel">+375 (44) 521-33-58</a><div class="call-number"><a href="tel:+37544521-33-58">Позвонить </a><i class="material-icons">call</i></div></div>
</div>
    <div class="img-wrapper"><img class="map-img" src="/img/map.jpg" alt="office"></div>
    <div class="date">
    <p>Время работы: ПН-ПТ: 09:00-19:00</p>
    <p>Для маркетинга: coffeedelight@mail.ru</p>
    <p>Поставщикам: coffee.delight@gmail.com</p>
    <p>Предложить помещение: arendacoffee@gmail.com</p>
</div>
</div>
    
</div>
    `;function f(){return`
    <dialog id="modal" class="modal">
    <div class="header-modal">
  <p>Работа в COFFEE DELIGHT</p>
  <button class="btn" id="closeModal">X</button>
  </div>
  <form method="dialog" class="form">
  <input type="text" placeholder="Имя" required id="inputName">
  <input type="tel" placeholder="Телефон" required id="inputTel">
  <input type="email" placeholder="email" required id="inputEmail">
  <input type="text" placeholder="Ссылка на резюме" required id="inputLink">
  <select name="position" id="position">
  <option value="programmer">Программист</option>
  <option value="manager">Менеджер</option>
</select>
    <button class="btn">Отправить</button>
  </form>
</dialog>
    `}const g=()=>`
${f()}
     <div class="background">
    <div class="wrapper">
    <div class="header">
    <div class="contact-info">
    <div class="logo"><img class="logo-img" src="/img/coffee-logo.png" alt="logo"></div>
    <div class="wrapper-contacts">
    <div class="title"><p class="coffee-name">COFFEE-DELIGHT</p><p class="p-18">Кофейня</p></div>
    <div class="contacts">
    <div class="social">
    <button class="viber btn"><img class="icon" src="/icons/viber.png" alt="tg"></button>
    <button class="tg btn"><img class="icon" src="/icons/tg.png" alt="tg"></button>
    <button class="inst btn"><img class="icon" src="/icons/inst.png" alt="tg"></button>
</div>
    <div class="call"><a href="tel:+37544521-33-58" class="tel">+375 (44) 521-33-58</a><div class="call-number"><a href="tel:+37544521-33-58">Позвонить </a><i class="material-icons">call</i></div></div>
</div>
   </div>
</div>
    <div class="menu-btns">
    <a href="#info"><div class="about-us menu-btn">О нас</div></a>
    <a href="#address"><div class="about-us menu-btn">Адреса</div></a>
    <a href="#vacancies"><div class="address menu-btn">Вакансии</div></a>
    <a href="#stock"><div class="stock menu-btn" >Акции</div></a>
    <a href="#comments"><div class="comments menu-btn">Отзывы</div></a>
    <a href="#footer"><div class="contact menu-btn">Контакты</div></a>
</div>
</div>
${n()}
${l()}
${d()}
${r()}
${u()}
${v()}
${b()}
</div>
</div>  
 `;function h(){document.getElementById("body").insertAdjacentHTML("afterbegin",`
   ${g()}
`);const i=document.getElementById("leave");i.onclick=p;const s=document.getElementById("closeModal");s.onclick=m}h();
