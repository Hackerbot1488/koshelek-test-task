<template>
<div id="app">
  <div id="nav">
    <router-link to="/">Courses</router-link> |
    <router-link to="/settings">Settings</router-link>
  </div>
  <router-view />
</div>
</template>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#nav {
  background-color: #f8f8f8;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 5px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
