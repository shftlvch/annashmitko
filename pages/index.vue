<template>
  <div class="container">
    <h1 class="title">@annashmitko</h1>
    <div class="desc">
      <ul class="desc__roles">
        <li>documentary filmmaker</li>
        <li>reportage photographer</li>
        <li>art/style photographer</li>
      </ul>
      <div class="desc__heading">contact:</div>
      <div class="desc__contact">
        <a class="link" href="mailto:annashmitko@gmail.com">annashmitko@gmail.com</a><br>
        <a class="link" href="https://www.instagram.com/annashmitko/">instagram</a>
      </div>
    </div>

    <div class="pic"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
.container {
  position: relative;
  margin: 0 auto;
  height: 100vh;
  max-width: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* text-align: center; */
}

.title {
  display: block;
  font-weight: 800;
  font-size: 100px;
  color: #000;
  /* color: rgb(255, 0, 0); */
  letter-spacing: 1px;
  transform: rotate(-90deg);
  position: absolute;
  transform-origin: right top;
  top: 0;
  right: 100%;
}

.desc {
  color: #858585;
  padding-bottom: 400px;
  padding-left: 100px;
}

.desc__roles {
  list-style: none;
  padding: 0;
  margin-bottom: 36px;
}

.desc__contact {
}

.desc__heading {
  font-weight: bolder;
  font-size: 14px;
}

.link {
  text-decoration: none;
  color: #858585;
}

.pic {
  height: 400px;
  position: absolute;
  bottom: 0;
  z-index: -1;
  background-image: url("~assets/portrait.png");
  background-size: contain;
  width: 100%;
  animation: pic-slide 300s ease-in-out infinite;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@keyframes pic-slide {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 100000%;
  }
}
</style>
