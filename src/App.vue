<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Domme />
  <footer>
    <p>
      Created by <a href="https://github.com/Gh05d">Gh05d</a> - Copyright
      {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>

<script>
import Domme from "./components/Domme.vue";

export default { name: "App", components: { Domme } };
</script>

<style>
body,
html {
  margin: 0;
  box-sizing: border-box;
}

#app {
  --padding-vertical: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - var(--padding-vertical) * 2);
  padding: var(--padding-vertical) 10px;
  background-color: #fafafa;
}

footer {
  align-self: start;
}

footer p {
  margin: 0;
  font-size: 0.8rem;
}

footer a {
  text-decoration: none;
}
</style>
