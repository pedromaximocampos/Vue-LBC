<template>
  <base-card>
    <template v-slot:header>
      <div>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </div>
    </template>
      <p>{{ infoText }}</p>
  </base-card>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

