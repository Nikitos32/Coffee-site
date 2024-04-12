import {header} from "./components/header";
import {closeModal, leaveComment} from "./components/team";

export default function App() {
    document.getElementById('body').insertAdjacentHTML('afterbegin', `
   ${header()}
`)
    const btn = document.getElementById('leave') as HTMLButtonElement;
    btn.onclick = leaveComment;
    const closeBtn = document.getElementById('closeModal') as HTMLButtonElement;
    closeBtn.onclick = closeModal;
}

App();

