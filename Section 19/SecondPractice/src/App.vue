<template>
  <header>
    <h1>Expense Tracker</h1>
  </header>
  <section>
    <div>Available Funds: {{ wallets.availableFunds }}</div>
    <div>Total Expenses: {{ wallets.currentExpenses }}</div>
    <hr />
    <div>Funds left: {{ remainingFunds }}</div>
  </section>
  <section>
    <form @submit.prevent="addExpense">
      <div>
        <label for="amount">Amount</label>
        <input id="amount" type="number" v-model="wallets.enteredExpenses" />
      </div>
      <button>Add Expense</button>
    </form>
  </section>
</template>

<script setup>
import {computed, watch, reactive,} from "vue";

const wallets = reactive({
  availableFunds: 100,
  currentExpenses: 0,
  enteredExpenses: 0,
})

function addExpense(){
  wallets.currentExpenses += wallets.enteredExpenses

}
const remainingFunds = computed(function (){
  return wallets.availableFunds - wallets.currentExpenses
})
watch(remainingFunds, function (newValue){
  if (newValue < 0){
    alert('You are Broke')
  }
})

</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #30006e;
  color: white;
}
section {
  margin: 2rem auto;
  max-width: 35rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

form div {
  margin: 1rem 0;
}
input {
  width: 100%;
  padding: 0.15rem;
}
label {
  font-weight: bold;
  margin: 0.5rem 0;
}
button {
  background-color: #30006e;
  border: 1px solid #30006e;
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  color: white;
}
button:hover,
button:active {
  background-color: #5819ac;
  border-color: #5819ac;
}
</style>