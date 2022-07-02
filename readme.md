# FormTestJS

シンプルなフォームのテスト用のJS簡単な自動入力などを行います。  
色々追加予定。

## install

```
$ npm i form-test-js
```

## autoInput()

```
  import {FormTest} from "../src/FormTest.js";

  var formTest = new FormTest();
  formTest.autoInput({
    "input_text":"Yamaaa",
    "input_password":"asdfasdf00",
    "input_textarea":"だみーてきすとです。\nだみーてきすとです。",
    "input_radio":"male",
    "input_check[]":['succer','baseball'],
    "input_select":['engineer']
  });
```