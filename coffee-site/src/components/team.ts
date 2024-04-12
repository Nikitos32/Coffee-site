export const team = () => {
    return `
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
    `
}


export const leaveComment = () => {
    const dialog = document.getElementById('modal') as HTMLDialogElement;
    dialog.showModal();
}

export const closeModal = () => {
    const dialog = document.getElementById('modal') as HTMLDialogElement;
    dialog.close();
    (document.getElementById('inputName') as HTMLInputElement).value = '';
    (document.getElementById('inputTel') as HTMLInputElement).value = '';
    (document.getElementById('inputEmail') as HTMLInputElement).value = '';
    (document.getElementById('inputLink') as HTMLInputElement).value = '';
}
