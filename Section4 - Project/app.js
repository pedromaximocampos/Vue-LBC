const app = Vue.createApp({
    data(){
        return{
            monsterHealth:100,
            playerHealth: 100,
            gameLogs: [],
        }
    },

    methods:{

        logHandle(player, monster, action) {
            const actions = {
                'attack': {
                    playerLog: {action: 'Player attacked Monster', value: player},
                    monsterLog: {action: 'Monster attacked Player', value: monster}
                },
                'heal': {
                    playerLog: {action: 'Player heal', value: player},
                    
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
            var playerAttack =  randomNumberAttack()
            var monsterAttack = randomNumberAttack()
            this.monsterHealth -= playerAttack
            this.playerHealth -= monsterAttack
            this.logHandle(playerAttack, monsterAttack)

        },
        specialAttack(){

        },
        heal(){

        },
        surrender(){
            this.playerHealth =  0
        }
    },
})
app.mount('#game')


function randomNumberAttack() {
    return Math.ceil(Math.random() * 30);
}