

<template>
  <dialog open>
    <slot name="errorSlot"></slot>
  </dialog>
</template>

<style scoped>
dialog{
  position:fixed;
  top:20vh;
  background-color:white;
  box-shadow: 0 2px 8px 0 black;
  margin: 0;
  width:30%;
  left:30%;

}
</style>