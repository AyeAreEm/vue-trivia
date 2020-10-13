<template>
  <h1 class="score">{{ score }}</h1>

  <div class="main">
    <h1 style="font-size: 40px;">Astronomy Trivia</h1>
  </div>

  <div class="main">
    <h2>True or False:</h2>
    <h3>A long time ago, Earth hit another planet and got bigger because of it</h3>
    <button class="options" @click="score++; stage_1 = true" :disabled="stage_1">True</button>
    <button class="options" @click="stage_1 = true" :disabled="stage_1">False</button>
  </div>

  <div class="main">
    <h2>What is a Black Hole?</h2>
    <h3>a. It's something that not even light can escape from</h3>
    <h3>b. It's an area in space with no stars</h3>
    <h3>c. It's the opposite of a star, it doens't give out light but planets orbit it. It doesn't kill other stars as well</h3>
    <h3>d. It's something that gives out particles</h3>
    <button class="options" @click="score++; stage_2 = true" :disabled="stage_2">A</button>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">B</button>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">C</button>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">D</button>
  </div>

  <div class="main">
    <h2>How old is the Earth?</h2>
    <h3>a. 1.593 billion years</h3>
    <h3>b. 74.327 billion years</h3>
    <h3>c. 4.543 billion years</h3>
    <h3>d. 2020 years</h3>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">A</button>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">B</button>
    <button class="options" @click="score++; stage_3 = true" :disabled="stage_3">C</button>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">D</button>
  </div>

  <div class="main">
    <h2>How many confirmed moons does saturn have?</h2>
    <h3>a. 154</h3>
    <h3>b. 62</h3>
    <h3>c. 41</h3>
    <h3>d. 342</h3>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">A</button>
    <button class="options" @click="score++; stage_4 = true" :disabled="stage_4">B</button>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">C</button>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">D</button>
  </div>

  <div class="main">
    <h2>How many dwarf planets are there in our solar system?</h2>
    <h3>a. 1</h3>
    <h3>b. 9</h3>
    <h3>c. 3</h3>
    <h3>d. 5</h3>
    <button class="options" @click="stage_5 = true" :disabled="stage_5">A</button>
    <button class="options" @click="stage_5 = true" :disabled="stage_5">B</button>
    <button class="options" @click="stage_5 = true" :disabled="stage_5">C</button>
    <button class="options" @click="score++; stage_5 = true" :disabled="stage_5">D</button>
  </div>

  <div class="main">
    <h2>True or False:</h2>
    <h3>The Earth is flat</h3>
    <button class="options" @click="score++; stage_6 = true" :disabled="stage_6">True</button>
    <button class="options" @click="stage_6 = true" :disabled="stage_6">False</button>
  </div>

  <div class="main">
    <h2>Which galazy are we in?</h2>
    <h3>a. Andromeda</h3>
    <h3>b. Tadpole</h3>
    <h3>c. Milky Way</h3>
    <h3>d. Whirlpool</h3>
    <h3>e. Triangulum</h3>
    <h3>f. Sombrero</h3>
    <h3>g. Pinwheel</h3>
    <h3>h. Black Eye</h3>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">A</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">B</button>
    <button class="options" @click="score++; stage_7 = true" :disabled="stage_7">C</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">D</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">E</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">F</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">G</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">H</button>
  </div>

  <div class="main">
    <h2>Was Pluto a planet before?</h2>
    <h3>a. Yes</h3>
    <h3>b. No</h3>
    <h3>c. Some people thought it was but not everyone</h3>
    <h3>d. When we discovered Pluto, it was already a dwarf planet so we don't know</h3>
    <button class="options" @click="score++; stage_8 = true" :disabled="stage_8">A</button>
    <button class="options" @click="stage_8 = true" :disabled="stage_8">B</button>
    <button class="options" @click="stage_8 = true" :disabled="stage_8">C</button>
    <button class="options" @click="stage_8 = true" :disabled="stage_8">D</button>
  </div>

  <div class="main">
    <h2>What is the biggest known star?</h2>
    <h3>a. Our sun</h3>
    <h3>b. UY Scuti</h3>
    <h3>c. VY Canis Marjoris</h3>
    <h3>d. WOH 64</h3>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">A</button>
    <button class="options" @click="score++; stage_9 = true" :disabled="stage_9">B</button>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">C</button>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">D</button>
  </div>

  <div class="main">
    <h2>True or False:</h2>
    <h3>The Milky Way galaxy and Andromeda galaxy will hit one day</h3>
    <button class="options" @click="score++; stage_10 = true" :disabled="stage_10">True</button>
    <button class="options" @click="stage_10 = true" :disabled="stage_10">False</button>
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
        this.finalWords = "you know nothing about Earth or anythin in space man, learn more stuff";
      }

      else if (this.score == 5) {
        this.finalWords = "huh, average. YOur are like all American teens or Flat Earthers";
      }

      else if (this.score >= 6 && this.score <= 9) {
        this.finalWords = "yo, you are a normal human"
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