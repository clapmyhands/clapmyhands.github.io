<script setup lang="ts">
import avatarURL from '@/assets/avatar.jpg'
import quadartURL from '@/assets/quadart.png'
</script>

<template>
  <div class="grid grid-cols-1 place-content-center mx-auto max-w-[75%]">
    <div class="card card-compact
      flex flex-col place-content-center gap-0
      my-6 mx-auto
      md:h-48 md:flex-row">
      <div class="avatar place-self-center
        w-40 h-40 p-2
        md:w-48 md:h-48 md:p-4">
        <div class="rounded-full">
          <img :src="avatarURL" alt="Portrait of owner of site.">
        </div>
      </div>
      <div class="card-body items-center text-center flex flex-col">
        <h1 class="card-title">Clapmyhands</h1>
        <div class="flex-grow">
          Software Developer @ Singapore <br>
          Photography on the side
        </div>
        <div class="card-action">
          <a href="https://github.com/clapmyhands/"
          target="_blank" rel="noopener noreferrer" aria-label="Go to GitHub">
            <div class="btn btn-square btn-sm btn-outline brand-icon">
              <font-awesome-icon size="xl" icon="fa-brands fa-github"></font-awesome-icon>
            </div>
          </a>
          <a href="https://www.instagram.com/clapmyhands/"
          target="_blank" rel="noopener noreferrer" aria-label="Go to Instagram">
            <div class="btn btn-square btn-sm btn-outline brand-icon">
              <font-awesome-icon size="xl" icon="fa-brands fa-instagram"></font-awesome-icon>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 content-center mt:4 mx-4
      md:grid-cols-2 md:mx-10 md:mt-6
      lg:grid-cols-3 lg:mx-12">
      <div class="card card-bordered card-compact">
        <figure>
          <img
            :src="quadartURL"
            alt="QuadArt Sample"/>
        </figure>
        <div class="card-body">
          <h2 class="card-title">QuadArt</h2>
          <p>
            Using the concept of a Quadtree, post-process images into blocks of colors
          </p>
          <div class="card-actions justify-end">
            <a href="https://clapmyhands.com/QuadArt" class="link">Open</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.card-bordered {
  border-color: oklch(var(--b2));
}

.brand-icon:not(:hover) {
  border-width: 0;
}

.link {
  color: #8400ff;
}

</style>
