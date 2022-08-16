// Soldier
class Soldier {
    constructor(health, strength) {
       this.health = health
       this.strength = strength
      };

    attack(){
        return this.strength;
    };
    receiveDamage(damage){
      this.health -= damage;
    };
    
}
 
// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
    super(health, strength);
    this.name = name;
};
    receiveDamage(damage){
      this.health -= damage;
      if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`
      } if (this.health <= 0){
        return `${this.name} has died in act of combat`
      };
    };
    battleCry(){
        return `Odin Owns You All!`;
    };
};


// Saxon
class Saxon extends Soldier { 
    
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
          return `A Saxon has received ${damage} points of damage`
        } if (this.health <= 0){
          return `A Saxon has died in combat`
        };
  }
}
// War
class War {
    constructor (){
        this.vikingArmy = []
        this.saxonArmy = []
    };
     
     addViking(Viking){
    this.vikingArmy.push(Viking)
}

     addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
}

     vikingAttack(){
        let randomViking = Math.round(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.round(Math.random() * this.saxonArmy.length)
        
        let viking = this.vikingArmy[randomViking]
        let saxon = this.saxonArmy[randomSaxon]

       let result1 = saxon.receiveDamage(viking.attack())

        if (saxon.health <= 0){
             this.saxonArmy.splice(randomSaxon, 1)
        }
       return result1;
}

     saxonAttack(){
        let randomViking = Math.round(Math.random() * this.vikingArmy.length)
        let randomSaxon = Math.round(Math.random() * this.saxonArmy.length)

        let viking = this.vikingArmy[randomViking]
        let saxon = this.saxonArmy[randomSaxon]

        let result2 = viking.receiveDamage(saxon.attack());

        if (viking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1)
       }
       return result2;
}

     showStatus(){
    if (!this.saxonArmy.length){
        return `Vikings have won the war of the century!`
    } if (!this.vikingArmy.length){
        return `Saxons have fought for their lives and survived another day...`
    } if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
        return `Vikings and Saxons are still in the thick of battle.`
    }
}
}
const war = new War();

const saxon1 = new Saxon(100, 40)
const saxon2 = new Saxon(100, 40)
const saxon3 = new Saxon(100, 40)
const saxon4 = new Saxon(100, 40)

const viking1 = new Viking(100, 40)
const viking2 = new Viking(100, 40)
const viking3 = new Viking(100, 40)
const viking4 = new Viking(100, 40)

war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);
war.addSaxon(saxon4);

war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);
war.addViking(viking4);

war.vikingAttack()
war.saxonAttack()
war.vikingAttack()
war.vikingAttack()
war.saxonAttack()
war.saxonAttack()
war.vikingAttack()
war.saxonAttack()
war.vikingAttack()
war.saxonAttack()
war.vikingAttack()
war.saxonAttack()
war.vikingAttack()
war.saxonAttack()

console.log(war.showStatus)