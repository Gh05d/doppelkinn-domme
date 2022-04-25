<template>
  <div class="image-container">
    <img
      id="logo"
      width="200"
      height="200"
      alt="Domme am feiern"
      src="./assets/logo.jpg"
    />
  </div>
  <div id="content">
    <Domme />
    <UpdateButton />
  </div>

  <footer>
    <p>
      Created by <a href="https://github.com/Gh05d">Gh05d</a> - Copyright
      {{ new Date().getFullYear() }}
    </p>
    <p>
      Icons erstellt von
      <a target="external" rel="noreferrer" href="https://www.freepik.com" title="Freepik"
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
  height: 100%;
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
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  color: #2c3e50;
  background-color: #fafafa;
  height: 100%;
}

#content {
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding: var(--padding-top) 10px var(--padding-bottom);
}

.image-container {
  width: 100%;
  background-color: black;
}

#logo {
  height: 100%;
  object-fit: contain;
}

h1 {
  margin: 0;
}

footer {
  padding: 1rem;
  margin-top: 1rem;
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
