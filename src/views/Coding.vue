<template>
  <h1 class="score">{{ score }}</h1>
  <div class="main">
    <h1 style="font-size: 40px;">Coding Trivia</h1>
  </div>

  <div class="main">
    <h2>How many programming languages are there?</h2>
    <h3>a. 20</h3>
    <h3>b. 5000</h3>
    <h3>c. 700</h3>
    <h3>d. 1500</h3>
    <button class="options" @click="stage_1 = true" :disabled="stage_1">A</button>
    <button class="options" @click="stage_1 = true" :disabled="stage_1">B</button>
    <button class="options" @click="score++; stage_1 = true" :disabled="stage_1">C</button>
    <button class="options" @click="stage_1 = true" :disabled="stage_1">D</button>
  </div>

  <div class="main">
    <h2>What is the most popular programming language?</h2>
    <h3>a. JavaScript</h3>
    <h3>b. Python</h3>
    <h3>c. Java</h3>
    <h3>d. C++</h3>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">A</button>
    <button class="options" @click="score++; stage_2 = true" :disabled="stage_2">B</button>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">C</button>
    <button class="options" @click="stage_2 = true" :disabled="stage_2">D</button>
  </div>

  <div class="main">
    <h2>What is the first programming language?</h2>
    <h3>a. Fortran</h3>
    <h3>b. Cobol</h3>
    <h3>c. Pascal</h3>
    <h3>d. Plankalkül</h3>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">A</button>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">B</button>
    <button class="options" @click="stage_3 = true" :disabled="stage_3">C</button>
    <button class="options" @click="score++; stage_3 = true" :disabled="stage_3">D</button>
  </div>

  <div class="main">
    <h2>What is the difference between an Arduino and Raspberry Pi?</h2>
    <h3>a. Arduino is a calculator and Raspberry Pi is a computer</h3>
    <h3>b. Arduino is a computer and Raspberry Pi is a calculator</h3>
    <h3>c. They are the same but use a different language</h3>
    <h3>d. They are completely the same</h3>
    <button class="options" @click="score++; stage_4 = true" :disabled="stage_4">A</button>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">B</button>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">C</button>
    <button class="options" @click="stage_4 = true" :disabled="stage_4">D</button>
  </div>

  <div class="main">
    <h2>True or False:</h2>
    <h3>US government still uses one of the oldest programming language for their computers</h3>
    <button class="options" @click="score++; stage_5 = true" :disabled="stage_5">True</button>
    <button class="options" @click="stage_5 = true" :disabled="stage_5">False</button>
  </div>

  <div class="main">
    <h2>Which one of these languages compile on run time?</h2>
    <h3>a. C++</h3>
    <h3>b. C</h3>
    <h3>c. Java</h3>
    <h3>d. JavaScript</h3>
    <button class="options" @click="stage_6 = true" :disabled="stage_6">A</button>
    <button class="options" @click="stage_6 = true" :disabled="stage_6">B</button>
    <button class="options" @click="stage_6 = true" :disabled="stage_6">C</button>
    <button class="options" @click="score++; stage_6 = true" :disabled="stage_6">D</button>
  </div>

  <div class="main">
    <h2>What language is used for most triple a games?</h2>
    <h3>a. C++</h3>
    <h3>b. c#</h3>
    <h3>c. Python</h3>
    <h3>d. JavaScript</h3>
    <button class="options" @click="score++; stage_7 = true" :disabled="stage_7">A</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">B</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">C</button>
    <button class="options" @click="stage_7 = true" :disabled="stage_7">D</button>
  </div>

  <div class="main">
    <h2>What does a compiler do?</h2>
    <h3>a. It compiles code into a zip-like folder</h3>
    <h3>b. It compiles code into a .exe</h3>
    <h3>c. It compiles code into machine code for the computer to read</h3>
    <h3>d. It can do all of them and you get to choose</h3>
    <button class="options" @click="stage_8 = true" :disabled="stage_8">A</button>
    <button class="options" @click="stage_8 = true" :disabled="stage_8">B</button>
    <button class="options" @click="score++; stage_8 = true" :disabled="stage_8">C</button>
    <button class="options" @click="stage_8 = true" :disabled="stage_8">D</button>
  </div>

  <div class="main">
    <h2>Which language does this website use?</h2>
    <h3>a. Html, Css, Javascript</h3>
    <h3>b. Python, Html, Css</h3>
    <h3>c. C#, Python, Java</h3>
    <h3>d. Html, Go, SQL</h3>
    <button class="options" @click="score++; stage_9 = true" :disabled="stage_9">A</button>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">B</button>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">C</button>
    <button class="options" @click="stage_9 = true" :disabled="stage_9">D</button>
  </div>

  <div class="main">
    <h2>True or False:</h2>
    <h3>Expert programmers know everything in the language they use the most</h3>
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
        this.finalWords = "you know basically nothing about coding, you suk";
      }

      else if (this.score == 5) {
        this.finalWords = "you prolly an average coder or just know some ooga booga coding stuff. Learn more dum dum";
      }

      else if (this.score >= 6 && this.score <= 9) {
        this.finalWords = "you know most of your stuff, you must be interested in coding or you ar a coder. Much nice";
      }

      else if (this.score == 10) {
        this.finalWords = "you is a good coder. You is much supreme. Big slurp";
      }
    }
  }
}
</script>

<style>
@import './styles.css';
</style>