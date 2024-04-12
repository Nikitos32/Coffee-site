import info from "./info";
import {statistic} from "./statistic";
import {cityInfo} from "./cityInfo";
import {team} from "./team";
import {stock} from "./stock";
import {comments} from "./comments";
import {footer} from "./footer";
import modal from "./modal";

export const header = () => {
    return `
${modal()}
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
