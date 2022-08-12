<script setup></script>

<template>
  <nav>
    <div class="max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-8 mt-3">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                href="#"
                class="text-gray-400 hover:text-gray-500 px-3 py-2 rounded-md text-base font-medium"
                >Dashboard</a
              >
              <a
                href="#"
                class="text-gray-400 hover:text-gray-500 px-3 py-2 rounded-md text-base font-medium"
                >Team</a
              >
              <a
                href="#"
                class="text-gray-400 hover:text-gray-500 px-3 py-2 rounded-md text-base font-medium"
                >Projects</a
              >
              <a
                href="#"
                class="text-gray-400 hover:text-gray-500 px-3 py-2 rounded-md text-base font-medium"
                >Calendar</a
              >
            </div>
          </div>
          <div class="flex">
            <div class="flex space-x-4">
              <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                class="text-gray-400 hover:text-gray-500 focus:outline-none hover:border-transparent font-medium text-base px-1 py-1 text-center inline-flex items-center"
                type="button"
              >
                ES
                <svg
                  class="ml-2 w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdown"
                class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              >
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefault"
                >
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Dashboard</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Settings</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Earnings</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Sign out</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex space-x-4">
              <div
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                class="text-gray-400 cursor-pointer font-medium text-sm px-1 py-1 text-center inline-flex items-center ml-2"
              >
                <font-awesome-icon icon="fa-solid fa-sun" size="lg" />
              </div>
              <div
                id="dropdown"
                class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="mobile-menu" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
          >Dashboard</a
        >

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Team</a
        >

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Projects</a
        >

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Calendar</a
        >
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
