<template>
  <div>
    <the-header></the-header>
<!--    <badge-list></badge-list>-->
<!--    <user-info-->
<!--      :full-name="activeUser.name"-->
<!--      :info-text="activeUser.description"-->
<!--      :role="activeUser.role"-->
<!--    ></user-info>-->
<!--    <course-goals>-->
<!--      <template #goalSlot="goalSlotProps">-->
<!--        <h2>{{ goalSlotProps.content }}</h2>-->

<!--      </template>-->
<!--    </course-goals>-->
    <button @click="toggleComponent('active-component')">Active Component</button>
    <button @click="toggleComponent('disabled-component')">Disabled Component</button>
    <keep-alive>
    <component :is="showedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "@/components/Layout/TheHeader.vue";
// import BadgeList from "@/components/BadgeList.vue";
// import UserInfo from "@/components/UserInfo.vue";
// import Goals from "@/components/Goals.vue";
import ActiveComponent from "@/components/ActiveComponent.vue";
import DisabledComponent from "@/components/DisabledComponent.vue";
export default {
  components:{
    'active-component': ActiveComponent,
    'disabled-component': DisabledComponent,
    'the-header': TheHeader,
    // 'badge-list': BadgeList,
    // 'user-info': UserInfo,
    // 'course-goals': Goals,
  },
  data() {
    return {
      showedComponent: 'active-component',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    toggleComponent(component) {
      this.showedComponent = component
    }

  }

};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>