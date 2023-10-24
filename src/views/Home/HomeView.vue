<template>
  <main>
    <h1>Home</h1>
    <n-dropdown trigger="hover" :options="options" @select="handleSelect">
      <n-button>Go For a Trip</n-button>
    </n-dropdown>

    <n-carousel show-arrow>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'

const message = useMessage()

const options = ref([
  {
    label: 'Marina Bay Sands',
    key: 'marina bay sands',
    disabled: true
  },
  {
    label: "Brown's Hotel, London",
    key: "brown's hotel, london"
  },
  {
    label: 'Atlantis Bahamas, Nassau',
    key: 'atlantis nahamas, nassau'
  },
  {
    label: 'The Beverly Hills Hotel, Los Angeles',
    key: 'the beverly hills hotel, los angeles'
  }
])

function handleSelect() {
  message.warning('Selected')
}



</script>


<style type="scss" scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>