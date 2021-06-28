<template>
  <div
    class="
      relative
      sm:max-w-xl sm:mx-auto
      max-w-sm
      shadow-lg
      rounded-3xl
      bg-gray-100
      dark:bg-verde-cinza
      overflow-hidden
    "
  >
    <img
      class="w-full"
      src="@/assets/fotos/orelha-de-pau.jpg"
      alt="Sunset in the mountains"
    />
    <div class="px-4 py-4 pb-2">
      <h1 class="font-bold text-xl mb-2 text-verde-dark dark:text-white">
        Córrego Musical
      </h1>
      <Radio />
    </div>
    <!--    <div class="px-6 py-4">
          <span class="badge mr-2">#música</span>
          <span class="badge mr-2">#rádio</span>
        </div>
      -->
  </div>
</template>

<script>
export default {
  name: "Card",
}
</script>
