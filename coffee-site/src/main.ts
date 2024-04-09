import {header} from "./components/header";

export default function App() {
    document.getElementById('body').insertAdjacentHTML('afterbegin', `
   ${header()}
`)
}

App();

