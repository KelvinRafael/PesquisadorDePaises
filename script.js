document.getElementById('card').style.setProperty('display', 'none', 'important') //Aqui eu estou entrado no meu card e setando a propriedade none paa o displar e definindo ele como importante para o JS o considere como prioridade ao executar


function Procurar(){
    document.getElementById('card').style.setProperty('display', 'block', 'important') //Aqui eu estou tornando visivel novamente o meu card
    alert('Funcionando')                        

    let pais = document.getElementById('inputPais').value
     fetch(`https://restcountries.com/v3.1/name/${pais}?fullText=true`)
        .then(function(response){
            return response.json()
        })

        .then(function(data){
            console.log(data[0]) //Eu pedi para ele me trazer o indice 0 dda capital pq tem paises que podem ter mais de uma capital, desta forma ele só vai trazer a primeira.

        let bandeira = document.getElementById('bandeiraCard')
        let nome = document.getElementById('nomePaisCard')
        let capital = document.getElementById('capital')
        let continente = document.getElementById('continente')
        let populacao = document.getElementById('populacao')

        
        nome.innerHTML = pais
        capital.innerHTML = data[0].capital[0]
        continente.innerHTML =  data[0].continents[0]
        populacao.innerHTML = data[0].population
        bandeira.src = data[0].flags.svg

        })




}