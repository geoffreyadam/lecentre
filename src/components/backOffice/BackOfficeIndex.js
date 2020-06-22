import React, { Component } from 'react';

export default class BackOfficeIndex extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            counter: 0 
        };
    }

    _test(){
        console.log("clicked")
        fetch("http://127.0.0.1:8000/api/articles/4v8e61bfdqs4789fgf32e38vcxq2ezafbv7489d123fvdeza45b3vfdgvfdfdzafbbb")
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result)
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            console.log(error)
          }
        )


        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://127.0.0.1:8000/api/postArticle/4v8e61bfdqs4789fgf32e38vcxq2ezafbv7489d123fvdeza45b3vfdgvfdfdzafbbb', true);

        //Envoie les informations du header adaptées avec la requête
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() { //Appelle une fonction au changement d'état.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Requête finie, traitement ici.
            }
        }
        xhr.send("foo=bar&lorem=ipsum");
        // xhr.send(new Int8Array()); 
        // xhr.send(document);

        // const url = "http://127.0.0.1:8000/api/postArticle/4v8e61bfdqs4789fgf32e38vcxq2ezafbv7489d123fvdeza45b3vfdgvfdfdzafbbb";

        // const article = {
        //     title: "hey",
        //     body: "description alors"
        // };

        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify(article),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }

        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(res => console.log(res))
    }

    render(){
        return(
              <>
                <header>

                </header>
                <body>
                    <button onClick={() => this._test()}>CLICK</button>
                </body>
              </>
          )
      }
  }


