<script setup lang="ts">
import {computed, inject, ref} from "vue"
import type {ToastsController} from "../model/ToastsController"
import ToastsLiteItem from "./ToastsLiteItem.vue"
import {toast} from "../index"


const items = computed(() => Array.from(toast.toasts.values()))
const position = computed(() => (items.value.length ? items.value[0].position : "top-center"))
const toastRefs = ref<InstanceType<typeof ToastsLiteItem>[]>([])

function onMouseEnter() {
  toastRefs.value.forEach((toast) => toast?.pause())
}

function onMouseLeave() {
  toastRefs.value.forEach((toast) => toast?.resume())
}
</script>

<template>
  <Teleport to="body">
    <div :class="['toasts-lite__toast-container', `toasts-lite__${position}`]" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <transition-group name="toasts-lite">
        <template v-for="item in items" :key="item.id">
          <slot :name="item.type" :toast="item">
            <ToastsLiteItem
              :id="item.id"
              ref="toastRefs"
              :type="item.type"
              :message="item.message"
              :auto-close="item.autoClose"
              :duration="item.duration"
              :position="item.position"
              @close="toast.remove(item.id)"
            />
          </slot>
        </template>
      </transition-group>
    </div>
  </Teleport>
</template>

<style src="../styles/index.css" />
