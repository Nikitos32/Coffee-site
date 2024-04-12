export default function modal() {
    return `
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
    `
}
