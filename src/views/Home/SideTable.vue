<template>
  <div>
    <div>
      <div class="mt-[1vw]">
        <Icon
          icon="icon-park-outline:new-computer"
          class="w-[1.5vw] h-[1.5vw] ml-[0.5vw]"
        />
        <span>工作台</span>
      </div>

      <div class="mt-[1vw]">
        <Icon
          icon="solar:folder-line-duotone"
          class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]"
        />
        <span class="ml-[0.3vw]">项目</span>
      </div>
      <div class="mt-[1vw]">
        <Icon
          icon="simple-icons:aircall"
          class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]"
        />
        <span class="ml-[0.7vw]">AI</span>
      </div>
      <div class="mt-[1vw]">
        <Icon icon="lucide:file-text" class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]" />
        <span class="ml-[0.3vw]">事项</span>
      </div>
      <div class="mt-[1vw]">
        <Icon
          icon="solar:code-square-linear"
          class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]"
        />
        <span class="ml-[0.3vw]">代码</span>
      </div>
      <div class="mt-[1vw]">
        <Icon icon="ph:cube" class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]" />
        <span class="ml-[0.3vw]">制品</span>
      </div>
      <div class="mt-[1vw]">
        <Icon
          icon="ic:outline-insights"
          class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]"
        />
        <span class="ml-[0.3vw]">洞察</span>
      </div>
      <div class="mt-[1vw]">
        <Icon icon="mage:book-text" class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]" />
        <span class="ml-[0.3vw]">知识</span>
      </div>
      <div class="mt-[1vw]">
        <Icon icon="mdi:automatic" class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]" />
        <span>自动化</span>
      </div>
      <div class="mt-[1vw]">
        <Icon icon="akar-icons:person" class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]" />
      </div>
      <div class="mt-[1vw]">
        <Icon icon="hugeicons:more-02" class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]" />
      </div>
      <div class="mt-[1vw]">
        <Icon
          icon="lsicon:remind-outline"
          class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]"
        />
      </div>
      <div class="mt-[1vw]">
        <Icon icon="tdesign:setting" class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]" />
      </div>
      <div class="mt-[1vw]">
        <Icon
          icon="iconoir:question-mark-circle"
          class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]"
        />
      </div>
      <div class="mt-[1vw]">
        <Icon
          icon="octicon:feed-person-16"
          class="w-[1.5vw] h-[1.5vw] ml-[0.4vw]"
        />
      </div>
    </div>
    <div>
    <div class="absolute top-[2vw] left-[5vw]">
      <h1 class="font-bold text-2xl">代码仓库</h1>
      <div class="w-[200vw] h-[0.1vw] border-2 mt-[2vw]"></div>
    </div>
    <div>
        <router-link to="/visit" class="absolute top-[10vw] left-[6vw] text-xl font-bold">最近访问</router-link>
        <router-link to="/all" class="absolute top-[10vw] left-[15vw] text-xl font-bold">全部仓库</router-link>
        <router-link to="/visit" class="absolute top-[10vw] left-[24vw] text-xl font-bold">开源仓库</router-link>
    </div>
    <div class="absolute top-[15vw] left-[40vw]">
        <router-view></router-view>
    </div>
</div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
