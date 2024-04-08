function randomNumberAttack(a1, a2) {
    return Math.floor(Math.random() * (a1-a2));
}

const app = Vue.createApp({
    data(){
        return{
            monsterHealth:100,
            playerHealth: 100,
            gameLogs: [],
            specialTimeout: false,
            healTimeout: false,
            winner: null,

        }
    },
    computed:{
        monsterHealthBar(){
            return {width: this.monsterHealth + '%'}
        },
        playerHealthBar(){
            return {width: this.playerHealth + '%'}
        },
        showWinner(){
            return {hidden: this.winner === null, visible: this.winner !== null}
        }
    },
    watch:{
        playerHealth(value){
            var gameOver = ''

            if(value <=0 && this.monsterHealth <=0){
                gameOver = {action: 'Draw !!'}
                this.winner ='DRAW'
            }else if(this.playerHealth <= 0){
                gameOver = {action: 'Player Defeated. Monster Wins'}
                this.winner ='MONSTER'
            }
            if(gameOver !== ''){
                this.gameLogs.unshift(gameOver)
            }

        },
        monsterHealth(value){
            var gameOver = ''
            if(value <=0 && this.playerHealth <=0){
                gameOver = {action: 'Draw !!'}
                this.winner ='DRAW'
            }else if(this.monsterHealth <= 0){
                gameOver = {action: 'Monster Defeated. Player Wins!'}
                this.winner ='PLAYER'
            }

            if(gameOver !== ''){
                this.gameLogs.unshift(gameOver)
            }
        }
    },


    methods:{
        restartGame(){
            location.reload()
        },

        logHandle(player, monster, action) {
            const actions = {
                'attack': {
                    playerLog: {action: 'Player attacked Monster', value: player},
                    monsterLog: {action: 'Monster attacked Player', value: monster}
                },
                'heal': {
                    playerLog: {action: 'Player healed', value: player},
                    monsterLog: {action: 'Monster healed', value: monster},
                    
                },
                'specialAttack': {
                    playerLog: {action: 'Player attacked Monster with a Special Attack', value: player},
                    monsterLog: {action: 'Monster attacked Player', value: monster}
                },
                'surrender': {
                    playerLog: {action: 'Player surrendered', value: player},
                    
                }
            };

            if (actions[action]) {
                const LogPlayer = actions[action].playerLog;
                const LogMonster = actions[action].monsterLog;
                this.gameLogs.unshift(LogPlayer)
                if (LogMonster){
                    this.gameLogs.unshift(LogMonster);
                }
            }
        },

        attack(){
            var playerAttack =  randomNumberAttack(7, 2) +2
            var monsterAttack = randomNumberAttack(9, 3) + 3
            this.monsterHealth -= playerAttack
            this.playerHealth -= monsterAttack
            this.logHandle(playerAttack, monsterAttack, 'attack')

        },
        specialAttack(){

            var playerAttack = randomNumberAttack(13, 5) +3
            var monsterAttack = randomNumberAttack(5, 0) + 3
            this.monsterHealth -= playerAttack
            this.playerHealth -= monsterAttack
            this.logHandle(playerAttack, monsterAttack, 'specialAttack')
            this.specialTimeout = true
            setTimeout(() =>{
                this.specialTimeout = false;
            }, 3500)

        },
        heal(){
            var playerHeal = randomNumberAttack(15, 5)
            var monsterHeal = randomNumberAttack(4,0)
            this.playerHealth += playerHeal
            this.logHandle(playerHeal, monsterHeal, 'heal')
            this.healTimeout = true
            setTimeout(() =>{
                this.healTimeout = false;
            }, 3000)

        },
        surrender(){
            this.playerHealth =  0
        }
    },
})
app.mount('#game')


