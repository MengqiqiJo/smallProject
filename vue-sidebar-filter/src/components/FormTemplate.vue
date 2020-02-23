<template>
  <div class="form-body-wrapper row">
    <div class="col-md-4">

      <div v-for="eachBlockData in sampleSiderJson.siderData" v-bind:key="eachBlockData.fieldId">

        <div v-if="eachBlockData.displayType=='horizontalLine'">
          <hr>
        </div>

        <div v-if="eachBlockData.displayType=='generalCheckbox'">
          <div class="sider-checkbox-wrapper row">
            <div class="col-md-6 text-center" v-for="item in eachBlockData.options" v-bind:key="item.value">
              <div>
                <input type="checkbox" v-model="totalResult[eachBlockData.fieldId]" v-bind:value="item.value">
                <span>{{ item.label }}</span>
              </div>
            </div>
          </div>
          <!-- <span>Selected: {{ totalResult }}</span> -->
        </div>

        <div v-if="eachBlockData.displayType=='multiselect'">
          <div v-if="eachBlockData.isChild">
            <div class="col-md-12 text-center">
              <div>{{eachBlockData.fieldLabel}}</div>
              <MultiSelect v-model="totalResult[eachBlockData.fieldId]" optionValue="value" :options="getDropDownOption(totalResult[eachBlockData.parentId], eachBlockData)" :filter="true" optionLabel="value" placeholder="Select" />
              <!-- <span>Selected: {{ totalResult }}</span> -->
            </div>
          </div>

        </div>

      </div>

      <div>
        <input type="submit" value="Submit" v-on:click="submit" />
      </div>

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
    totalResult: sampleJson.result,
  }),
  methods: {
    submit: function() {
      // print result
      // below two ways both work
      console.log(this.totalResult);
      console.log(this.sampleSiderJson.result);
    },

    getDropDownOption: function(parentResult, childBlockData) {
      var temporaryData = [];
      childBlockData.options.forEach(eachChildBlockValue => {
        eachChildBlockValue.enable.forEach(eachChildRenderValue => {
          if (parentResult.includes(eachChildRenderValue)) {
              temporaryData.push(eachChildBlockValue);
          }
        });
      });

      const filteredArr = temporaryData.reduce((acc, current) => {
        const x = acc.find(item => item.value === current.value);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);


      childBlockData.options.forEach(eachChildBlockValue => {

        var tempEnable = eachChildBlockValue.enable;

        const foundIfParentChecked = parentResult.some(r=> tempEnable.indexOf(r) >= 0);

        if (!foundIfParentChecked) {

          var currentValueIndex = this.totalResult[childBlockData.fieldId].indexOf(eachChildBlockValue.value);
          if (currentValueIndex > -1) {
            this.totalResult[childBlockData.fieldId].splice(currentValueIndex, 1);
          }
        }

      });

      return filteredArr;
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sider-checkbox-wrapper {
  text-align:left;
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
