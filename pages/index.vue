<template>
  <div class="container">
    <div>
      <img src="@/assets/logos/logo_temp.png" alt="logo 3a Orelha" />
      <!--      <Logo />-->

      <h1 class="title">3ªOrelha</h1>
      <h2 class="subtitle">Rede Micelial InterPlanetária</h2>
      <div class="links">
<!--        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button&#45;&#45;green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button&#45;&#45;grey"
        >
          GitHub
        </a>
      -->
      </div>
    </div>
  </div>
</template>

<script>
// export default {}
</script>

<style lang="postcss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #466c46;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 125px;
  color: rgb(92, 205, 217);
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #ddd9ca;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
