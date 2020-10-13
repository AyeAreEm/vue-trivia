<template>
  <h1 class="score">{{ score }}</h1>
  <div class="main">
    <h1 style="font-size: 40px;">History Trivia</h1>
  </div>

  <div class="main">
      <h2>When did WW2 happen?</h2>
      <h3>a. Nov.6, 1940</h3>
      <h3>b. Jan. 18, 1938</h3>
      <h3>c. Aug. 10, 1921</h3>
      <h3>d. Sep. 1, 1939</h3>
      <button class="options" @click="stage_1 = true" :disabled="stage_1">A</button>
      <button class="options" @click="stage_1 = true" :disabled="stage_1">B</button>
      <button class="options" @click="stage_1 = true" :disabled="stage_1">C</button>
      <button class="options" @click="score++; stage_1 = true" :disabled="stage_1">D</button>
  </div>

  <div class="main">
    <h2>What was the first language ever invented?</h2>
    <h3>a. Ancient Egyptian</h3>
    <h3>b. Ancient Roman</h3>
    <h3>c. Ancient Chinese</h3>
    <h3>d. Ancient Hebrew</h3>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">A</button>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">B</button>
    <button class="options" @click="score++; stage_2 = true" :disabled="stage_2">C</button>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">D</button>
  </div>

  <div class="main">
    <h2>How did Cleopatra die?</h2>
    <h3>a. Suicide</h3>
    <h3>b. Death by Medjay (ancient egyptian police)</h3>
    <h3>c. Julius Caesar killed her</h3>
    <h3>d. Old age</h3>
    <button class="options" @click="score++; stage_3 = true" :disabled="stage_3">A</button>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">B</button>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">C</button>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">D</button>
  </div>

  <div class="main">
    <h2>When was currency invented?</h2>
    <h3>a. 3,530 B.C.</h3>
    <h3>b. 7,506 B.C.</h3>
    <h3>c. 5,000 B.C.</h3>
    <h3>d. 1254</h3>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">A</button>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">B</button>
    <button class="options" @click="score++; stage_4 = true" :disabled="stage_4">C</button>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">D</button>
  </div>

  <div class="main">
    <h2>True or False:</h2>
    <h3>The Chinese invented tea</h3>
    <button class="options" @click="score++; stage_5 = true" :disabled="stage_5">True</button>
    <button class="options" @click="stage_5 = true" :disabled="stage_5">False</button>
  </div>

  <div class="main">
    <h2>True or False:</h2>
    <h3>Hitler's live was spared in WW1</h3>
    <button class="options" @click="score++; stage_6 = true" :disabled="stage_6">True</button>
    <button class="options" @click="stage_6 = true" :disabled="stage_6">False</button>
  </div>

  <div class="main">
    <h2>True or False:</h2>
    <h3>Leonardo da Vinci invented the tank</h3>
    <button class="options" @click="score++; stage_7 = true" :disabled="stage_7">True</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">False</button>
  </div>

  <div class="main">
    <h2>Who were the other two astronauts that came with Neil Armstrong to the moon?</h2>
    <h3>a. John F. Kennedy and Richard Nixon</h3>
    <h3>b. Peter Richman and Ben Connelly</h3>
    <h3>c. Noah Clint and Nelson Beltran</h3>
    <h3>d. Buzz Aldrin and Michael Collins</h3>
    <button class="options" @click="stage_8 = true" :disabled="stage_8">A</button>
    <button class="options" @click="stage_8 = true" :disabled="stage_8">B</button>
    <button class="options" @click="stage_8 = true" :disabled="stage_8">C</button>
    <button class="options" @click="score++; stage_8 = true" :disabled="stage_8">D</button>
  </div>

  <div class="main">
    <h2>What was the name of the mission when Neil Armstrong when to the moon?</h2>
    <h3>a. Apollo 13</h3>
    <h3>b. Apollo 16</h3>
    <h3>c. Apollo 11</h3>
    <h3>d. Apollo 10</h3>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">A</button>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">B</button>
    <button class="options" @click="score++; stage_9 = true" :disabled="stage_9">C</button>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">D</button>
  </div>

  <div class="main">
    <h2>When was the first nuke used?</h2>
    <h3>a. Sept. 8, 1944</h3>
    <h3>b. Aug. 6, 1945</h3>
    <h3>c. Dec. 13, 1940</h3>
    <h3>d. July 24, 1433</h3>
    <button class="options" @click="stage_10 = true" :disabled="stage_10">A</button>
    <button class="options" @click="score++; stage_10 = true" :disabled="stage_10">B</button>
    <button class="options" @click="stage_10 = true" :disabled="stage_10">C</button>
    <button class="options" @click="stage_10 = true" :disabled="stage_10">D</button>
  </div>

  <button class="viewscore" @click="done()">Done</button>

  <div class="main" style="margin-top: 50%;" id="viewscore">
    <h1>You got {{ score }} out of 10</h1>
    <h2>{{ finalWords }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      stage_1: false,
      stage_2: false,
      stage_3: false,
      stage_4: false,
      stage_5: false,
      stage_6: false,
      stage_7: false,
      stage_8: false,
      stage_9: false,
      stage_10: false,
      finalWords: ''
    }
  },
  methods: {
    done() {
      document.getElementById("viewscore").scrollIntoView();

      if (this.score <= 4) {
        this.finalWords = "you know nothing about history, learn more stuff";
      }

      else if (this.score == 5) {
        this.finalWords = "huh, average. YOur are like all American teens or Flat Earthers";
      }

      else if (this.score >= 6 && this.score <= 9) {
        this.finalWords = "yo, you are a normal human";
      }

      else if (this.score == 10) {
        this.finalWords = "ok, no normal human can get this all right. U crazy";
      }
    }
  }
}
</script>

<style>
@import './styles.css';
</style>