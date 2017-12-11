Vue.use(VueTables.client, {
  perPage: 25
})

new Vue({
  el: "#vue-tables-options",
  data: {
    columns: ['option', 'type', 'description', 'default'],
    data: [
    {
    option:'columnsClasses',
    type:'Object',
    description:'Add class(es) to the specified columns. Takes key-value pairs, where the key is the column name and the value is a string of space-separated classes',
    default:'<code>{}</code>'
    },
    {
    	option:'multiSorting (client-side)',
      type:'Object',
      description:'See docomentation',
      default:'<code>{}</code>'
    },
    {
    	option:'serverMultiSorting',
      type:'Boolean',
      description:'Enable multiple columns sorting using Shift + Click on the server component',
      default:'<code>false</code>'
    },
     {
    	option:'clientMultiSorting',
      type:'Boolean',
      description:'Enable multiple columns sorting using Shift + Click on the client component',
      default:'<code>true</code>'
    },
    {
    	option:'requestAdapter (server-side)',
      type:'Function',
      description:'Set a custom request format',
      default:'<code>function(data) { return data; }</code>'
    },
    {
    option:'saveState',
    type:'Boolean',
    description:'Constantly save table state and reload it each time the component mounts. When setting it to true, use the `name` prop to set an identifier for the table',
    default:'<code>false</code>'
    },
     {
    option:'storage',
    type:'String',
    description:'Which persistance mechanism should be used when saveState is set to true: `local` - localStorage. `session` - sessionStorage',
    default:'<code>local</code>'
    },
     {
    option:'customSorting',
    type:'Object',
    description:'See documentation',
    default:'<code>{}</code>'
    },
      {
    option:'highlightMatches',
    type:'Boolean',
    description:'Highlight matches',
    default:'<code>false</code>'
    },
    {
      option: 'childRow',
      type: 'Function',
      description: 'See documentation',
      default: "<code>false</code>"
    },
     {
      option: 'rowClassCallback',
      type: 'Function',
      description: 'Add dynamic classes to table rows. E.g <pre><code>function(row) {return `row-${row.id}`}</code></pre>This can be useful for manipulating the appearance of rows based on the data they contain',
      default: "<code>false</code>"
    },
      {
      option: 'requestKeys (server-side)',
      type: 'Object',
      description: 'Set your own request keys',
      default: "<pre><code>{<br>query:'query',<br>limit:'limit',<br>orderBy:'orderBy',<br>ascending:'ascending',<br>page:'page',<br>byColumn:'byColumn'<br>}</code></pre>"
    },
    {
      option: 'uniqueKey',
      type: 'String',
      description: 'The key of a unique identifier in your dataset, used to track the child rows, and return the original row in row click event',
      default: "<code>id</code>"
    },
    {
      option: 'responseAdapter (server-side)',
      type: 'Function',
      description: 'Mould the server response to match the format expected by the client.This is especially useful when calling a foreign API, where you cannot control the response on the server-side',
      default: "<pre>function(resp) {<br>return {<br>data: resp.data,<br>count: resp.count<br>}<br>}</pre>"
    },
    {
      option: 'initFilters',
      type: 'Object',
      description: 'Set initial values for all filter types: generic, by column or custom. Accepts an object of key-value pairs, where the key is one of the following:<br>a. "GENERIC" - for the generic filter <br>b. column name - for by column filters.<br> c. filter name - for custom filters.<br>In case of date filters the date range should be passed as an object comprised of start and end properties, each being a moment object.',
      default: "<code>{}</code>"
    }, {
      option: 'headings',
      type: 'Object',
      description: 'Table headings. Can be either a string or a function, if you wish to inject vue-compiled HTML. E.g <pre><code>function(h) { return &lt;h2>Title&lt;/h2>}</code></pre>Note that this example uses jsx, and not HTML.',
      default: 'gleaned from the first row properties. underscores become spaces. First letter captialized'
    }, {
      option: 'sortable',
      type: 'Array',
      description: 'sortable columns',
      default: 'all columns'
    }, {
      option: 'perPage',
      type: 'number',
      description: 'initial records per page',
      default: "<code>10</code>"
    }, {
      option: 'perPageValues',
      type: 'Array',
      description: 'records per page options',
      default: '<code>[10,25,50,100]</code>'
    }, {
      option: 'templates',
      type: 'Object',
      description: 'See documentaion',
      default: '<code>{}</code>'
    }, {
      option: 'texts',
      type: 'Object',
      description: 'Table texts',
      default: "<pre><code>texts:{<br>count:'Showing {from} to {to} of {count} records|{count} records|One record',<br>filter:'Filter Results:',<br>filterPlaceholder:'Search query',<br>limit:'Records:',<br>noResults:'No matching records',<br>page:'Page:', // for dropdown pagination <br>filterBy: 'Filter by {column}', // Placeholder for search fields when filtering by column<br>loading:'Loading...', // First request to server<br>defaultOption:'Select {column}' // default option for list filters<br>}</code></pre>"
    }, {
      option: 'pagination.dropdown',
      type: 'boolean',
      description: 'use a dropdown select pagination next to the records-per-page list, instead of links at the bottom of the table.',
      default: '<pre><code>pagination:{<br>  dropdown:false<br>}</code></pre>'
    }, {
      option: 'pagination.chunk',
      type: 'number',
      description: 'maximum pages in a chunk of pagination',
      default: '<pre><code>pagination:{<br>  chunk:10<br>}</code></pre>'
    }, {
      option: 'skin',
      type: 'string',
      description: 'space separated Bootstrap table styling classes',
      default: '<code>table-striped table-bordered table-hover</code>'
    }, {
      option: 'orderBy.column',
      type: 'string',
      description: 'initial column to sort by',
      default: 'Original dataset order'
    }, {
      option: 'orderBy.ascending',
      type: 'boolean',
      description: 'initial order direction',
      default: '<pre><code>orderBy:{<br>  ascending:true<br>}</code></pre>'
    }, {
      option: 'footerHeadings',
      type: 'boolean',
      description: 'display headings at the bottom of the table too',
      default: '<code>false</code>'
    }, {
      option: 'debounce',
      type: 'number',
      description: 'number of idle milliseconds (no key stroke) to wait before sending a request. Used to detect when the user finished his query in order to avoid redundant requests (server) or rendering (client)',
      default: '<code>500</code>'
    }, {
      option: 'dateFormat (client-side)',
      type: 'string',
      description: 'format to display date objects. Using <a href="http://momentjs.com">moment</a>',
      default: 'DD/MM/YYYY'
    }, {
      option: 'dateColumns',
      type: 'Array',
      description: 'use <a href="https://github.com/dangrossman/bootstrap-daterangepicker">daterangepicker</a> as a filter for the specified columns (when <code>filterByColumn</code> is set to <code>true</code>). Dates should be passed as moment objects, or as strings in conjunction with the <code>toMomentFormat</code> option',
      default: '<code>[]</code>'
    }, {
      option: 'datepickerOptions',
      type: 'Object',
      description: 'Options for the <code>daterangepicker</code> when using a date filter (see <code>dateColumns</code>)',
      default: '<pre><code>{<br>locale:{<br>cancelLabel:\'Clear\'<br>}<br>}</code></pre>'
    }, {
      option: 'toMomentFormat (client-side)',
      type: 'string',
      description: 'transform date columns string values to <code>moment</code> objects using this format. If this option is not used the consumer is expected to pass moment objects himself',
      default: '<code>false</code>'
    }, {
      option: 'filterable',
      type: 'Array / Boolean',
      description: 'Filterable columns',
      default: '<code>true</code> - All columns. Set to <code>false</code> or an empty array to hide the filter(s)'
    }, {
      option: 'customFilters',
      type: 'Array',
      description: 'See documentation',
      default: '<code>[]</code>'
    }, {
      option: 'sortIcon',
      type: 'String',
      description: 'sort icon classes',
      default: "<code><pre>{<br>base:'glyphicon',<br>up:'glyphicon-chevron-up',<br>down:'glyphicon-chevron-down'<br>}</pre></code>"
    }, {
      option: 'listColumns',
      type: 'Object',
      description: 'See documentation under "List Filters"',
      default: "<code>{}</code>"
    }, {
      option: 'params (server-side)',
      type: 'Object',
      description: 'Additional parameters to send along with the request',
      default: "<code>{}</code>"
    }, {
      option: 'columnsDisplay',
      type: 'Object',
      description: 'Responsive display for the specified columns. Columns will only be shown when the window width is within the defined limits. Accepts key-value pairs of column name and device. Possible values are <code>mobile</code> (x < 480),<code>mobileP</code> (x < 320), <code>mobileL</code> (320 <= x < 480),<code>tablet</code>(480 <= x < 1024),<code>tabletP</code> (480 <= x < 768), <code>tabletL</code> (768 <= x < 1024),<code>desktop</code> (x >= 1024). all options can be preceded by the logical operators <code>min</code>,<code>max</code>, and <code>not</code> followed by an underscore. For example, a column which is set to <code>not_mobile</code> will be shown when the width of the window is greater than or equal to 480px, while a column set to <code>max_tabletP</code> will only be shown when the width is under 768px',
      default: "<code>{}</code>"
    }],
    options: {
      sortable: ['option','type','description']
    }
  }

})