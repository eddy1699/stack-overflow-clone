<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <nav class="navbar bg-dark">
    <a class="navbar-brand text-white">
      <img
        src="@/assets/logo.png"
        height="24"
        alt="Vue Logo"
        class="d-inline-blick align-text-top mx-2"
      />
      Stack Overflow
    </a>

    <div class="d-flex">
      <button class="btn text-white">
        <i class="">Ingresar</i>
      </button>
      <button class="btn text-white">
        <i class="">Registrarse</i>
      </button>
      <button class="btn btn-outline-info mx-2">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
  <div class="row">
    <div class="col-2">
      <div class="content-section">
        <div class="vertical-menu">
          <router-link to="/">Preguntas</router-link> 
          <router-link to="/about">Preguntar</router-link>
        </div>
      </div>
    </div>
    <div class="col-5">
      <div class="sidebar-item">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
.content-section {
  /* border: 1px solid black; */
}
.sidebar-item {
  /* border: 1px solid black; */
}
.vertical-menu {
  width: 200px; /* Set a width if you like */
}
.btn{
  color: white;
}

.vertical-menu a {
  background-color: #eee; /* Grey background color */
  color: black; /* Black text color */
  display: block; /* Make the links appear below each other */
  padding: 12px; /* Add some padding */
  text-decoration: none; /* Remove underline from links */
}

.vertical-menu a:hover {
  background-color: #ccc; /* Dark grey background on mouse-over */
}

.vertical-menu a.active {
  background-color: #04aa6d; /* Add a green color to the "active/current" link */
  color: white;
}
</style>
<!-- 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
