<template>
    <f7-page>
      <f7-navbar title="Searchbar">
        <f7-nav-right>
          <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>
        </f7-nav-right>
        <f7-searchbar
          class="searchbar-demo"
          expandable
          search-container=".search-list"
          search-in=".item-title"
          :disable-button="!theme.aurora"
        ></f7-searchbar>
      </f7-navbar>
      <f7-list class="searchbar-not-found">
        <f7-list-item title="Nothing found"></f7-list-item>
      </f7-list>
      <f7-list class="search-list searchbar-found">
        <f7-list-item title="Plaza Senayan XXI"></f7-list-item>
        <f7-list-item title="City Plaza Jatinegara XXI"></f7-list-item>
        <f7-list-item title="AEON Mall JGC CGV"></f7-list-item>
        <f7-list-item title="Mangga Dua Square CINEPOLIS"></f7-list-item>
        <f7-list-item title="Citra XXI"></f7-list-item>
        <f7-list-item title="Green Pramuka Mall CGV"></f7-list-item>
        <f7-list-item title="Kelapa Gading XXI"></f7-list-item>
      </f7-list>
    </f7-page>
    </template>
    <script>
      import { theme } from 'framework7-vue';
    
      export default {
        data() {
          return {
            theme,
          };
        }
      }
    </script>