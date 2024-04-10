
<template>
  <section>
    <header>
      <h1>Sixth Practice</h1>
    </header>
    <user-data @add-new-user="addUser"></user-data>


      <div v-if="users.length === 0">
        <p>You dont have users at your application</p>
      </div>

      <active-user v-else v-for="user in users"
                  :key="user.id"
                  :age="user.age"
                  :name="user.name"
                  :id="user.id">
      </active-user>


  </section>
</template>

<script >

export default {
  data (){
    return{
      users:[]
    }
  },
  methods: {
    addUser(userName, userAge){
      const newUser = {
        id: new Date().toISOString(),
        name: userName,
        age: parseInt(userAge),
      }
      this.users.push(newUser)
    }
  }
}
</script>

<style >
*{
  margin: 0;
  padding: 0;
  font-family: "Times New Roman",serif;
  box-sizing: border-box;
}
header{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
div{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  color: black;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
div h1,
div h2{
  display: inline;
  margin-right: 10px;
  padding: 5px;
}
div p{
  display: inline;
  font-size: 1.2rem;
  font-weight: bold;
}
#app button{
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app label{
  font-size:1.2rem;
  font-weight:bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;

}
#app form input{
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 70%;
  margin-bottom: 10px;
}
#app form button{
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin-top: 5px;
}

</style>