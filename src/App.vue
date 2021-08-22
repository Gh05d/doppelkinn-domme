<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Domme />
  <UpdateButton />
  <footer>
    <p>
      Created by <a href="https://github.com/Gh05d">Gh05d</a> - Copyright
      {{ new Date().getFullYear() }}
    </p>
    <p>
      Icons erstellt von
      <a
        target="external"
        rel="noreferrer"
        href="https://www.freepik.com"
        title="Freepik"
        >Freepik</a
      >
      from
      <a
        target="external"
        rel="noreferrer"
        href="https://www.flaticon.com/de/"
        title="Flaticon"
        >www.flaticon.com</a
      >
    </p>
  </footer>
</template>

<script>
import Domme from "./components/Domme.vue";
import UpdateButton from "./components/UpdateButton.vue";

export default { name: "App", components: { Domme, UpdateButton } };
</script>

<style>
body,
html {
  margin: 0;
  box-sizing: border-box;
}

#app {
  --padding-top: 20px;
  --padding-bottom: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - var(--padding-top) - var(--padding-bottom));
  padding: var(--padding-top) 10px var(--padding-bottom);
  background-color: #fafafa;
}

footer {
  text-align: left;
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
