enum Choice {
    //% block="헤드폰"
    Headphones,
    //% block="운동복 상의"
    Jersey,
    //% block="바지"
    Pants,
    //% block="신발"
    Shoes,
    //% block="게임 조종기"
    Controller
}

//% block="조준 연습" weight=100 color=#AA278D icon=""
namespace prizes {
    
export let newPrize = Choice.Headphones
    //% block="상품을 %choice(으)로 정하기"
    export function setPrize(choice: Choice) {
        newPrize = choice
    }


    //% block="상품 주기"
    export function givePrize() {
        if (newPrize == Choice.Headphones) {
            player.execute(
                "give @s cleverlike:headset"
            )
        } else if (newPrize == Choice.Jersey) {
            player.execute(
                "give @s cleverlike:jersey"
            )
        } else if (newPrize == Choice.Pants) {
            player.execute(
                "give @s cleverlike:pants"
            )
        } else if (newPrize == Choice.Shoes) {
            player.execute(
                "give @s cleverlike:boots"
            )
        } else if (newPrize == Choice.Controller) {
            player.execute(
                "give @s cleverlike:controlleritem"
            )
        }
    }



    //% block="조준 연습 시작"
    export function playAimTrainer() {
        let timeRemaining = 0
        let worldLocations: Position[] = []
        let score = 0
        blocks.place(LAPIS_LAZULI_BLOCK, world(160, 28, 149))
        playGame()
        function playGame() {
            gameplay.setGameMode(
                SURVIVAL,
                mobs.target(NEAREST_PLAYER)
            )
            timeRemaining = 600
            worldLocations = [
                world(167, 40, 151),
                world(167, 47, 151),
                world(159, 43, 151),
                world(151, 40, 151),
                world(151, 47, 151)
            ]
            player.say("30초 동안 과녁을 최대한 많이 맞혀 보세요!")
            loops.pause(3000)
            player.say("3...")
            player.execute(
                "playsound random.orb @a"
            )
            loops.pause(500)
            player.say("2...")
            player.execute(
                "playsound random.orb @a"
            )
            loops.pause(500)
            player.say("1...")
            player.execute(
                "playsound random.orb @a"
            )
            loops.pause(500)
            player.say("시작!!!")
            player.execute(
                "playsound random.orb @a"
            )
            agent.teleport(worldLocations._pickRandom(), NORTH)
            agent.setItem(TARGET, 1, 1)
            agent.setSlot(1)
            agent.place(DOWN)
            mobs.give(
                mobs.target(NEAREST_PLAYER),
                BOW,
                1
            )
            mobs.give(
                mobs.target(NEAREST_PLAYER),
                ARROW,
                128
            )
            while (timeRemaining > 0) {
                timeRemaining += -1
                if (agent.detect(AgentDetection.Redstone, DOWN)) {
                    player.execute(
                        "remove @e[type=arrow]"
                    )
                    agent.destroy(DOWN)
                    player.execute(
                        "playsound random.orb @a"
                    )
                    // This adds 1 to the score every time a Target is Hit
                    score += 1
                    if (timeRemaining > 0) {
                        agent.teleport(worldLocations._pickRandom(), NORTH)
                        agent.setItem(TARGET, 1, 1)
                        agent.setSlot(1)
                        agent.place(DOWN)
                    }
                }
            }
            if (timeRemaining == 0) {
                agent.destroy(DOWN)
                gameplay.title(mobs.target(NEAREST_PLAYER), "게임 끝", "맞힌 과녁: " + score)
                loops.pause(3000)
                for (let index = 0; index < score; index++) {
                    mobs.give(
                        mobs.target(NEAREST_PLAYER),
                        EMERALD,
                        1
                    )
                    player.execute(
                        "playsound random.orb @a"
                    )
                }
                blocks.place(DIAMOND_BLOCK, world(160, 28, 149))
            }
            player.execute(
                "clear @p bow"
            )
            player.execute(
                "clear @p arrow"
            )
            player.execute(
                "remove @e[type=arrow]"
            )
        }

    }


}
