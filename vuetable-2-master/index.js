Vue.use(Vuetable);
new Vue({
  el: '#app',
  components:{
   'vuetable-pagination': Vuetable.VuetablePagination
  },
  data: {
    searchFor: '',
    moreParams: [],
    // fields: tableColumns,
    fields: [],
    sortOrder: [{
        field: 'name',
        direction: 'asc',
    }],
    multiSort: true,
    paginationComponent: 'vuetable-pagination',
    perPage: 10
  },
  created: function () {
    var self = this;
    axios.get('tablehead.json').then((response) => {
      var tableColumns = response.data.tableColumns;
      self.fields = tableColumns;
    })
    .catch((error) => {
    console.log(error);
  });
  },
  watch: {
      'perPage': function(val, oldVal) {
          this.$broadcast('vuetable:refresh')
      },
      'paginationComponent': function(val, oldVal) {
          this.$broadcast('vuetable:load-success', this.$refs.vuetable.tablePagination)
      }
  },
  methods: {
      /**
      * Callback functions
      */
      allCap: function(value) {
          return value.toUpperCase()
      },
      formatDate: function(value, fmt) {
          if (value == null) return ''
          fmt = (typeof fmt == 'undefined') ? 'D MMM YYYY' : fmt
          return moment(value, 'YYYY-MM-DD').format(fmt)
      },
      setFilter: function() {
          this.moreParams = [
              'filter=' + this.searchFor
          ]
          this.$nextTick(function() {
              this.$broadcast('vuetable:refresh')
          })
      },
      resetFilter: function() {
          this.searchFor = ''
          this.setFilter()
      },
      changePaginationComponent: function() {
          this.$broadcast('vuetable:load-success', this.$refs.vuetable.tablePagination)
      },
      preg_quote: function( str ) {
          // http://kevin.vanzonneveld.net
          // +   original by: booeyOH
          // +   improved by: Ates Goral (http://magnetiq.com)
          // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
          // +   bugfixed by: Onno Marsman
          // *     example 1: preg_quote("$40");
          // *     returns 1: '\$40'
          // *     example 2: preg_quote("*RRRING* Hello?");
          // *     returns 2: '\*RRRING\* Hello\?'
          // *     example 3: preg_quote("\\.+*?[^]$(){}=!<>|:");
          // *     returns 3: '\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:'

          return (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
      },
      highlight: function(needle, haystack) {
          return haystack.replace(
              new RegExp('(' + this.preg_quote(needle) + ')', 'ig'),
              '<span class="highlight">$1</span>'
          )
      },
      rowClassCB: function(data, index) {
          return (index % 2) === 0 ? 'odd' : 'even'
      },
      // -------------------------------------------------------------------------------------------
      // You can change how sort params string is constructed by overriding getSortParam() like this
      // -------------------------------------------------------------------------------------------
      // getSortParam: function(sortOrder) {
      //     console.log('parent getSortParam:', JSON.stringify(sortOrder))
      //     return sortOrder.map(function(sort) {
      //         return (sort.direction === 'desc' ? '+' : '') + sort.field
      //     }).join(',')
      // }
  },
  events: {
      'vuetable:row-changed': function(data) {
          console.log('row-changed:', data.name)
      },
      'vuetable:row-clicked': function(data, event) {
          console.log('row-clicked:', data.name)
      },
      'vuetable:cell-clicked': function(data, field, event) {
          console.log('cell-clicked:', field.name)
          if (field.name !== '__actions') {
              this.$broadcast('vuetable:toggle-detail', data.id)
          }
      },
      'vuetable:action': function(action, data) {
          console.log('vuetable:action', action, data)

          if (action == 'view-item') {
              sweetAlert(action, data.name)
          } else if (action == 'edit-item') {
              sweetAlert(action, data.name)
          } else if (action == 'delete-item') {
              sweetAlert(action, data.name)
          }
      },
      'vuetable:load-success': function(response) {
          var data = response.data.data
          if (this.searchFor !== '') {
              for (n in data) {
                  data[n].name = this.highlight(this.searchFor, data[n].name)
                  data[n].email = this.highlight(this.searchFor, data[n].email)
              }
          }
      },
      'vuetable:load-error': function(response) {
          if (response.status == 400) {
              sweetAlert('Something\'s Wrong!', response.data.message, 'error')
          } else {
              sweetAlert('Oops', E_SERVER_ERROR, 'error')
          }
      }
  }
})