<template>
  <div class="form-body-wrapper">

    <div v-for="eachBlockData in sampleSiderJson.siderData" v-bind:key="eachBlockData.fieldId">

      <div v-if="eachBlockData.displayType=='horizontalLine'">
        <hr>
      </div>

      <div v-if="eachBlockData.displayType=='generalCheckbox'">
        <div>
          <label v-for="item in eachBlockData.options" v-bind:key="item.value">
            <input type="checkbox" v-model="eachBlockData.result" v-bind:value="item.value"> {{ item.label }}
          </label>
        </div>
        <span>Selected: {{ eachBlockData.result }}</span>
      </div>

      <div v-if="eachBlockData.displayType=='multiselect'">
        <span>{{eachBlockData.fieldLabel}}</span>
        <MultiSelect v-model="eachBlockData.result" optionValue="value" :options="eachBlockData.options" :filter="true" optionLabel="label" placeholder="Select" />

        <span>Selected: {{ eachBlockData.result }}</span>
      </div>

    </div>

    <div>
      <input type="submit" value="Submit" v-on:click="submit" />
    </div>

  </div>

</template>

<script>
import sampleJson from '../assets/sampleSiderFilter.json'
import MultiSelect from 'primevue/multiselect';

export default {
  name: 'FormTemplate',
  components: {
    MultiSelect,
  },
  data: () => ({
    sampleSiderJson: sampleJson,
  }),
  methods: {
    submit: function() {
      console.log(this.dropDownSelected);
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
