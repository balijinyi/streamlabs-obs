<template>
<div id="mainWrapper" class="modal-layout" :class="{'night-theme': nightTheme}">
  <title-bar :title="title" class="modal-layout-titlebar" />
  <div
    class="ModalLayout-fixed"
    :style="fixedStyle">
    <slot name="fixed"/>
  </div>
  <div
    class="modal-layout-content"
    :style="contentStyle">
    <slot name="content" v-if="!loading"/>
    <i class="fa fa-spinner fa-pulse modal-layout-spinner" v-else/>
  </div>
  <div v-if="showControls" class="modal-layout-controls">
    <button
      v-if="showCancel"
      class="button button--default"
      @click="cancel">
      {{ $t('Cancel') }}
    </button>
    <button
      class="button button--action"
      @click="doneHandler">
      {{ $t('Done') }}
    </button>
  </div>
  <div v-if="customControls" class="modal-layout-controls">
    <slot name="controls" />
  </div>
</div>
</template>

<script lang="ts" src="./ModalLayout.vue.ts"></script>

<style lang="less" scoped>
@import "../styles/index";

.modal-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  color: @day-paragraph;
}

.modal-layout-titlebar {
  flex-shrink: 0;
}

.ModalLayout-fixed {
  flex-shrink: 0;
}

.modal-layout-content {
  flex-grow: 1;
  height: 100%;
}

.modal-layout-spinner {
  font-size: 36px;
  display: inline-block;
  width: 100%;
  text-align: center;
  margin: 100px 0;
}

.modal-layout-controls {
  background-color: @day-section;
  padding: 16px;
  text-align: right;
  flex-shrink: 0;
  z-index: 10;

  .button {
    margin-left: 8px;
  }
}

.modal--side-nav {
  display: flex;
  align-content: stretch;
  align-items: stretch;
  height: 100%;
}

.modal-container--side-nav {
  flex-grow: 1;
  margin: -20px -20px -20px 0;
  overflow: auto;
}

.night-theme {
  &.modal-layout {
    background-color: @night-primary;
    color: @night-paragraph;
  }

  .modal-layout-controls {
    background-color: @night-section;
  }
}
</style>
