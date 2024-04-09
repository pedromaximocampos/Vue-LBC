<template>
  <li>
    <h2>{{ name }} {{ isFavorite === true ? '(Favorite)' : ''}}</h2>
    <button @click="toggleFavoriteStatus">{{ isFavorite === true ? 'Mark off' : 'Mark'}} Favorite </button>
    <br><br>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <br><br>
    <button @click="deleteFriend">Delete Friend</button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props:['name', 'phoneNumber', 'emailAddress', 'isFavorite',],
  props:{
    'id':{
      type:String,
      required:true
    },
    'name':{
      type:String,
      required:true,
    },
    'phoneNumber':{
      type:String,
      required:true,
    },
    'emailAddress':{
      type: String,
      required: true,
    },
    'isFavorite':{
      type: Boolean,
      required: false,
      default: false,
    }
  },
  emits:['toggle-favorite'],
  // emits:{
  //   'toggle-favorite':function (this.id) {}
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavoriteStatus() {
      this.$emit('toggle-favorite', this.id);

    },
    deleteFriend(){
      this.$emit('delete-friend',  this.id)
    }
  }
};
</script>