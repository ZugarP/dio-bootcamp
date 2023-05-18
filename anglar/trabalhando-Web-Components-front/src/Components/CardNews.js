class CardNews extends HTMLElement{
    constructor(){              //primeira coisa a ser executada
        super();

        const shadow = this.attachShadow({mode:"open"}) ;  //anexar uma sombra e o modo está aberto (permite alteração js externo)
        //shadow.innerHTML="<h1>saskdjbnasodnasiod</h1>";   // colocar o conteudo digitado na shadow criada
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){            // vai contruir a parte dos elementos
        const componentRoot = document.createElement("div");           //criar elemento
        componentRoot.setAttribute("class", "card");                //adicionar atributo (tipo,nome)


        const cardLeft = document.createElement("div");             //criar elemento
        cardLeft.setAttribute("class", "card_left")              //adicionar atributo (tipo,nome)

        const autor = document.createElement("span");              //criar elemento
        autor.textContent = "By "+ ( this.getAttribute("autor") || "Anonymous");        //pegar atributo de autor

        const linkTitle = document.createElement("a");                 //criar elemento
        linkTitle.textContent= this.getAttribute("title")           //pegar atributo de  title
        linkTitle.href = this.getAttribute("link-url");         //pegar atributo de link-url

        const newsContent = document.createElement("p");            //criar elemento
        newsContent.textContent=this.getAttribute("content");  //pegar atributo de content

        cardLeft.appendChild(autor);                                //colocando eles como filho do cardLeft
        cardLeft.appendChild(linkTitle);                        //colocando eles como filho do cardLeft
        cardLeft.appendChild(newsContent);                   //colocando eles como filho do cardLeft


        const cardRight = document.createElement("div");        //criar elemento
        cardRight.setAttribute("class", "card_right")            //adicionar atributo (tipo,nome)

        const newsImage=document.createElement("img");          //criar elemento
        newsImage.src = this.getAttribute("photo")|| "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg";
        newsImage.alt="foto da noticias"
        cardRight.appendChild(newsImage);                       //colocando eles como filho cardRight
        

        componentRoot.appendChild(cardLeft);        //colocando eles como filho do componentRoot
        componentRoot.appendChild(cardRight);       //colocando eles como filho do componentRoot

        return componentRoot;

    }

    styles(){           //vai aplicar os estilos 
        const style = document.createElement("style");
        style.textContent= `
       
            .card{
                width:80%;
                border: 1px solid gray;
                box-shadow: 9px 9px 27px 0px rgb(24, 23, 23);
                -webkit-box-shadow: 9px 9px 27px 0px rgb(24, 23, 23);
                -moz-box-shadow:9px 9px 27px 0px rgb(24, 23, 23);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            
            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            
            }
            
            .card_left > a{
                margin-top: 15px;
                font-size: 35px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            .card_left > p{
                color: grey;
            }
            
            .card_left > span{
                font-weight: 400;
            }
            .card_right > img{
                width: 300px;
            }
            

            `
        return style
    }

}

customElements.define("card-news", CardNews) ;         //.define define qual elemento customizada está sendo criado
//primeiro define o nome dele, e dps diz quem é a classe/ o molde / o construtor dele