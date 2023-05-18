
class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});  //anexar uma sombra e o modo está aberto (permite alteração js externo)

        const componentRoot = document.createElement("h1"); //critar elemento
        componentRoot.textContent = this.getAttribute("titulo");
        // componentRoot.textContent = "João Pedro" ;   //adicionar texto no elemento

        const style = document.createElement("style");
        style.textContent=`
            h1{
                color:red;
            }
        `;

        shadow.appendChild(componentRoot);  //adicionar ao shadow
        shadow.appendChild(style);
    }
}
customElements.define("titulo-dinamico",TituloDinamico);  //.define define qual elemento customizada está sendo criado
//primeiro define o nome dele, e dps diz quem é a classe/ o molde / o construtor dele