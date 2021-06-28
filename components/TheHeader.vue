<template>
  <div
    class="
      fixed
      flex-shrink-0
      h-14
      w-full
      max-w-6xl
      z-10
      dark:bg-gray-800
      border-b-2 border-green-200
    "
  >
    <div class="flex-1 px-4 flex items-center justify-between">
      <div class="flex">
        <logo class="h-5 w-5" />
      </div>
      <div class="flex">
        <!--        <fa icon="cog" />-->
        <fa :icon="['fab', 'twitter']" />
        <fa :icon="['fab', 'instagram']" />
        <fa :icon="['fab', 'facebook']" />
        <fa :icon="['fab', 'twitch']" />
        <fa :icon="['fab', 'youtube']" />
        <fa :icon="['fab', 'soundcloud']" />
        <input type="text" />
        <ColorMode />
      </div>
    </div>
  </div>
</template>

<script>
import { faCog } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default {
  name: "TheHeader",
  computed: {
    faCog() {
      return faCog // NOT RECOMMENDED
    },
    faTwitter() {
      return faTwitter
    },
  },
}
</script>
