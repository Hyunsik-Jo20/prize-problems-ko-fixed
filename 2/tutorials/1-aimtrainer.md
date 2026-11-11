# 조준 연습 시작하기

### @explicitHints 1

### @activities true

## 첫 번째 활동

### 1단계

``||player:채팅 명령어를 입력하면||`` 블록에서 명령어 **run**을 **play**로 바꾸세요.

#### ~ tutorialhint

```blocks
player.onChat("play", function () {
})
```

### 2단계

``||prizes:조준 연습||`` 도구 상자에서 ``||prizes:조준 연습 시작||`` 블록을 꺼내 ``||player:채팅 명령어를 입력하면||`` 블록 안에 넣으세요.

#### ~ tutorialhint

```blocks
player.onChat("play", function () {
    prizes.playAimTrainer()
})
```

### 3단계

초록색 **재생** 버튼을 누르세요. 게임으로 돌아가 **T** 키를 누르고 채팅에 **play**를 입력해 보내면 조준 연습이 시작됩니다.

#### ~ tutorialhint

```blocks
player.onChat("play", function () {
    prizes.playAimTrainer()
})
```

```template
player.onChat("run", function () {
})
```
