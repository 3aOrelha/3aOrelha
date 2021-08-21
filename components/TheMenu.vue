<template>
  <div>
    <nav class="light:bg-gray-800 dark:bg-cinza-dark bg-cinza-dark font-montserrat font-medium mx-auto px-4 sm:px-4 lg:px-8 ">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Container to give Navbar a fixed width -->
<!--      <div class="flex mx-auto items-center justify-between p-4 max-w-7xl w-full">-->

      <div class="flex items-center justify-between h-20">
          <div class="flex items-stretch">
            <div class="flex-shrink-0">
              <img
                class="h-14"
                src="@/assets/logos/logo-hor-claro.svg"
                alt="3a Orelha - radiogaleria"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline"></div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button
                class="
                  flex flex-center
                  align-center
                  content-around
                  px-5
                  py-3
                  static
                  inline-flex
                  items-center
                  text-cinza-default
                  hover:bg-cinza-light hover:text-white
                  transition-colors
                  rounded-sm
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <a href="#" class="px-3 py-2 text-sm font-medium tracking-widest">INFO</a>
              </button>
              <button
                class="
                  flex flex-center
                  align-center
                  content-around
                  px-5
                  py-3
                  static
                  inline-flex
                  items-center
                  text-cinza-default
                  hover:bg-cinza-light hover:text-white
                  transition-colors
                  rounded-sm
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <a href="#" class="px-3 py-2 text-sm font-medium tracking-widest">CONTATO</a>
              </button>
              <button
                class="
                  p-1
                  border-2 border-transparent
                  text-gray-400
                  rounded-full
                  hover:text-white
                  focus:outline-none focus:text-white focus:bg-gray-700
                "
                aria-label="Font Size"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" />
                </svg>
              </button>
              <button
                class="
                  p-1
                  border-2 border-transparent
                  text-gray-400
                  rounded-full
                  hover:text-white
                  focus:outline-none focus:text-white focus:bg-gray-700
                "
                aria-label="language"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </button>
              <button
                class="
                  p-1
                  border-2 border-transparent
                  text-gray-400
                  rounded-full
                  hover:text-white
                  focus:outline-none focus:text-white focus:bg-gray-700
                "
                aria-label="Color Theme"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </button>

              <!-- Profile dropdown
              <div class="ml-3 relative">
                <div>
                  <button
                    @click="toggle"
                    class="
                      max-w-xs
                      flex
                      items-center
                      text-sm
                      rounded-full
                      text-white
                      focus:outline-none focus:shadow-solid
                    "
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt
                    />
                  </button>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <div
                    v-show="isOpen"
                    class="
                      origin-top-right
                      absolute
                      right-0
                      mt-2
                      w-48
                      rounded-md
                      shadow-lg
                    "
                  >
                    <div
                      class="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        class="
                          block
                          px-4
                          py-2
                          text-sm text-gray-700
                          hover:bg-gray-100
                        "
                        role="menuitem"
                        >Your Profile</a
                      >
                      <a
                        href="#"
                        class="
                          block
                          px-4
                          py-2
                          text-sm text-gray-700
                          hover:bg-gray-100
                        "
                        role="menuitem"
                        >Settings</a
                      >
                      <a
                        href="#"
                        class="
                          block
                          px-4
                          py-2
                          text-sm text-gray-700
                          hover:bg-gray-100
                        "
                        role="menuitem"
                        >Sign out</a
                      >
                    </div>
                  </div>
                </transition>
              </div>  -->
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              @click="toggle"
              class="
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                text-gray-400
                hover:text-white hover:bg-gray-700
                focus:outline-none focus:bg-gray-700 focus:text-white
              "
            >
              <svg
                :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="#"
            class="
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
              text-white
              bg-gray-900
              focus:outline-none focus:text-white focus:bg-gray-700
            "
            >INFO</a
          >
          <a
            href="#"
            class="
              mt-1
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
              text-gray-300
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:text-white focus:bg-gray-700
            "
            >CONTATO</a
          >
        </div>
        <!--          <div class="pt-4 pb-3 border-t border-gray-700">
                    <div class="flex items-center px-5">
                      <div class="flex-shrink-0">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt
                        />
                      </div>
                      <div class="ml-3">
                        <div class="text-base font-medium leading-none text-white">
                          Tom Cook
                        </div>
                        <div
                          class="mt-1 text-sm font-medium leading-none text-gray-400"
                        >
                          tom@example.com
                        </div>
                      </div>
                    </div>
                    <div class="mt-3 px-2">
                      <a
                        href="#"
                        class="
                          block
                          px-3
                          py-2
                          rounded-md
                          text-base
                          font-medium
                          text-gray-400
                          hover:text-white hover:bg-gray-700
                          focus:outline-none focus:text-white focus:bg-gray-700
                        "
                        >Your Profile</a
                      >
                      <a
                        href="#"
                        class="
                          mt-1
                          block
                          px-3
                          py-2
                          rounded-md
                          text-base
                          font-medium
                          text-gray-400
                          hover:text-white hover:bg-gray-700
                          focus:outline-none focus:text-white focus:bg-gray-700
                        "
                        >Settings</a
                      >
                      <a
                        href="#"
                        class="
                          mt-1
                          block
                          px-3
                          py-2
                          rounded-md
                          text-base
                          font-medium
                          text-gray-400
                          hover:text-white hover:bg-gray-700
                          focus:outline-none focus:text-white focus:bg-gray-700
                        "
                        >Sign out</a
                      >
                    </div>
                  </div>-->
      </div>
    </nav>
    <div>
      <!--      <header class="bg-white shadow">
              <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold leading-tight text-gray-900">
                  Dashboard
                </h1>
              </div>
            </header>
            -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
