# 상품 교환대 고치기

### @explicitHints 1

### @activities true

## 상품 교환대 활동

### 교환 규칙 알려 주기

코드에는 작은 제목이 비어 있는 ``||gameplay:제목 표시||`` 블록이 두 개 있습니다.

두 곳의 빈칸에 **1번 칸에 에메랄드가 부족해요**라고 입력하세요. 그러면 에메랄드가 부족하거나 잘못된 물건을 넣었을 때 이유를 알려 줄 수 있습니다.

#### ~ tutorialhint

```blocks
let change = 0
let prizeCost = 0
function buyPrize () {
    change = 0
    if (agent.getItemDetail(1) == EMERALD) {
        change = agent.getItemCount(1)
        if (agent.getItemCount(1) >= prizeCost) {
            prizes.givePrize()
            change = agent.getItemCount(1) - prizeCost
        } else {
            gameplay.title(mobs.target(NEAREST_PLAYER), "미안해요", "1번 칸에 에메랄드가 부족해요")
        }
    } else {
        gameplay.title(mobs.target(NEAREST_PLAYER), "미안해요", "1번 칸에 에메랄드가 부족해요")
        agent.dropAll(FORWARD)
    }
    mobs.give(mobs.target(NEAREST_PLAYER), EMERALD, change)
    agent.setItem(AIR, 1, 1)
    agent.dropAll(FORWARD)
}
player.onChat("play", function () {
    prizes.playAimTrainer()
})
player.onChat("headphones", function () {
    prizes.setPrize(Choice.Headphones)
    prizeCost = 2
    buyPrize()
})
```

```template
let change = 0
let prizeCost = 0
function buyPrize () {
    change = 0
    if (agent.getItemDetail(1) == EMERALD) {
        change = agent.getItemCount(1)
        if (agent.getItemCount(1) >= prizeCost) {
            prizes.givePrize()
            change = agent.getItemCount(1) - prizeCost
        } else {
            gameplay.title(mobs.target(NEAREST_PLAYER), "미안해요", " ")
        }
    } else {
        gameplay.title(mobs.target(NEAREST_PLAYER), "미안해요", " ")
        agent.dropAll(FORWARD)
    }
    mobs.give(mobs.target(NEAREST_PLAYER), EMERALD, change)
    agent.setItem(AIR, 1, 1)
    agent.dropAll(FORWARD)
}
player.onChat("play", function () {
    prizes.playAimTrainer()
})
player.onChat("headphones", function () {
    prizes.setPrize(Choice.Headphones)
    prizeCost = 2
    buyPrize()
})
```
