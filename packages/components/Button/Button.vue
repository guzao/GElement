<script lang="ts" setup>
import { ref } from 'vue'
import type { ButtonProps } from './type'

/** 组件名称 */
defineOptions({
  name: 'GzButton',
})


const _ref = ref<HTMLButtonElement>()

const props =  withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
}) 

</script>


<template>
  <component
  ref="_ref"
  :is="tag"
  class="gz-button"
  :class="{
  }"
  >
    <slot />
  </component> 
</template>

<style lang="css" scoped>
@import'./style.css';
</style>