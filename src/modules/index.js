import { filmes } from "./filmes.json"







function randNome (minDoNome = 0, max = 10) {

    
    const filmeNome = ['Vingadores: Ultimato', 'Vingadores: Guerra Infinita', "2012", "bird-box", "divertida-mente", "ctosd", "ctosd2", "madagascar", "ta-chovendo-hamburger", "lanterna-verde"]
    const rand = Math.floor(Math.random() * (max-minDoNome) + minDoNome);
    const filmerand = filmeNome[rand]

        
    if(filmerand === 'Vingadores: Ultimato') {
        filmeNome.splice(0, 1)
        return filmes["vingadores-Ultimato"].banner
    }
    
    if(filmerand === "Vingadores: Guerra Infinita") {
        filmeNome.splice(1, 1)
        return filmes["vingadores-guerra-infinita"].banner    
    
    }
    
    if(filmerand === "2012") {
    
        filmeNome.splice(2, 1)
        return filmes[2012].banner    
    
    }
    
    if(filmerand === "bird-box") {
    
        filmeNome.splice(3, 1)
        return filmes["bird-box"].banner    
    
    }
    
    if(filmerand ===  "divertida-mente") {
    
        filmeNome.splice(4, 1)
        return filmes["divertida-mente"].banner    
    
    }
    
    if(filmerand === "ctosd") {
        filmeNome.splice(5, 1)
        return filmes["como-treinar-o-seu-dragao"].banner    
    
    }

    if(filmerand === "ctosd2") {
        filmeNome.splice(6, 1)
       return filmes["como-treinar-o-seu-dragao-2"].banner
    }

    if(filmerand === "madagascar") {
        filmeNome.splice(7, 1)
        return filmes.madagascar.banner
    }

    if(filmerand === "ta-chovendo-hamburger") {
        filmeNome.splice(8, 1)
        return filmes["ta-chovendo-hamburger"].banner
    }

    if(filmerand === "lanterna-verde") {
        filmeNome.splice(9, 1)
        return filmes["lanterna-verde"].banner
    }
    }










export {randNome}
