import info from "./info";
import {statistic} from "./statistic";
import {cityInfo} from "./cityInfo";
import {team} from "./team";
import {stock} from "./stock";
import {comments} from "./comments";
import {footer} from "./footer";

export const header = () => {
    return `
     <div class="background">
    <div class="wrapper">
    <div class="header">
    <div class="contact-info">
    <div class="logo"><img class="logo-img" src="../public/img/coffee-logo.png" alt="logo"></div>
    <div class="wrapper-contacts">
    <div class="title"><p class="coffee-name">COFFEE-DELIGHT</p><p class="p-18">Кофейня</p></div>
    <div class="contacts">
    <div class="social">
    <button class="viber btn"><img class="icon" src="../public/icons/viber.png" alt="tg"></button>
    <button class="tg btn"><img class="icon" src="../public/icons/tg.png" alt="tg"></button>
    <button class="inst btn"><img class="icon" src="../public/icons/inst.png" alt="tg"></button>
</div>
    <div class="call"><a href="tel:+37544521-33-58" class="tel">+375 (44) 521-33-58</a><div class="call-number"><a href="tel:+37544521-33-58">Позвонить </a><i class="material-icons">call</i></div></div>
</div>
   </div>
</div>
    <div class="menu-btns">
    <button class="about-us btn" id="about">О нас</button>
    <button class="about-us btn" id="about">Адреса</button>
    <button class="address btn" id="address">Вакансии</button>
    <button class="menu btn" id="vacancy">Меню</button>
    <button class="stock btn" id="menu">Акции</button>
    <button class="comments btn" id="stock">Отзывы</button>
    <button class="contact btn" id="contact">Контакты</button>
</div>
</div>
${info()}
${statistic()}
${cityInfo()}
${team()}
${stock()}
${comments()}
${footer()}
</div>
</div>  
 `
}
