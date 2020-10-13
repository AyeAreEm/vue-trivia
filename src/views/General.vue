<template>
  <h1 class="score">{{ score }}</h1>

  <div class="main">
    <h1 style="font-size: 40px;">General Trivia</h1>
  </div>

  <div class="main">
    <h2>What type of place is Australia?</h2>
    <h3>a. Island</h3>
    <h3>b. Country</h3>
    <h3>c. Continent</h3>
    <h3>d. All of the above</h3>
    <button class="options" @click="stage_1 = true" :disabled="stage_1">A</button>
    <button class="options" @click="stage_1 = true" :disabled="stage_1">B</button>
    <button class="options" @click="stage_1 = true" :disabled="stage_1">C</button>
    <button class="options" @click="score++; stage_1 = true" :disabled="stage_1">D</button>
  </div>

  <div class="main">
    <h2>What is the fastest time for solving a Rubik's Cube?</h2>
    <h3>a. 1 minute</h3>
    <h3>b. 5 minutes</h3>
    <h3>c. 3 seconds</h3>
    <h3>d. 15 seconds</h3>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">A</button>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">B</button>
    <button class="options" @click="score++; stage_2 = true" :disabled="stage_2">C</button>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">D</button>
  </div>

  <div class="main">
    <h2>What is the most popular video game?</h2>
    <h3>a. GTA V</h3>
    <h3>b. Fortnite</h3>
    <h3>c. Rainbow Six Seige</h3>
    <h3>d. Minecraft</h3>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">A</button>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">B</button>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">C</button>
    <button class="options" @click="score++; stage_3 = true" :disabled="stage_3">D</button>
  </div>

  <div class="main">
    <h2>How many planets are in our solar system?</h2>
    <h3>a. 12</h3>
    <h3>b. 8</h3>
    <h3>c. 9</h3>
    <h3>d. 6</h3>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">A</button>
    <button class="options" @click="score++; stage_4 = true" :disabled="stage_4">B</button>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">C</button>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">D</button>
  </div>

  <div class="main">
    <h2>True or False:</h2>
    <h3>The first computer mouse was made out of wood</h3>
    <button class="options" @click="stage_5 = true" :disabled="stage_5">True</button>
    <button class="options" @click="score++; stage_5 = true" :disabled="stage_5">False</button>
  </div>

  <div class="main">
    <h2>What is the percentage of people who wear glasses as of 2019?</h2>
    <h3>a. 30%</h3>
    <h3>b. 58%</h3>
    <h3>c. 24%</h3>
    <h3>d. 64%</h3>
    <button class="options" @click="stage_6 = true" :disabled="stage_6">A</button>
    <button class="options" @click="stage_6 = true" :disabled="stage_6">B</button>
    <button class="options" @click="stage_6 = true" :disabled="stage_6">C</button>
    <button class="options" @click="score++; stage_6 = true" :disabled="stage_6">D</button>
  </div>

  <div class="main">
    <h2>What was the first search engine?</h2>
    <h3>a. Archie</h3>
    <h3>b. Google</h3>
    <h3>c. Yahoo</h3>
    <h3>d. DuckDuckGo</h3>
    <h3>e. Bing</h3>
    <h3>f. Yandex</h3>
    <button class="options" @click="score++; stage_7 = true" :disabled="stage_7">A</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">B</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">C</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">D</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">E</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">F</button>
  </div>

  <div class="main">
    <h2>True or False:</h2>
    <h3>Prawns can see more colours than humans</h3>
    <button class="options" @click="score++; stage_8 = true" :disabled="stage_8">True</button>
    <button class="options" @click="stage_8 = true" :disabled="stage_8">False</button>
  </div>

  <div class="main">
    <h2>Which country makes the most coffee?</h2>
    <h3>a. USA</h3>
    <h3>b. China</h3>
    <h3>c. Brazil</h3>
    <h3>d. Russia</h3>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">A</button>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">B</button>
    <button class="options" @click="score++; stage_9 = true" :disabled="stage_9">C</button>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">D</button>
  </div>

  <div class="main">
    <h2>True or False:</h2>
    <h3>Dogs can't see colours</h3>
    <button class="options" @click="stage_10 = true" :disabled="stage_10">True</button>
    <button class="options" @click="score++; stage_10 = true" :disabled="stage_10">False</button>
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
        this.finalWords = "you are not a human, you are a lizard person. just no.";
      }

      else if (this.score == 5) {
        this.finalWords = "your either a dum human or a smart lizard person.";
      }

      else if (this.score >= 6 && this.score <= 9) {
        this.finalWords = "you are actually a normal human";
      }

      else if (this.score == 10) {
        this.finalWords = "much human";
      }
    }
  }
}
</script>

<style>
@import './styles.css';
</style>