class Pokemon{
    constructor(name, hp, defense, attack){
        this.name = name;
        this.hp = hp;
        this.defense = defense;
        this.attack = attack;
        this.abilities = [];
    }
}

axios.get('https://pokeapi.co/api/v2/pokemon/1').then((response) => {
    // console.log(response.data);
    let pokedata = response.data
    console.log(pokedata);
    
    let name = pokedata.name
    let hp = pokedata.stats[5].base_stat
    let defense = pokedata.stats[3].base_stat
    let attack = pokedata.stats[4].base_stat
    let pokeAbility = []

     //add abilities to string
     pokedata.abilities.forEach(element =>
        pokeAbility.push(element.ability.name)
    ) // console.log(pokeAbility) 

    // let bulbasaur = {
    //     name: pokedata.name,
    //     hp: pokedata.stats[5].base_stat,
    //     defense: pokedata.stats[3].base_stat,
    //     attack: pokedata.stats[4].base_stat,
    //     pokeAbility:  []
    // }

    let bulbasaur = new Pokemon(name, hp, defense, attack, pokeAbility)
    console.log(bulbasaur)

    kanye.add(bulbasaur)
    
});





