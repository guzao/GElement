<script lang="ts" setup>
import { computed, ref } from 'vue'
import { throttle } from 'lodash-es'
import type { ButtonProps, ButtonEmtis } from './type'

/** 组件名称 */
defineOptions({
  name: 'GzButton',
})

const _ref = ref<HTMLButtonElement>()

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: false,
  throttleDuration: 500,
})

const buttonClass = computed(() => {
  const { plain, round, circle, type, size, disabled, loading, text } = props
  return {
    'is-text': text,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-loading': loading,
    'is-disabled': disabled,
    [`gz-button--${type}`]: type,
    [`gz-button--${size}`]: size,
  }
})

const emits = defineEmits<ButtonEmtis>()
const handleButtonClick = (e: MouseEvent) => emits('click', e)
const handleButtonThrottleClick = throttle(handleButtonClick, props.throttleDuration)



</script>


<template>
  <component ref="_ref" :is="tag" class="gz-button" :disabled="disabled ? disabled : void 0"
    :autofocus="autofocus ? autofocus : void 0" :type="tag === 'button' ? nativeType : void 0" :class="buttonClass"
    @click="(e: MouseEvent) => useThrottle ? handleButtonThrottleClick(e) : handleButtonClick(e)">
    <slot />
  </component>
</template>

<style lang="css" scoped>
@import'./style.css';
</style>