# jQuery OffCanvas Menu

A flexible offcanvas / hamburger menu, typically used for mobile sized screens.  
[Demo](http://codepen.io/mcnamee/pen/Wbvoew)

## The Idea

At the core, the idea is to have 2 elements in the root of the HTML `<body>`:

- `<offCanvas />` - anything that should appear in the off canvas (eg. mobile) menu
- `<onCanvas />` - the webpage / everything else

When the user taps a button, `<onCanvas />` slides off the screen and `<offCanvas />` slides into view.

## Benefit

There are, of course other jQuery plugins that do a similar thing. Although sometimes we needed more than an off canvas menu. We wanted to add social icons, perhaps a logo to a certain spot, a copyright piece etc. Having a simple `<div />` wrapper that we can put anything in, made it so much simpler than just a menu plugin.

## Installation

### Step 1. Include styles and scripts

eg.  
`<script src="path/to/jquery.js" type="text/javascript"></script>`  
`<script src="path/to/jquery.offcanvas.menu.js" type="text/javascript"></script>`  
`<link href="path/to/jquery.offcanvas.menu.css" type="text/css" rel="stylesheet" />`

### Step 2. Define the On Canvas Element

Wrap the body of your website (everything other than the off canvas menu) in a `<div class="onCanvas" />`

### Step 3. Define the Off Canvas Element

Create an 'off canvas' element (eg. the mobile menu) by using a `<div class="offCanvas" data-menu="offcanv_menu"/>` where the id is unique to this menu.

You can also add an unordered list (`<ol />`) with the menu items to create the menu with sub-menus used in the example above - `<div class="offCanvas_menu"/>`

### Step 4. Add a button to trigger the open/close

Create the hamburger menu trigger by a simple `<a/>` tag with a unique ID that matches the off-canvas data-menu attribute - eg. `<a id="offcanv_menu"></a>`

### Step 5. Initialise the script

```
<script>
  $(document).ready(function() {
    $('#offcanv_menu').offCanvasMenu({
      // position: 'right' // Which side should the menu slide from? Either 'left' or 'right'
    });
  });
</script>
```
