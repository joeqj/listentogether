<template>
    <svg
        class="w-full h-full absolute inset-0"
          version="1.1"
          id="L4"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"

        >
          <circle fill="#fff" stroke="none" cx="0" cy="50" r="15">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0"
            />
          </circle>
          <circle fill="#fff" stroke="none" cx="60" cy="50" r="15">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.25"
            />
          </circle>
          <circle fill="#fff" stroke="none" cx="120" cy="50" r="15">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.5"
            />
          </circle>
        </svg>
</template>