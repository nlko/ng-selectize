This is an Angular.js directive for Brian Reavis's selectize jQuery plugin (http://brianreavis.github.io/selectize.js/).

Info
====
Module: 'theaquaNg'

Directive: 'selectize'

Using:

``
  <select name="" selectize="{  delimiter: ',', persist: false, load:'my_load' }">
``


 - load : name of a function in the scope to call on the load event (see selective documentation).
 - The same appy for the following function: score, onInitialize, onChange, onItemAdd, onItemRemove, onClear, onDelete, onOptionAdd, onOptionRemove, onDropdownOpen, onDropdownClose, onType, onLoad, render