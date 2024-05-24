<script setup lang="ts">
import type { IconProps } from './type'

defineOptions({
  name: 'GzIcon',
  inheritAttrs: false
})

const props = withDefaults(defineProps<IconProps>(), {
  size: '1x',
})

</script>

<template>
  <i>

  </i>
</template>