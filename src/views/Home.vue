<template>
  <div class="home">
    <div class="title">
      <h1>Pick Your Trivia Genre</h1>
    </div>
    <div class="main">
      <router-link to="/coding">
        <button>Coding</button>
      </router-link>&nbsp;

      <router-link to="/astronomy">
        <button>Astronomy</button>
      </router-link>

      <router-link to="/history">
        <button>History</button>
      </router-link>&nbsp;

      <router-link to="/general">
        <button>General</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.title {
  background: white;
  width: 50%;
  margin: auto;
  border-radius: 5px;
  box-shadow: 5px 5px 10px black;
  font-size: 25px;
}

.main {
  background: white;
  width: 50%;
  margin: auto;
  border-radius: 5px;
  box-shadow: 5px 5px 10px black;
  margin-top: 10px;
}

button {
  background: rgb(160, 160, 160);
  border: none;
  border-radius: 5px;
  width: 35%;
  font-size: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px 20px 20px 20px;
}
</style>