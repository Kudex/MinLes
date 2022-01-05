const hero = { name: "Batman", health: 100 }
const enemy = { name: "Joker", health: 100 }
const HEALTH_POINTS_BY_HEAT = 10
function resetHealth() {
   hero.health = 100
   enemy.health = 100

}
function startGame(heroPlayer, enemyPlayer) {
   const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
   const isAlive = persone => persone.health > 0
   heroPlayer.heatEnemy = () => enemyPlayer.health -= HEALTH_POINTS_BY_HEAT
   enemyPlayer.heatPlayer = () => heroPlayer.health -= HEALTH_POINTS_BY_HEAT

   while (isAlive(heroPlayer) && isAlive(enemyPlayer)) {
      let luck = getRandomNumberInRange(0, 1)
      if (luck) heroPlayer.heatEnemy()
      else enemyPlayer.heatPlayer()
   }


   const winner = isAlive(heroPlayer) ? heroPlayer : enemyPlayer;
   console.log(`Winner is ${winner.name} with ${winner.health} health points`);
   resetHealth();
}

startGame(hero, enemy);
startGame(hero, enemy);
startGame(hero, enemy);
startGame(hero, enemy);
startGame(hero, enemy);

