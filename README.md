# Dynamic Render Demo

Use dynamic render to improve single page application SEO.

Default user-agent get javascript and browser will render it

```sh
$ curl https://drdemo.glitch.me
<!doctype html>
<html lang="en">
<head>
  <title>Kitten Corner</title>
  <meta charset="utf-8">
  <meta name="description" content="Kitten Corner has a bunch of lovely cat pictures ready for you!">
  <meta name="viewport" content="width=device-width">

  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Kitten Corner</h1>

  <p><button>Get more kittens!</button></p>

  <ul>
  </ul>

  <template>
    <li>
      <img alt="">
    </li>
  </template>
  <script src="client.js"></script>
</body>
```

Google bot (with different User-Agent) see pre render content without javascript:

```sh
$ curl -H 'User-Agent: googlebot' https://drdemo.glitch.me/
<!DOCTYPE html><html lang="en"><head><base href="https://drdemo.glitch.me/">
  <title>Kitten Corner</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Kitten Corner</h1>

  <p><button>Get More Kittens</button></p>

  <ul>
    <li><img alt="" src="https://cats-api-demo.ew.r.appspot.com/img/1.jpg"></li>
    <li><img alt="" src="https://cats-api-demo.ew.r.appspot.com/img/2.jpg"></li>
    <li><img alt="" src="https://cats-api-demo.ew.r.appspot.com/img/3.jpg"></li>
    <li><img alt="" src="https://cats-api-demo.ew.r.appspot.com/img/4.jpg"></li>
    <li><img alt="" src="https://cats-api-demo.ew.r.appspot.com/img/5.jpg"></li>
    <li><img alt="" src="https://cats-api-demo.ew.r.appspot.com/img/6.jpg"></li>
    <li><img alt="" src="https://cats-api-demo.ew.r.appspot.com/img/7.jpg"></li>
    <li><img alt="" src="https://cats-api-demo.ew.r.appspot.com/img/8.jpg"></li>
    <li><img alt="" src="https://cats-api-demo.ew.r.appspot.com/img/9.jpg"></li>
    <li><img alt="" src="https://cats-api-demo.ew.r.appspot.com/img/10.jpg"></li></ul>

  <template>
    <li><img alt=""></li></template>

</body></html>
```

## References

- https://developers.google.com/search/docs/advanced/javascript/dynamic-rendering
- https://developers.google.com/search/docs/advanced/javascript/fix-search-javascript
- https://github.com/GoogleChrome/rendertron
- https://github.com/prerender/prerender
- https://codelabs.developers.google.com/codelabs/dynamic-rendering
- https://search.google.com/test/mobile-friendly
- https://render-tron.appspot.com/
