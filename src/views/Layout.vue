<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      
      <div class="p-3 bg-blue-300 m-2 rounded-lg">
        <router-link to="/">ADMIN-DASHBOARD</router-link>
      </div>

      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item v-for="el in menu" :key="el">
        <router-link :to="el.path" class="flex items-center gap-x-3">
            <i :class="el.icon+' text-2xl'" ></i>
            <span>{{ el.title }}</span>
        </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <span v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)"
          ><i class="bx bx-menu-alt-right text-2xl"></i
        ></span>
        <span v-else class="trigger" @click="() => (collapsed = !collapsed)">
          <i class="bx bx-menu-alt-left text-2xl"></i>
        </span>
      </a-layout-header>

      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '100vh' }"
      >
        <router-view></router-view>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import navlinks from '../constants/navmenu'

const menu = ref([])
const selectedKeys = ref(['1'])
const collapsed = ref(false)
const role = localStorage.getItem('role') || 'SUPER-ADMIN'

const activemenu = () => {
  menu.value = navlinks.filter((item) => {
    if (item.role.includes(role)) {
      return item
    }
  })
}

onBeforeMount(() => {
  activemenu()
  localStorage.setItem("role","SUPER-ADMIN")
})
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
