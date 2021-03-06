<?php

echo '{
  "options": {
    "sortable": ["option","type","description"]
  },
  "columns": ["option", "type", "description", "default"],
  "data": [
    {
      "option":"columnsClasses",
      "type":"Object",
      "description":"Add class(es) to the specified columns. Takes key-value pairs, where the key is the column name and the value is a string of space-separated classes",
      "default":"<code>{}</code>",
      "sortField": "option"
    },
    {
      "option":"aClasses",
      "type":"Object",
      "description":"Add class(es) to the specified columns. Takes key-value pairs, where the key is the column name and the value is a string of space-separated classes",
      "default":"<code>{}</code>",
      "sortField": "option"
    },
    {
      "option":"multiSorting (client-side)",
      "type":"Object",
      "description":"See docomentation",
      "default":"<code>{}</code>",
      "sortField": "option"
    },
    {
      "option":"serverMultiSorting",
      "type":"Boolean",
      "description":"Enable multiple columns sorting using Shift + Click on the server component",
      "default":"<code>false</code>",
      "sortField": "option"
    },
     {
      "option":"clientMultiSorting",
      "type":"Boolean",
      "description":"Enable multiple columns sorting using Shift + Click on the client component",
      "default":"<code>true</code>",
      "sortField": "option"
    },
    {
      "option":"requestAdapter (server-side)",
      "type":"Function",
      "description":"Set a custom request format",
      "default":"<code>function(data) { return data; }</code>",
      "sortField": "option"
    },
    {
      "option":"1multiSorting (client-side)",
      "type":"Object",
      "description":"See docomentation",
      "default":"<code>{}</code>",
      "sortField": "option"
    },
    {
      "option":"2serverMultiSorting",
      "type":"Boolean",
      "description":"Enable multiple columns sorting using Shift + Click on the server component",
      "default":"<code>false</code>",
      "sortField": "option"
    },
     {
      "option":"3clientMultiSorting",
      "type":"Boolean",
      "description":"Enable multiple columns sorting using Shift + Click on the client component",
      "default":"<code>true</code>",
      "sortField": "option"
    },
    {
      "option":"4requestAdapter (server-side)",
      "type":"Function",
      "description":"Set a custom request format",
      "default":"<code>function(data) { return data; }</code>",
      "sortField": "option"
    },
    {
      "option":"5multiSorting (client-side)",
      "type":"Object",
      "description":"See docomentation",
      "default":"<code>{}</code>",
      "sortField": "option"
    },
    {
      "option":"6serverMultiSorting",
      "type":"Boolean",
      "description":"Enable multiple columns sorting using Shift + Click on the server component",
      "default":"false0",
      "sortField": "option"
    },
     {
      "option":"7clientMultiSorting",
      "type":"Boolean",
      "description":"Enable multiple columns sorting using Shift + Click on the client component",
      "default":"<code>true</code>",
      "sortField": "option"
    },
    {
      "option":"8requestAdapter (server-side)",
      "type":"Function",
      "description":"Set a custom request format",
      "default":"<code>function(data) { return data; }</code>",
      "sortField": "option"
    }
  ]

}';