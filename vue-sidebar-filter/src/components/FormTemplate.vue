<template>
  <div class="form-body-wrapper">
    <h1>{{ msg }}</h1>

    <!-- <select v-model="dropDownSelected">
      <option v-for="option in dropDownSelectOptions" v-bind:key="option.value" v-bind:value="option.value">
        <label>{{ option.text }}</label>
      </option>
    </select>
  <span>Selected: {{ dropDownSelected }}</span>

    <hr>

    <div>
      <label v-for="item in checkboxItems" v-bind:key="item.value">
        <input type="checkbox" v-model="checkboxSelectedItems" v-bind:value="item.value"> {{ item.text }}
      </label>
    </div>
    <span>Selected: {{ checkboxSelectedItems }}</span> -->

    <hr>

    <div v-for="eachBlockData in sampleSiderJson.siderData" v-bind:key="eachBlockData.fieldId">

      <div v-if="eachBlockData.displayType=='horizontalLine'">
        <hr>
      </div>

      <div v-if="eachBlockData.displayType=='generalCheckbox'">
        <div>
          <label v-for="item in eachBlockData.options" v-bind:key="item.value">
            <input type="checkbox" v-model="checkboxSelectedItems" v-bind:value="item.value"> {{ item.label }}
          </label>
        </div>
        <span>Selected: {{ checkboxSelectedItems }}</span>
      </div>




      <div v-if="eachBlockData.displayType=='multiselect'">
      <span>{{eachBlockData.fieldLabel}}</span>
        <select v-model="eachBlockData.default">
          <option v-for="option in eachBlockData.options" v-bind:key="option.value" v-bind:value="option.value">
            <label>{{ option.label }}</label>
          </option>
        </select>
        <span>Selected: {{ eachBlockData.default }}</span>
      </div>

    </div>

    <div>
      <input type="submit" value="Submit" v-on:click="submit" />
    </div>

  </div>

</template>

<script>
import sampleJson from '../assets/sampleSiderFilter.json'

export default {
  name: 'FormTemplate',
  props: {
    msg: String,

  },
  data: () => ({
    sampleSiderJson: sampleJson,
    dropDownSelected: 'A',
    dropDownSelectOptions: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],
    checkboxItems : [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],
    checkboxSelectedItems : [],
  }),
  methods: {
    submit: function() {
      console.log(this.dropDownSelected);
      console.log(this.checkboxSelectedItems);
      console.log(this.sampleSiderJson.siderData);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-body-wrapper {
  width:50%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
