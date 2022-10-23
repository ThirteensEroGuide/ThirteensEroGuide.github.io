<script setup lang="ts">
import { RouterLink } from 'vue-router'

const KOHARU_SRC = 'https://twitter.com/azihurai3/status/1494533093788557312';
</script>

<template>
  <main class="page">
    <!-- TITLE -->
    <div class="unselectable title">
      <p class="title-small">Thirteen's</p>
      <div class="title-txt">
        <p id="title-txt-red">Ero</p>Guide
      </div>
    </div>

    <!-- SEPERATOR -->
    <div class="separator-wrapper">
      <div class="separator"><hr /></div>
      <div class="r18-image-wrapper">
        <a :href=KOHARU_SRC target="_blank" rel="noopener norefferer" class="hoverer"></a>
        <img src="../assets/images/koharu_warning.png" class="unselectable r18-image"/>
      </div>
      <div class="separator"><hr /></div>
    </div>

    <!-- WARNING + BUTTON -->
    <p class="age-warning">By clicking on the button below you confirm that you are <b class="bold-warning">at least 18 years of age</b>.</p>
    <RouterLink to="/guide" class="spicy-btn">Enter The Rabbit Hole</RouterLink>
  </main>
</template>

<style scoped lang="scss">
  .title {
    text-align: center;

    font-weight: 800;
    font-family: 'Bahiana', cursive;
    color: rgba(255, 255, 255, 1);

    line-height: 1.0 !important;

    .title-txt {
      font-size: 112px;
      font-weight: 800;
    }

    #title-txt-red {
      color: red;
      font-weight: 800;
      display: inline-block;
    }

    .title-small {
      font-size: 60px;
    }
  }

  .separator-wrapper {
    width: 100%;
    padding-bottom: 1em;

    display: flex;
    flex-flow: center;
    place-items: center;
  }

  .separator {
    padding-top: 4em;
    width: 100%;
    margin-left: 1em;
    margin-right: 1em;
  }

  hr {
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }

  .r18-image-wrapper {
    padding-top: 4em;
    position: relative;
  }

  .hoverer {
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: -4em;
    z-index: 1000;
    padding: 0.5em;
    text-decoration: none;
  }

  .r18-image {
    width: 20vh;
    margin-top: -4em;
    pointer-events: none;
  }

  .age-warning {
    padding-bottom: 1em;
    font-style: italic;
    letter-spacing: 0.15em;

    .bold-warning {
      font-weight: 800;
    }
  }

  .spicy-btn {
    text-decoration: none;
    color: red;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 1;
    text-transform: uppercase;

    border: 3px solid red;
    border-radius: 12px;

    padding: 0.5em 1em;
    margin: 0.25em;
    
    opacity: .8;
  }

  .spicy-btn:hover {
    transition: all .35s ease;
    color: #181818;
    border-color: red;
    background-color: red;
  }
</style>
