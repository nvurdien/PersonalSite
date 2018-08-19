export default [
    {
        id: 1,
        code: 'html',
        heading: 'HTML Tutorial',
        date: new Date(),
        body:
        '\n' +
        '<b>What to Expect</b>' +
        '<ul class="uk-list uk-list-bullet"> ' +
        '<li>General Rule</li>' +
        '  <li>Header (Including files, titles, etc)</li>' +
        '  <li>Comments</li>' +
        '  <li>Commonly Used Tags</li>' +
        '  <li>Self-closing tags</li>' +
        '  <li>Lists (ordered & unordered)</li>' +
        '  <li>Attributes</li></ul>' +
        '\n' +
        '<hr class="uk-divider">\n' +
        '\n' +
        '<h2>General Rule</h2>\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;tagname&gt; Hello World &lt;/tagname&gt;' +
        '</code></pre>\n' +
        'These are called tags.\n' +
        '\n' +
        '<h2>Header</h2>\n' +
        'For the beginning of your HTML documents it is good practice to specify the document type with:\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '</code></pre>\n' +
        'In order for the computer to easily identify what type of document it is. You can also enclose all your HTML with an html tag like so,\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;html>\n' +
        '<!--Content Here-->\n' +
        '&lt;/html>\n' +
        '</code></pre>\n' +
        'In addition, developers generally put external stylesheets and other definition tags within header tags like so,\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;head>\n' +
        '  &lt;link rel="stylesheet" href="/stylesheet_directory"/><!--You would place your external style file in this tag-->\n' +
        '  &lt;title>Page Homepage&lt;/title> <!--Title of the page usually appears on tab-->\n' +
        '&lt;/head>\n' +
        '</code></pre>\n' +
        '\n' +
        'A <b>typical</b> html document would have an <b>outline/template</b> like the one shown below:\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '  &lt;head>\n' +
        '    &lt;!--external files or metadata here-->\n' +
        '    &lt;title>Page Title&lt;/title><!--Title of the page usually appears on tab-->\n' +
        '  &lt;/head>\n' +
        '  &lt;body>\n' +
        '  &lt;/body>\n' +
        '&lt;/html>\n' +
        '</code></pre>\n' +
        '<h2>Comments</h2>\n' +
        'Comments are an essential part of every coding language for HTML, if you haven\'t noticed already look like the example provided below\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!--Hello I am a comment-->\n' +
        '</code></pre>\n' +
        'You will use this to describe sections of your code as well as better organize your code!\n' +
        '\n' +
        '<h2>Commonly Used Tags</h2>\n' +
        'You will use these on many HTML document!\n' +
        '\n' +
        '<h3>Bold</h3>\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;b> Hello World &lt;/b>\n' +
        '\n' +
        '&lt;strong> Hello World &lt;/strong>\n' +
        '\n' +
        '</code></pre>\n' +
        '\n' +
        '<b> This is with a b tag </b><BR>\n' +
        '<strong> This is with a strong tag </strong>\n' +
        '\n' +
        '<h3>Italics</h3>\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;i> Hello World &lt;/i>\n' +
        '\n' +
        '</code></pre>\n' +
        '\n' +
        '<i> This is with a i tag </i>\n' +
        '\n' +
        '<h3>Underline</h3>\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;u> Hello World &lt;/u>\n' +
        '\n' +
        '</code></pre>\n' +
        '\n' +
        '<u> This is with a u tag </u>\n' +
        '\n' +
        '<h3>H tag (headers)</h3>\n' +
        'These are like all the headers you see on this page. Your headers may look different from this website because you haven\'t added styling yet.\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;h1> Hello World &lt;/h1>\n' +
        '&lt;h2> Hello World &lt;/h2>\n' +
        '&lt;h3> Hello World &lt;/h3>\n' +
        '&lt;h4> Hello World &lt;/h4>\n' +
        '&lt;h5> Hello World &lt;/h5>\n' +
        '&lt;!--and so on ...-->\n' +
        '\n' +
        '</code></pre>\n' +
        '\n' +
        '<h1> This is with a h1 tag </h1>\n' +
        '<h3>Paragraph tag</h3>\n' +
        'This is used to signify a paragraph.\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;p> Hello World &lt;/p>' +
        '</code></pre>\n' +
        '<p> This is with a p tag </p>\n' +
        '\n' +
        '<h2>Self Closing Tags</h2>\n' +
        'Self closing tags are tags that do not need a closing tag like the examples above.\n' +
        '<h3>Image Tag</h3>\n' +
        'This tag allows you to display an image or gif on your page.\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;img src="https://imgur.com/qFxJTtS.gif">' +
        '</code></pre>\n' +
        '<img src="https://imgur.com/qFxJTtS.gif"><br><br>' +
        'Later I\'ll show you how to resize this image.\n' +
        '\n' +
        '<h2>Lists(ordered & unordered)</h2>\n' +
        'An <b>unordered</b> list is a bulleted list or any symboled list.\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;ul>&lt;!--signifies start of unordered list-->\n' +
        '  &lt;li>Hello&lt;/li>&lt;!--first bullet point-->\n' +
        '  &lt;li>World&lt;/li>&lt;!--second bullet point-->\n' +
        '&lt;/ul>&lt;!--signifies end of unordered list-->\n' +
        '</code></pre>' +
        '<ul class="uk-list-bullet uk-list">' +
        '<li>Hello</li>' +
        '<li>World</li>' +
        '</ul>' +
        ' An <b>ordered</b> list is a numbered list.\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        ' &lt;ol>&lt;!--signifies start of ordered list-->\n' +
        '   &lt;li>Hello&lt;/li>&lt;!--first point-->\n' +
        '   &lt;li>World&lt;/li>&lt;!--second point-->\n' +
        ' &lt;/ol>&lt;!--signifies end of ordered list-->\n' +
        '</code></pre>' +
        '<ol>' +
        '<li>Hello</li>' +
        '<li>World</li>' +
        '</ol>' +
        '<h2>Attributes</h2>' +
        'Attributes are modifiers of an HTML element type. There are several types of attributes <b>required</b>, <b>optional</b>, <b>standard</b>, and <b>event</b>.<br>' +
        '<b>Required</b> attributes are needed by the element in order to function correctly this is the case for tags like the \'a\' tag.<br>' +
        '<b>Optional</b> attributes are not needed by the element but can be used to modify the default function like the example below.<br>' +
        '<br>' +
        '<i>\'a\'</i> tags are used for links. The <i>\'href\'</i> attribute is an example of a <b>required</b> attribute because if it is not included it will just be a regular block of text; the <i>\'target\'</i> attribute is an <b>optional</b> attribute because it is being used to alter the default <i>\'_blank\'</i> allows the tag to tell the browser to open the page in a new webpage or tab.\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;a href="https://imgur.com/qFxJTtS.gif" target="_blank">Image&lt;/a>\n' +
        '</code></pre>' +
        '\n' +
        '<a href="https://imgur.com/qFxJTtS.gif" target="_blank">Image</a>\n' +
        '<br>' +
        'Similarly, with the <i>\'img\'</i> tag the <i>\'src\'</i> attribute is <b>required</b> in order for it to show an image. We can also include the <b>optional</b> tags <i>\'width\'</i> and <i>\'height\'</i> to change the size of the image\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;img src="https://imgur.com/qFxJTtS.gif" width="150px" height="auto">\n' +
        '</code></pre>' +
        '<img src="https://imgur.com/qFxJTtS.gif" width="150px" height="auto">\n' +
        '\n' +
        'The auto value allows it to adjust based on the width size\n' +
        '\n' +
        '<b>Standard</b> Attributes include <i>\'id\'</i>, <i>\'class\'</i>, <i>\'style\'</i>, <i>\'title\'</i>, etc. These attributes are used to alter the style (or CSS) of the HTML tag which we will discuss later. <b>Event</b> Attributes are inline javascript functions in the HTML which we will also discuss later.\n' +
        '\n' +
        '<hr class="uk-divider">' +
        '\n' +
        '<h2>Example</h2>\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '  &lt;head>\n' +
        '    &lt;title>My Personal Page&lt;/title><!--Title of the page usually appears on tab-->\n' +
        '  &lt;/head>\n' +
        '  &lt;body>\n' +
        '    &lt;h1>Profile&lt;/h1>\n' +
        '    &lt;h2>About Me&lt;/h2>\n' +
        '    &lt;p>&lt;img src="https://imgur.com/4c6qaOy.gif" height="250px" width="auto">&lt;BR>\n' +
        '    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br>' +
        '     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br>' +
        '     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit <br>' +
        '     in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br>' +
        '     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."&lt;/p>\n' +
        '    &lt;h2>Favorite Stuff&lt;/h2>\n' +
        '    &lt;ul>\n' +
        '    &lt;li>&lt;b>Food&lt;/b> - Ramen&lt;/li>\n' +
        '    &lt;li>&lt;b>Drink&lt;/b> - Juice&lt;/li>\n' +
        '    &lt;li>&lt;b>Color&lt;/b> - Black, Purple, Green, every color!&lt;/li>\n' +
        '    &lt;li>&lt;b>Animal&lt;/b> - Dog&lt;/li>\n' +
        '    &lt;/ul>\n' +
        '    &lt;h2>Social Links&lt;/h2>\n' +
        '    &lt;ul>\n' +
        '    &lt;li>&lt;a href="https://github.com" target="_blank">Github&lt;/a>&lt;/li>\n' +
        '    &lt;li>&lt;a href="https://www.linkedin.com" target="_blank">Linkedin&lt;/a>&lt;/li>\n' +
        '    &lt;li>&lt;a href="https://facebook.com" target="_blank">Facebook&lt;/a>&lt;/li>\n' +
        '    &lt;/ul>\n' +
        '  &lt;/body>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        'yields\n' +
        '\n' +
        '<img src="https://i.imgur.com/yOowvLN.png">\n' +
        '\n' +
        '<b>Note</b>: <pre class="prettyprint"><code data-language="html" class="lang-html">&lt;BR></code></pre> is next line\n' +
        '\n' +
        '<hr>" ' +
        '\n' +
        '<h2>Try for Yourself!</h2>\n' +
        'Create an HTML document with all the following:\n' +
        '<ul>' +
        '  <li>Title the page with your name in the title tags</li>' +
        '  <li>Create a list of links to popular search engines</li>' +
        '  <li>Create an ordered list of your preferred search engine by rank</li>' +
        '  <li>Create another list that labels your favorite food, drink, color and animal</li>' +
        '  <li>Place the CSUF logo onto the page with size 150px by 150px</li>' +
        '  <li>Create another list that uses the commonly used tags <b>bold</b>, <i>italics</i>, <u>underline</u>, and <b><i>bold/italic</i></b></li>' +
        '</ul>' +
        'Make sure to <b>use headers to divide each of these activities</b> on a single HTML page and <b>use the template</b> given above.\n' +
        '<br>' +
        '<br>' +
        '<a href="https://nvurdien.github.io/webdev-workshop/guides/2-CSS-Tutorial/" class="uk-button uk-button-primary">On to CSS</a>\n' +
        '<BR><BR>\n' +
        '\n' +
        '\n' +
        '<hr class="uk-divider">' +
        '\n' +
        '<h2>References</h2>\n' +
        '  <ul><li><a href="http://webdev.slides.com/coltsteele/deck-7-50#/" target="_blank">Intro to HTML</a></li></ul>',
        comments: [
            {
                author: 'This is currently a WIP',
                date: new Date(),
                body: 'This is currently a WIP'
            }
        ]
    },






    {
        id: 2,
        code: 'css',
        heading: 'CSS Tutorial',
        date: new Date(),
        body:
        '<b>What to Expect</b><ul>' +
        '<li>General Rule</li>' +
        '<li>Comments</li>' +
        '<li>Where can we write styles?</li>' +
        '<li>&lt;link&gt; tag</li>' +
        '<li>Colors</li>' +
        '<li>Classes</li>' +
        '<li>IDs</li>' +
        '<li>Background stuff</li>' +
        '<li>Properties and Box Model</li>' +
        '</ul>' +
        '<hr class="uk-divider">' +
        '\n' +
        'The <a href="http://csszengarden.com" target="_blank">CSS Zen Garden</a> demonstrates the power of CSS along with HTML. All this can be done without the usage of Javascript. In this tutorial, I won\'t teach you how to do animations but we\'ll be learning necessary information that lead up to animation if you\'re interested.\n' +
        '\n' +
        '<h2>General Rule</h2>\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        'selector{\n' +
        '  property: value;\n' +
        '  property2: value2;\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        '<h2>Comments</h2>\n' +
        'Comments are similar to how you create comments in C++/C\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        '/* This is a comment */\n' +
        '</code></pre>' +
        '\n' +
        '<h2>Where can we write styles?</h2>\n' +
        'There are several places where you can write styles. You can create a style tag in the head area of an HTML document like so,\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '  &lt;head>\n' +
        '    &lt;title>Home Page&lt;/title>\n' +
        '    &lt;style type="text/css">\n' +
        '      selector{\n' +
        '        property: value;\n' +
        '        property2: value2;\n' +
        '      }\n' +
        '    &lt;/style>\n' +
        '  &lt;/head>\n' +
        '  &lt;body>\n' +
        '  &lt;/body>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        'You can also do inline styling\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;p style="color:pink">pink colored text&lt;/p>\n' +
        '</code></pre>' +
        '\n' +
        'You can also place them in a CSS file where you will create a list of\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        'selector{\n' +
        '  property: value;\n' +
        '  property2: value2;\n' +
        '}\n' +
        '\n' +
        'selector2{\n' +
        '  property: value;\n' +
        '  property2: value2;\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        '\n' +
        'Out of the three methods it is common convention to just use the last one. <b>Only use the first two for testing purposes.</b>\n' +
        '\n' +
        '<h2>Link Tag</h2>\n' +
        'The link tag is used to reference an external CSS stylesheet.\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '  &lt;head>\n' +
        '    &lt;title>Home Page&lt;/title>\n' +
        '    &lt;link rel="stylesheet" type="text/css" href="style.css">\n' +
        '  &lt;/head>\n' +
        '  &lt;body>\n' +
        '  &lt;/body>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        'The \'href\' attribute value in this example would assume the style.css file is in the same directory as the HTML file.\n' +
        'This is the recommended way to include style into your HTML document.\n' +
        '\n' +
        '<h2>Colors</h2>\n' +
        'When styling your documents there are multiple ways to refer to colors by name, hex code, and rgb.\n' +
        '\n' +
        'There are several color names prebuilt into every browser. If you\'re interested they\'re all listed <a href="https://www.w3schools.com/colors/colors_hex.asp" target="_blank">here</a>.\n' +
        'You can use these colors like in the example below:\n' +
        '\n' +
        'In the CSS file,\n' +
        'style.css\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        'h3 {\n' +
        '  color:navy;\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        'In the HTML file,\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '&lt;head>\n' +
        '  &lt;title>Home Page&lt;/title>\n' +
        '  &lt;link rel="stylesheet" type="text/css" href="style.css">\n' +
        '&lt;/head>\n' +
        '&lt;body>\n' +
        '&lt;h3>I am Navy Blue by name.&lt;/h3>\n' +
        '&lt;h3 style="color:navy">I am Navy Blue by name.&lt;/h3>&lt;!--NOT RECOMMENDED inline styling-->\n' +
        '&lt;/body>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        '<h3 style="color:navy">I am Navy Blue by name.</h3>\n' +
        '\n' +
        'Another very common and professional way of adding colors is through hex codes. There are many color picking sites online with a simple google search (I usually just search "hex codes") that let you get the hex code color you need.\n' +
        '\n' +
        'In the CSS file,\n' +
        'style.css\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        'h3 {\n' +
        '  color:#000080; /* I\'m still navy */\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        'In the HTML file,\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '&lt;head>\n' +
        '  &lt;title>Home Page&lt;/title>\n' +
        '  &lt;link rel="stylesheet" type="text/css" href="style.css">\n' +
        '&lt;/head>\n' +
        '&lt;body>\n' +
        '&lt;h3>I am Navy Blue by hex code.&lt;/h3>\n' +
        '&lt;h3 style="color:#000080">I am Navy Blue by hex code.&lt;/h3>&lt;!--NOT RECOMMENDED inline styling-->\n' +
        '&lt;/body>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        '<h3 style="color:#000080">I am Navy Blue by hex code.</h3>\n' +
        'Another alternative that are the rgb values. You can find these values on the same color picking sites as the hex codes.\n' +
        'The first value indicates the amount of red the color has, the next how much green and the next how much blue.\n' +
        '\n' +
        'In the CSS file,\n' +
        'style.css\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        'h3 {\n' +
        '  color:rgb(0, 0, 128); /* I\'m still navy */\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        'In the HTML file,\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '&lt;head>\n' +
        '  &lt;title>Home Page&lt;/title>\n' +
        '  &lt;link rel="stylesheet" type="text/css" href="style.css">\n' +
        '&lt;/head>\n' +
        '&lt;body>\n' +
        '&lt;h3>I am Navy Blue by rgb.&lt;/h3>\n' +
        '&lt;h3 style="color:rgb(0, 0, 128)">I am Navy Blue by rgb.&lt;/h3> &lt;!--NOT RECOMMENDED inline styling-->\n' +
        '&lt;/body>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        '<h3 style="color:rgb(0, 0, 128)">I am Navy Blue by rgb.</h3>\n' +
        '\n' +
        '<h2>IDs</h2>\n' +
        'ID selectors can only be used on one HTML tag per page, thus unique. The selectors name is preceded by a \'#\'\n' +
        '\n' +
        'In the CSS file,\n' +
        'style.css\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        '#favorite{\n' +
        '  color:red;\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        'In the HTML file,\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '&lt;head>\n' +
        '  &lt;title>Home Page&lt;/title>\n' +
        '  &lt;link rel="stylesheet" type="text/css" href="style.css">\n' +
        '&lt;/head>\n' +
        '&lt;body>\n' +
        '  &lt;h2>Colors&lt;/h2>\n' +
        '  &lt;ul>\n' +
        '  &lt;li>Red&lt;/li>\n' +
        '  &lt;li>Orange&lt;/li>\n' +
        '  &lt;li>Yellow&lt;/li>\n' +
        '  &lt;li>Green&lt;/li>\n' +
        '  &lt;li id="favorite">Blue&lt;/li>\n' +
        '  &lt;li>Purple&lt;/li>\n' +
        '  &lt;/ul>\n' +
        '&lt;/body>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        '\n' +
        '<h2>Classes</h2>\n' +
        'Class selectors can be used on multiple HTML tags, thus not unique. The selectors name is preceded by a \'.\'\n' +
        '\n' +
        'In the CSS file,\n' +
        'style.css\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        '.rgb{\n' +
        '  color:red;\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        'In the HTML file,\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '&lt;head>\n' +
        '  &lt;title>Home Page&lt;/title>\n' +
        '  &lt;link rel="stylesheet" type="text/css" href="style.css">\n' +
        '&lt;/head>\n' +
        '&lt;body>\n' +
        '  &lt;h2>Colors&lt;/h2>\n' +
        '  &lt;ul>\n' +
        '  &lt;li class="rgb">Red&lt;/li>\n' +
        '  &lt;li>Orange&lt;/li>\n' +
        '  &lt;li>Yellow&lt;/li>\n' +
        '  &lt;li class="rgb">Green&lt;/li>\n' +
        '  &lt;li class="rgb">Blue&lt;/li>\n' +
        '  &lt;li>Purple&lt;/li>\n' +
        '  &lt;/ul>\n' +
        '&lt;/body>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        '<h2>Background Stuff</h2>\n' +
        'Another important aspect of CSS involves the background capabilities. Generally, if you want to define the background color of any a tag in HTML you would use the \'background\' property.\n' +
        '\n' +
        'In the CSS file,\n' +
        'style.css\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        'body {\n' +
        '  background: #d9ffb3;\n' +
        '}\n' +
        '\n' +
        'div {\n' +
        '  background: #73e600;\n' +
        '}\n' +
        '\n' +
        'p {\n' +
        '  background: #336600;\n' +
        '  color: #fff;\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        'In the HTML file,\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '&lt;head>\n' +
        '  &lt;title>Home Page&lt;/title>\n' +
        '  &lt;link rel="stylesheet" type="text/css" href="style.css">\n' +
        '&lt;/head>\n' +
        '&lt;body>\n' +
        '&lt;div>\n' +
        'I am a green text box\n' +
        '&lt;p> with greener p text&lt;/p>\n' +
        '&lt;/div>\n' +
        '&lt;/body>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        'The body tag with the background property changed makes the entire page light greenish. The div tag will create a darker green text box. The p tag will create an even darker green background for text enclosed in a p tag. The p tag text is also colored white.\n' +
        '\n' +
        '<h2>Properties and Box Model</h2>\n' +
        '\n' +
        '<a href="https://meiert.com/en/indices/css-properties/" target="_blank">Here is a nice list of CSS Properties and what they do</a>\n' +
        '\n' +
        '<b>Box Model</b>' +
        '\n' +
        '<img src="https://i.stack.imgur.com/PeSIJ.gif">\n' +
        '\n' +
        '<b>Content</b> is where all the text, images and other stuff you included in the box go.\n' +
        '<b>Padding</b> is used to move content away from the edge of the box\n' +
        '<b>Borders</b> if included surround the content and padding\n' +
        '<b>Margins</b> are used to move content away from things outside of the box\n' +
        '\n' +
        '<b>Padding</b>\n' +
        '\n' +
        'When you are using the padding property the order of values is top, right, bottom, left.\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        'padding: top, right, bottom, left;\n' +
        '</code></pre>' +
        '\n' +
        'If you place one value it is equivalent to setting all values (top, right, bottom and left) to that value.\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        'padding: 5px;\n' +
        'padding: 5px, 5px, 5px, 5px;\n' +
        '</code></pre>' +
        '<hr class="uk-divider"> ' +
        '\n' +
        '<h2>Example</h2>\n' +
        'The html document\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '  &lt;head>\n' +
        '  &lt;link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,300italic,400italic" rel="stylesheet">\n' +
        '    &lt;link rel="stylesheet" type="text/css" href="css/style.css"/><!--CSS Stylesheet-->\n' +
        '    &lt;title>My Personal Page&lt;/title><!--Title of the page usually appears on tab-->\n' +
        '  &lt;/head>\n' +
        '  &lt;body>\n' +
        '  &lt;header>\n' +
        '    &lt;h1>Profile</h1>\n' +
        '  &lt;/header>\n' +
        '  &lt;div id="main" class="container">\n' +
        '      &lt;h3>About Me&lt;/h3>\n' +
        '      &lt;p>&lt;img src="https://imgur.com/4c6qaOy.gif" height="250px" width="auto">&lt;BR>\n' +
        '      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br> ' +
        '       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br>' +
        '       nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>' +
        '       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br>' +
        '       fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa <br>' +
        '       qui officia deserunt mollit anim id est laborum."&lt;/p>\n' +
        '      &lt;h3>Favorite Stuff&lt;/h3>\n' +
        '      &lt;ul>\n' +
        '      &lt;li>&lt;b>Food&lt;/b> - Ramen&lt;/li>\n' +
        '      &lt;li>&lt;b>Drink&lt;/b> - Juice&lt;/li>\n' +
        '      &lt;li>&lt;b>Color&lt;/b> - Black, Purple, Green, every color!&lt;/li>\n' +
        '      &lt;li>&lt;b>Animal&lt;/b> - Dog&lt;/li>\n' +
        '      &lt;/ul>\n' +
        '      &lt;h3>Social Links&lt;/h3>\n' +
        '      &lt;ul>\n' +
        '      &lt;li>&lt;a href="https://github.com" target="_blank">Github&lt;/a>&lt;/li>\n' +
        '      &lt;li>&lt;a href="https://www.linkedin.com" target="_blank">Linkedin&lt;/a>&lt;/li>\n' +
        '      &lt;li>&lt;a href="https://facebook.com" target="_blank">Facebook&lt;/a>&lt;/li>\n' +
        '      &lt;/ul>\n' +
        '    &lt;/div>\n' +
        '  &lt;/body>\n' +
        '&lt;/html>\n' +
        '\n' +
        '</code></pre>' +
        '\n' +
        'The CSS file\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-css">' +
        'html\n' +
        '{\n' +
        '  margin: 0;\n' +
        '  padding: 0;\n' +
        '}\n' +
        'body{\n' +
        '  font-family: \'Source Sans Pro\', san-serif;\n' +
        '  margin: 0;\n' +
        '  padding: 0;\n' +
        '  background: #f0f0f0;\n' +
        '}\n' +
        '\n' +
        'header{\n' +
        '  width: 100%;\n' +
        '  background-color: #ffffff;\n' +
        '  margin: 0px 0px 10px 0px;\n' +
        '  padding: 0;\n' +
        '  top:0;\n' +
        '  text-align: center;\n' +
        '}\n' +
        '\n' +
        'h1 {\n' +
        '  font-size: 50px;\n' +
        '\n' +
        '}\n' +
        '\n' +
        '.container {\n' +
        '  margin-left: 20%;\n' +
        '  margin-right: 20%;\n' +
        '\n' +
        '}\n' +
        '\n' +
        '#main {\n' +
        '  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .2);\n' +
        '  background-color: #fff;\n' +
        '  height: 100%;\n' +
        '  padding: 10px;\n' +
        '}\n' +
        '\n' +
        '</code></pre>' +
        '\n' +
        'yields\n' +
        '\n' +
        '<img src="https://i.imgur.com/objfNMu.png">\n' +
        '\n' +
        '<hr class="uk-divider">' +
        '\n' +
        '<h2>Try for Yourself!</h2>\n' +
        'Create a CSS document that styles the HTML page you created in the previous tutorial with all the following:\n' +
        '<li>' +
        '  <li>Have all the \'li\' tags be red.</li>' +
        '  <li>Have all the h1 tags be a hex code color selected from <a href="http://htmlcolorcodes.com/color-picker/" target="_blank">here</a>.</li>' +
        '  <li>Create an <b>index</b> called favorite and set the color property to be your favorite color selected from <a href="http://htmlcolorcodes.com/color-picker/" target="_blank">here</a>.</li>' +
        '  <li>Create a <b>class</b> called useful and set the color property to be any color selected from <a href="http://htmlcolorcodes.com/color-picker/" target="_blank">here</a>.</li>' +
        '  <li>Set an \'li\' item from your favorites section to have an <b>id</b> favorite.</li>' +
        '  <li><Set \'li\' items bold, italic, and underline with <b>class</b> useful.</li>' +
        '</ul>' +
        '<br>' +
        '<a href="https://nvurdien.github.io/webdev-workshop/guides/1-HTML-Tutorial/" class="uk-button uk-button-primary">Back to HTML</a>\n' +
        '<br>' +
        '<a class="button fancy pull-right uk-button uk-button-primary" href="https://nvurdien.github.io/webdev-workshop/guides/3-Javascript-Tutorial/">On To Javascript</a>\n' +
        '<BR><BR>\n' +
        '\n' +
        '\n' +
        '<hr class="uk-divider">' +
        '\n' +
        '<h2>References</h2>\n' +
        '<ul>' +
        '<li><a href="http://webdev.slides.com/coltsteele/deck-7-10-53#/" target="_blank">Intro to CSS</a></li>' +
        '<li><a href="http://webdev.slides.com/coltsteele/deck-7-10-11-54#/" target="_blank">Colors in CSS</a></li>' +
        '</ul>\n',
        comments: [
            {
                author: 'This is currently a WIP',
                date: new Date(),
                body: 'This is currently a WIP'
            }
        ]
    },






    {
        id: 3,
        code: 'javascript',
        heading: 'Javascript Tutorial',
        date: new Date(),
        body:
        '<b>What to Expect</b>\n' +
        '<ul>  <li>Variables</li>' +
        '  <li>Comments</li>' +
        '  <li>Boolean Logic</li>' +
        '  <li>Loops</li>' +
        '  <li>Function</li>' +
        '  <li>Arrays</li>' +
        '  <li>Where can we write scripts?</li>' +
        '  <li>JQuery</li>' +
        '</ul>' +
        '<hr>" ' +
        '\n' +
        'A lot of this should be review from your Intro to Programming courses 120, 121, and 131 except in a different language.\n' +
        'Even though Javascript looks different from C++, logically it should be the same. So, I will briefly go over these concepts in this tutorial.\n' +
        '\n' +
        '<h2>Variables</h2>\n' +
        'There are 5 primitive data types. They are all stored in a var object. So rather than doing\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="cpp" class="lang-c">' +
        'int number;\n' +
        'string word;\n' +
        'bool truth;\n' +
        '</code></pre>' +
        '\n' +
        'You would do\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'var number = 55;\n' +
        'var word = "word";\n' +
        'var word = 32.5; //changes it to a number\n' +
        'var truth = True;\n' +
        '</code></pre>' +
        '\n' +
        'The language is similar to python in that you can also like in the example above reassign variables with a completely different type. Similarly to every other language you can use any of the\n' +
        'I think at this point you would be wondering what the other two data types are they are <b>undefined</b> and <b>null</b>. Later I will discuss their usage.\n' +
        '\n' +
        'With numbers you can use all the operators you are used to in C++, like %, /, *, +, and -\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'var number = 4; //number = 4\n' +
        'number += 2.5; //number = 6.5\n' +
        'number = 10%3; //number = 1\n' +
        '</code></pre>' +
        '\n' +
        'Similarly, strings manipulation is like C++\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'var hello = "hello world"; //double\n' +
        'var hi = \'hello world\'; //and single quotes work\n' +
        'var test = "hello" + "world"; // you can combine 2 strings\n' +
        'var length = test.length;\n' +
        'var character = test[1]; //\'e\'\n' +
        '\n' +
        '"hey"[1]; // "e"\n' +
        '"hello there".length // 11\n' +
        '</code></pre>' +
        '\n' +
        'Variables that are decalared but not initialized are labeled undefined. Whereas, variables have to be assigned \'null\' to be \'explicitly nothing\'.\n' +
        '\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'var iamnothing; //is undefined\n' +
        'iamnothing = null; //defined with null/nothing\n' +
        '</code></pre>' +
        '\n' +
        '<h2>Comments</h2>\n' +
        'If you haven\'t noticed already comments are similar to that of C++\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        '//I am a comment\n' +
        '/*\n' +
        'Hey,\n' +
        'I am a multiline comment!\n' +
        '*/\n' +
        '</code></pre>' +
        '\n' +
        '<h2>Boolean Logic</h2>\n' +
        '\n' +
        'Here is a table of comparison operators. Most of them are also very similar to C++\n' +
        '\n' +
        'Assume x = 5\n' +
        '\n' +
        '<table class="uk-table uk-table-hover uk-table-divider">' +
        '<tr>' +
        '<th>Operator</th>' +
        '<th>Name</th>' +
        '<th>Example</th>' +
        '<th>Result</th>' +
        '</tr>' +
        '<tr>' +
        '<td> > </td>' +
        '<td> Greater Than </td>' +
        '<td> x > 10 </td>' +
        '<td> false </td>' +
        '</tr>' +
        '<tr>' +
        '<td> >= </td>' +
        '<td> Greater Than or Equal to </td>' +
        '<td> x >= 5 </td>' +
        '<td> true </td>' +
        '</tr>' +
        '<tr>' +
        '<td> &lt; </td>' +
        '<td> Less Than </td>' +
        '<td> x &lt; -50 </td>' +
        '<td> true </td>' +
        '</tr>' +
        '<tr>' +
        '<td> &lt;= </td>' +
        '<td> Less Than or Equal to </td>' +
        '<td> x &lt;= 100 </td>' +
        '<td> true </td>' +
        '</tr>' +
        '<tr>' +
        '<td>==</td>' +
        '<td>Equal to</td>' +
        '<td>x == \'5\'</td>' +
        '<td>true</td>' +
        '</tr>'+
        '<tr>' +
        '<td>!=</td>' +
        '<td>Not Equal to</td>' +
        '<td>x != \'b\'</td>' +
        '<td>true</td>' +
        '</tr>'+
        '<tr>' +
        '<td>===</td>' +
        '<td>Equal value and type</td>' +
        '<td>x === \'5\'</td>' +
        '<td>false</td>' +
        '</tr>'+
        '<tr>' +
        '<td>!==</td>' +
        '<td>not Equal value and type</td>' +
        '<td>x !== \'5\'</td>' +
        '<td>true</td>' +
        '</tr>' +
        '</table>'  +
        'The last two operators are important since all variables are loosely typed. Each variable does not have a set type. That is why in javascript\n' +
        '\n' +
        '5 == "5"\n' +
        '\n' +
        'is true but\n' +
        '\n' +
        '5 === "5"\n' +
        '\n' +
        'is not.\n' +
        '\n' +
        'Here is a table of logical operators. All of them should be familiar from C++\n' +
        '\n' +
        'Assume x = 5 and y = 9\n' +
        '<table class="uk-table uk-table-hover uk-table-divider">' +
        '<tr>' +
        '<th>Operator</th>' +
        '<th>Name</th>' +
        '<th>Example</th>' +
        '<th>Result</th>' +
        '</tr>' +
        '<tr>' +
        '<td>&&</td>' +
        '<td>AND</td>' +
        '<td>x &lt; 10 && x !== 5</td>' +
        '<td>false</td>' +
        '</tr>'+
        '<tr>' +
        '<td>&#8741;</td>' +
        '<td>OR</td>' +
        '<td> y > 9 &#8741; x == 5 </td>' +
        '<td>true</td>' +
        '</tr>'+
        '<tr>' +
        '<td>!</td>' +
        '<td>NOT</td>' +
        '<td> !(x == y) </td>' +
        '<td>true</td>' +
        '</tr>' +
        '</table>' +
        '<h2>Loops</h2>\n' +
        '<b>While loops</b>\n' +
        'Very similar to C++\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'while(condition){\n' +
        '  //repeat code\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        '\n' +
        '<b>For loops</b>\n' +
        'Very similar to C++\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'for(initialize; condition; step){\n' +
        '  //repeat code\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        '\n' +
        '<h2>Functions</h2>\n' +
        'The primary difference between C++ and Javascript is the lack of return type.\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'function functionName(argument list){\n' +
        '  //some code\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        'You can still return values in javascript even without the return type.\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'function functionName(argument list){\n' +
        '  //some code\n' +
        '  return "";\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        '<h2>Arrays</h2>\n' +
        'Probably the only data structure you would use in Javascript.\n' +
        '<table class="uk-table uk-table-hover uk-table-divider">' +
        '<tr>' +
        '<th>Function</th>' +
        '<th>What it does</th>' +
        '<th>What does it return?</th>' +
        '</tr>' +
        '<tr>' +
        '<td>push(value)</td>' +
        '<td>adds "value" element to end of array</td>' +
        '<td>N/A</td>' +
        '</tr>'+
        '<tr>' +
        '<td>pop()</td>' +
        '<td>removes last element in the array</td>' +
        '<td>element removed</td>' +
        '</tr>'+
        '<tr>' +
        '<td>unshift(value)</td>' +
        '<td>adds "value" element to front of array  </td>' +
        '<td>N/A</td>' +
        '</tr>'+
        '<tr>' +
        '<td>shift()</td>' +
        '<td>removes first element in the array </td>' +
        '<td>element removed</td>' +
        '</tr>'+
        '<tr>' +
        '<td>indexOf(value)</td>' +
        '<td>returns the value of the desired element or -1 if it does not exist</td>' +
        '<td>index of desired element; or -1 if does not exist </td>' +
        '</tr>'+
        '<tr>' +
        '<td>slice(start,end)</td>' +
        '<td>returns elements from the start and end point specified of an array</td>' +
        '<td>elements from the start and end point specified of an array</td>' +
        '</tr>'+
        '<tr>' +
        '<td>splice(start,end)</td>' +
        '<td>removes elements from the start and end point specified of an array</td>' +
        '<td>elements from the start and end point specified of an array</td>' +
        '</tr>' +
        '</table>' +
        '' +
        '\n' +
        'Here is a demo of some commonly used functions\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'var numbers = ["1", "2", "3"];\n' +
        'numbers.push("4");\n' +
        '//numbers = ["1", "2", "3", "4"]\n' +
        '\n' +
        'numbers.pop();\n' +
        '//numbers = ["1", "2", "3"];\n' +
        '\n' +
        'var value = numbers.pop(); //returns the removed value\n' +
        '//value = "3"\n' +
        '//numbers = ["1", "2"];\n' +
        '\n' +
        'numbers.unshift("0"); //adds 0 to the front of the array\n' +
        '//numbers = ["0", "1", "2"]\n' +
        '\n' +
        'numbers.shift();\n' +
        '//numbers = ["1", "2"]\n' +
        '\n' +
        'value = numbers.shift(); //returns the removed value\n' +
        '//value = "1";\n' +
        '//numbers = ["2"]\n' +
        '\n' +
        'numbers.unshift("1"); //adds 0 to the front of the array\n' +
        '//numbers = ["1", "2"]\n' +
        '\n' +
        'numbers.push("3");\n' +
        '//numbers = ["1", "2", "3"]\n' +
        '\n' +
        'numbers.push("4");\n' +
        '//numbers = ["1", "2", "3", "4"]\n' +
        '\n' +
        '\n' +
        'numbers.indexOf("1"); //0\n' +
        'numbers.indexOf("6"); //-1\n' +
        '\n' +
        'var range = numbers.slice(1,3);\n' +
        '//range = ["2", "3"];\n' +
        '\n' +
        'var all = numbers.slice();\n' +
        '//all = ["1", "2", "3", "4"];\n' +
        '\n' +
        '//Both do not alter the original array (numbers)!\n' +
        '\n' +
        'numbers.splice(1,1); //will remove the 2nd element\n' +
        '//numbers = ["1", "3", "4"];\n' +
        '</code></pre>' +
        '\n' +
        '<h3>Iterating</h3>\n' +
        'There are two ways to iterate through an array.\n' +
        '\n' +
        '<b>For Loop</b>' +
        '\n' +
        'Iterates through specified number of elements in an array.\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'var numbers = ["1", "2", "3"];\n' +
        'for(var i = 0; i < numbers.length; i++){\n' +
        '  console.log(numbers[i]); // prints each element of the array\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        '<b>ForEach Loop</b>' +
        '\n' +
        'Iterates through each element of the array.\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'var numbers = ["1", "2", "3"];\n' +
        'numbers.forEach(function(number){\n' +
        '    console.log(number); //prints each element in the array\n' +
        '  });\n' +
        '</code></pre>' +
        '\n' +
        '\n' +
        '<h2>Where can we write scripts?</h2>\n' +
        'There are several places where you can write scripts. You can create a script tag in the head area of an HTML document like so,\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '  &lt;head>\n' +
        '  &lt;script type="text/javascript">\n' +
        '    console.log("hello world");\n' +
        '  &lt;/script>\n' +
        '    &lt;title>Home Page&lt;/title>\n' +
        '  &lt;/head>\n' +
        '  &lt;body>\n' +
        '  &lt;/body>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        'or (better)\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '  &lt;head>\n' +
        '    &lt;title>Home Page&lt;/title>\n' +
        '  &lt;/head>\n' +
        '  &lt;body>\n' +
        '  &lt;/body>\n' +
        '  &lt;script type="text/javascript">\n' +
        '    console.log("hello world");\n' +
        '  &lt;/script>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        'You can also do inline scripting as well which is not recommended\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;p onclick="alert(\'hey! notice me!\')">pink colored text&lt;/p>\n' +
        '</code></pre>' +
        '\n' +
        'You can also place them in a Javascript file where you can create multiple functions you want the page to execute\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'var num = document.getElementById("number1").value;\n' +
        'var nums = document.getElementById("number2").value;\n' +
        'document.getElementById("alter").innerHTML = "The sum of the numbers is "+add(num, nums);\n' +
        'document.getElementById("alter2").innerHTML = "The difference of the numbers is "+subtract(num, nums);\n' +
        '\n' +
        '\n' +
        'function add(num1, num2){\n' +
        '  return num1+num2;\n' +
        '}\n' +
        '\n' +
        'function subtract(num1, num2){\n' +
        '  return num1-num2;\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        '\n' +
        'Out of the three methods it is common convention to just use the last one. <b>Only use the first two for testing purposes.</b>\n' +
        'It is recommended you <b>place all script tags at the bottom of the HTML file</b> so right after the body tag, since the browser loads all the information by line order. If you are using javascript to alter your HTML, it won\'t be able to change what it doesn\'t know yet.\n' +
        '\n' +
        '<h2>JQuery</h2>\n' +
        'Jquery is a popular javascript library that quickens and simplifies javascript code. If you\'re interested in using it here is the <a href="http://api.jquery.com" target="_blank">JQuery Documentation</a>\n' +
        'Here are a few examples:\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'document.getElementById("favorite");\n' +
        'document.getElementsByClassName("useful");\n' +
        '</code></pre>' +
        '\n' +
        'versus\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        '$("#favorite"); //document.getElementById("favorite");\n' +
        '$(".useful"); //document.getElementsByClassName("useful");\n' +
        '</code></pre>' +
        '\n' +
        '<b>How do I include JQuery?</b>' +
        '\n' +
        'We use either a Content Delivery Network or CDN for short which is a link online that serves content which in this case is the script file. Programmers generally use a CDN because users usually already have the CDN file link downloaded. Otherwise if your server is quick enough you can host the JQuery file locally by simply downloading the script file from their website. Make sure the JQuery file is included before your Javascript files or script tags.\n' +
        '\n' +
        '\n' +
        '<hr>\n' +
        '\n' +
        '<h2>Example</h2>\n' +
        'The html document\n' +
        '<pre class="prettyprint"><code data-language="html" class="lang-html">' +
        '&lt;!DOCTYPE html>\n' +
        '&lt;html>\n' +
        '  &lt;head>\n' +
        '    &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> <!--Jquery CDN-->\n' +
        '    &lt;link rel="stylesheet" href="css/style2.css"/>\n' +
        '    &lt;title>Javascript Demo&lt;/title><!--Title of the page usually appears on tab-->\n' +
        '  &lt;/head>\n' +
        '  &lt;body>\n' +
        '      &lt;img class="fade" src="https://i.imgur.com/6WrnLjg.jpg" height="100">\n' +
        '      &lt;img class="fade" src="https://i.imgur.com/BEzTVoj.jpg" height="100">\n' +
        '      &lt;img class="fade" src="https://i.imgur.com/ihSqFXz.png" height="100">\n' +
        '      &lt;img class="slide" src="https://i.imgur.com/aWmKefJ.jpg" height="100">\n' +
        '      &lt;img class="slide" src="https://i.imgur.com/CA54uGd.jpg" height="100">\n' +
        '      &lt;img class="slide" src="https://i.imgur.com/Z9dJKqw.jpg" height="100">\n' +
        '      &lt;div class="test">Click me!</div>\n' +
        '      &lt;BR>&lt;BR>\n' +
        '      &lt;button id="clickable">Click to Fade&lt;/button>\n' +
        '      &lt;button class="clickable2">Click to Fade&lt;/button>\n' +
        '      Click this box and press some keys\n' +
        '      &lt;div id="play">&lt;/div>\n' +
        '  &lt;/body>\n' +
        '  &lt;script src="js/script.js">&lt;/script>\n' +
        '&lt;/html>\n' +
        '</code></pre>' +
        '\n' +
        '<pre class="prettyprint"><code data-language="css" class="lang-css">' +
        '.test {\n' +
        '    color: #000;\n' +
        '    padding: .5em;\n' +
        '    width: 50%;\n' +
        '  }\n' +
        '.inside {\n' +
        '  background-color: black;\n' +
        '  color: white;\n' +
        '}\n' +
        '.active {\n' +
        '  color: #900;\n' +
        '}\n' +
        '</code></pre>' +
        '\n' +
        '\n' +
        'The Javascript file\n' +
        '<pre class="prettyprint"><code data-language="javascript" class="lang-javascript">' +
        'var button = document.getElementById("clickable");\n' +
        '\n' +
        '$("#clickable").click(function() {\n' +
        '  $(".fade").fadeToggle("slow", "linear");\n' +
        '});\n' +
        '\n' +
        '$(document).keyup(function(event) {\n' +
        '  if(event.keyCode == 68 || event.keyCode == 117) //Play around with your keys to see what keys activate the slide\n' +
        '    $(".slide").slideUp("slow");\n' +
        '  if(event.keyCode == 85 || event.keyCode == 100)\n' +
        '    $(".slide").slideDown("slow");\n' +
        '});\n' +
        '\n' +
        '$(document).keypress(function(event) {\n' +
        '  document.getElementById("play").innerHTML += "<BR>You have pressed key "+ event.key;\n' +
        '});\n' +
        '\n' +
        '//Recommended way\n' +
        '$(".clickable2").on( "click" ,function() {\n' +
        '  $(".fade").fadeToggle("slow", "linear");\n' +
        '});\n' +
        '\n' +
        '$( "div.test" ).on({\n' +
        '  click: function() {\n' +
        '    $( this ).toggleClass( "active" );\n' +
        '  }, mouseenter: function() {\n' +
        '    $( this ).addClass( "inside" );\n' +
        '  }, mouseleave: function() {\n' +
        '    $( this ).removeClass( "inside" );\n' +
        '  }\n' +
        '});\n' +
        '</code></pre>' +
        '\n' +
        'Check it out here!\n' +
        '<iframe width="100%" height="500" src="//jsfiddle.net/eprhx1sj/2/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>\n' +
        '\n' +
        '<hr>"' +
        '\n' +
        '<h2>Try it for Yourself</h2>\n' +
        'Create a Javascript, CSS, and HTML document that implement the following:\n' +
        '<ul>' +
        '  <li>Include JQuery with a CDN</li>' +
        '  <li>Create a list of words starting with different letters of the alphabet (26 words)</li>' +
        '  <li>Create a button that toggles the slide feature with the vowel items items in a list</li>' +
        '  <li>Create a button that toggles the fade feature with consonant items in a list</li>' +
        '  <li>Create a div that shows the number of times the vowel and consonant button was pressed</li>' +
        '  <li>Have the created div have the same mouseleave, mouseenter, and click effect the example does</li>' +
        '</ul><br>' +
        '<a href="https://nvurdien.github.io/webdev-workshop/guides/2-CSS-Tutorial/" class="button fancy pull-left uk-button uk-button-primary">Back to CSS</a>\n' +
        '<BR><BR>\n' +
        '\n' +
        '\n' +
        '<hr>\n' +
        '<h2>References</h2><ul>' +
        '  <li><a href="http://webdev.slides.com/coltsteele/javascript-basics-57#/7" target="_blank">Javascript Basics</a>\n</li>' +
        '  <li><a href="http://webdev.slides.com/coltsteele/deck-4-47#/" target="_blank">Boolean Logic</a>\n</li>' +
        '  <li><a href="http://webdev.slides.com/coltsteele/loops-58#/" target="_blank">Loops</a>\n</li>' +
        '  <li><a href="http://webdev.slides.com/coltsteele/loops-18-59#/" target="_blank">For Loops</a>\n</li>' +
        '  <li><a href="http://webdev.slides.com/coltsteele/javascript-basics-20-21-22-23-64#/" target="_blank">JS Functions</a>\n</li>' +
        '  <li><a href="http://webdev.slides.com/coltsteele/javascript-basics-20-21-62#/" target="_blank">Array Methods</a>\n</li>' +
        '  <li><a href="http://webdev.slides.com/coltsteele/javascript-basics-20-21-22-63#/" target="_blank">Array Iteration</a></li>' +
        '</ul>',
        comments: [
            {
                author: 'This is currently a WIP',
                date: new Date(),
                body: 'This is currently a WIP'
            }
        ]
    },









    {
        id: 4,
        code: 'personal',
        heading: 'Personal Page Template Guide/Links',
        date: new Date(),
        body:
        '<b>Introduction</b>\n' +
        '\n' +
        'Hello, this is a short tutorial to make a quick personal website with limited knowledge on web development.\n' +
        'You can use any of the template links below to create your website.\n' +
        'Depending on the type of website you choose I will have a guide on how to create your own personal website on github!\n' +
        'I put stars (<i class="fa fa-star"></i>) near the ones that I recommend for you guys to use.\n' +
        '\n' +
        '<hr>' +
        '\n' +
        '<b>HTML/CSS/Javascript Template Websites</b><ul>' +
        '  <li><a href="https://html5up.net" target="_blank">HTML5up</a> <i class="fa fa-star"></i><i class="fa fa-star"></i></li>' +
        '  <li><a href="https://www.creative-tim.com" target="_blank"> Creative Tim</a> <i class="fa fa-star"></i></li>' +
        '  <li><a href="https://freebiesbug.com/code-stuff/html-website-templates/" target="_blank"> FreebiesBug</a></li>' +
        '  <li><a href="http://www.os-templates.com/free-website-templates?start=27" target="_blank"> OS-Templates</a></li>' +
        '  <li><a href="https://templated.co" target="_blank"> Templated.co</a></li>' +
        '  <li><a href="http://www.templatemo.com/page/1" target="_blank"> Templatemo</a></li>' +
        '</ul>' +
        'There\'s more than just this list you can just google search for free website templates online as well.\n' +
        'A lot of the information on how to use these should be pretty straight forward however if you have any questions you can contact me anytime with the contact information listed at the footer.\n' +
        '\n' +
        '<hr>\n' +
        '\n' +
        '<b>Jekyll Template Websites</b>\n' +
        '  <li><a href="https://github.com/jekyll/jekyll/wiki/Themes" target="_blank">Github Compilation of themes</a> <i class="fa fa-star"></i></li>' +
        '  <li><a href="http://jekyllthemes.org" target="_blank">Jekyll Themes</a></li>' +
        '  <li><a href="https://jekyllthemes.io" target="_blank">JekyllThemes.io</a></li>' +
        '\n' +
        'You can find tons of websites online with a simple google search for jekyll themes.\n' +
        '\n' +
        '<hr>"' +
        '\n' +
        'Not sure which to use?\n' +
        '\n' +
        'Do you plan on blogging? Go with Jekyll\n' +
        '\n' +
        'Are you a beginner at Web Development? Go with HTML/CSS/Javascript\n' +
        '\n' +
        'So now that you have picked your desired template/theme please follow the links below to lead you to a tutorial on how to set it up!\n' +
        '<BR>\n' +
        '<a href="https://nvurdien.github.io/webdev-workshop/guides/5-HTML-CSS-JAVASCRIPT-PERSONALSITE-tutorial/">HTML/CSS/Javascript Template Websites</a>\n' +
        '<BR>\n' +
        '<a href="https://nvurdien.github.io/webdev-workshop/guides/6-jekyll-PERSONALSITE-tutorial/">Jekyll Template Websites</a>',
        comments: [
            {
                author: 'This is currently a WIP',
                date: new Date(),
                body: 'This is currently a WIP'
            }
        ]
    },








    {
        id: 5,
        code: 'hcj',
        heading: 'HTML/CSS/Javascript Personal Site Guide',
        date: new Date(),
        body:
        '<b>Before you start</b>\n' +
        '\n' +
        'Please pick one of the following templates before you start this tutorial:\n' +
        '\n' +
        '  <li><a href="https://html5up.net" target="_blank">HTML5up</a> <i class="fa fa-star"></i><i class="fa fa-star"></i></li>' +
        '  <li><a href="https://www.creative-tim.com" target="_blank"> Creative Tim</a> <i class="fa fa-star"></i></li>' +
        '  <li><a href="https://freebiesbug.com/code-stuff/html-website-templates/" target="_blank"> FreebiesBug</a></li>' +
        '  <li><a href="http://www.os-templates.com/free-website-templates?start=27" target="_blank"> OS-Templates</a></li>' +
        '  <li><a href="https://templated.co" target="_blank"> Templated.co</a></li>' +
        '  <li><a href="http://www.templatemo.com/page/1" target="_blank"> Templatemo</a></li>' +
        '\n' +
        'Once you have successfully downloaded the template of your choice please follow the directions below.\n' +
        '\n' +
        '<hr>\n' +
        '\n' +
        '<b>Setting up</b>\n' +
        '\n' +
        'Once you have downloaded/saved your website template, it will show up in wherever you set up your download folder.\n' +
        '\n' +
        'Go to that folder and open the main/homepage/index html file in any text editor of your choice (I recommend <a href="https://atom.io" target="_blank">Atom</a> or <a href="https://www.sublimetext.com" target="_blank">Sublime</a>)\n' +
        '\n' +
        'In example, mine is labeled <b>index.html</b>. If it is not named index.html please change it to index.html since github recognizes the homepage link as index.html <a href="https://imgur.com/Yo1ei7h.gif" target="_blank">like this</a>\n' +
        '\n' +
        'You can also see how you are editing your site in realtime by opening the HTML document in your browser and refreshing the page.\n' +
        '\n' +
        '<a href="https://i.imgur.com/p6ogpho.gif" target="_blank">like this</a>\n' +
        '\n' +
        'You can debug your site by right-clicking (if you are on Windows/Linux) or control+click (if you are on a Mac) and selecting the "Inspect Elements" option which should come with every browser.\n' +
        '\n' +
        '<a href="https://i.imgur.com/kTnxLWn.gif" target="_blank">like this</a>\n' +
        '\n' +
        'If you would like a guide on understanding HTML, I am currently creating one but you can also refer to other sources online. You should not have to alter any of the CSS or Javascript with these templates.\n' +
        '\n' +
        '<hr>' +
        '\n' +
        '<b>Deploying to Github</b>\n' +
        '\n' +
        'Create a repository named <insertGithubUserNameHere>.github.io without the \'<>\'\n' +
        '\n' +
        'In this tutorial, my username is nvurdienn so my repository would be named nvurdienn.github.io\n' +
        '\n' +
        '<a href="https://i.imgur.com/QA32DJL.gif" target="_blank">like this</a>\n' +
        '\n' +
        'Once you have done that set up Git on your computer, if you haven\'t already. If you have a Mac/Linux, Git should be preinstalled on your system; however, if you have windows you should download <a href="https://desktop.github.com" target="_blank">Github Desktop</a>. Instructions on how to set up Git through command line are listed <a href="http://burnedpixel.com/blog/setting-up-git-and-github-on-your-mac/" target="_blank">here</a>. Linux/Mac users may also set up Git by downloading and logging into <a href="https://desktop.github.com" target="_blank">Github Desktop</a>.\n' +
        '\n' +
        'Once you have logged into Git, add all the files into that repository.\n' +
        '\n' +
        'First, you will need to clone your repository to your computer. Then move into that directory with the "cd" command\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="bash" class="lang-bash">' +
        '\n' +
        'git clone &lt;yourgithubclonelink>\n' +
        'cd &lt;insertGithubUserNameHere>.github.io\n' +
        '\n' +
        '</code></pre>' +
        '\n' +
        'Open the folder that contained all the website files and copy them over to your repository folder.\n' +
        'Then type the following commands\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="bash" class="lang-bash">' +
        '\n' +
        'git add .\n' +
        'git commit -m "&lt;Any commit message here>"\n' +
        'git push\n' +
        '\n' +
        '</code></pre>' +
        '\n' +
        '<a href="https://i.imgur.com/jkVeHWa.gif" target="_blank">like this</a>\n' +
        '\n' +
        'Congrats you have successfully created your personal page!\n' +
        '\n' +
        'The page would be at <insertGithubUserNameHere>.github.io\n' +
        '\n' +
        'As an example, the username used in this tutorial would be nvurdienn.github.io\n' +
        '\n' +
        'You can continuously edit this repository by using the last three commands listed above just make sure you are in the correct directory. Make sure you save all files before trying to push them to github. Also, make sure you edit all documents in the folder connected to your github repository.',
        comments: [
            {
                author: 'This is currently a WIP',
                date: new Date(),
                body: 'This is currently a WIP'
            }
        ]
    },






    {
        id: 6,
        code: 'jekyll',
        body:
        '<b>Before you start</b>\n' +
        '\n' +
        'Please pick one of the following templates before you start this tutorial:\n' +
        '\n' +
        '  <li><a href="https://github.com/jekyll/jekyll/wiki/Themes" target="_blank">Github Compilation of themes</a> <i class="fa fa-star"></i></li>' +
        '  <li><a href="http://jekyllthemes.org" target="_blank">Jekyll Themes</a></li>' +
        '  <li><a href="https://jekyllthemes.io" target="_blank">JekyllThemes.io</a></li>' +
        '\n' +
        '\n' +
        'Once you have successfully downloaded the template of your choice please follow the directions below.\n' +
        '\n' +
        '<hr>' +
        '\n' +
        '<b>Setting up</b>\n' +
        '\n' +
        'Once you have downloaded/saved your website template, it will show up in wherever you set up your download folder.\n' +
        '\n' +
        'Go to that folder and open the main/homepage/index html file in any text editor of your choice (I recommend <a href="https://atom.io" target="_blank">Atom</a> or <a href="https://www.sublimetext.com" target="_blank">Sublime</a>)\n' +
        '\n' +
        'In example, mine is labeled <b>index.html</b>. If it is not named index.html please change it to index.html since github recognizes the homepage link as index.html <a href="https://imgur.com/Yo1ei7h.gif" target="_blank">like this</a>\n' +
        '\n' +
        '<b>You probably won\'t have to change <u>ANY</u> HTML in your Jekyll template!</b>\n' +
        '\n' +
        'But if you do, you can see how you are editing your site in realtime by opening the HTML document in your browser and refreshing the page <a href="https://i.imgur.com/p6ogpho.gif" target="_blank">like this</a>.\n' +
        '\n' +
        'You can debug your site by right-clicking (if you are on Windows/Linux) or control+click (if you are on a Mac) and selecting the "Inspect Elements" option which should come with every browser. <a href="https://i.imgur.com/kTnxLWn.gif" target="_blank">like this</a>\n' +
        '\n' +
        'Also please note for Jekyll, if you plan on managing a blog many of the templates will include a _posts folder where you can create .md files to create new posts. The templates will have the same structure as the sample .md file given in the folder. Also every Jekyll file will be set up differently and generally in all the "README.md" files in the home directory will contain set up instructions. <b>The _config.yml file should be filled out with your information!</b>\n' +
        '\n' +
        '<b>If you are using a template for Jekyll and you are new to web development, please only edit the .md files and the _config.yml file in order to prevent any unwanted effects!!</b>\n' +
        '\n' +
        'Many of the pages you will be using will be using Markdown so here is an excellent resource on getting started with that is this <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links" target="_blank">Markdown-Cheatsheet</a> on Github. Markdown also works with HTML so if you would like a guide on understanding HTML, I am currently creating one but you can also refer to other sources online. You should not have to alter any of the CSS or Javascript with these templates.\n' +
        '\n' +
        '\n' +
        '<hr>' +
        '\n' +
        '<b>Deploying to Github</b>\n' +
        '\n' +
        'Create a repository named <insertGithubUserNameHere>.github.io without the \'<>\'\n' +
        '\n' +
        'In this tutorial, my username is nvurdienn so my repository would be named nvurdienn.github.io\n' +
        '\n' +
        '<a href="https://i.imgur.com/QA32DJL.gif" target="_blank">like this</a>\n' +
        '\n' +
        'Once you have done that set up Git on your computer, if you haven\'t already. If you have a Mac/Linux, Git should be preinstalled on your system; however, if you have windows you should download <a href="https://desktop.github.com" target="_blank">Github Desktop</a>. Instructions on how to set up Git through command line are listed <a href="http://burnedpixel.com/blog/setting-up-git-and-github-on-your-mac/" target="_blank">here</a>. Linux/Mac users may also set up Git by downloading and logging into <a href="https://desktop.github.com" target="_blank">Github Desktop</a>.\n' +
        '\n' +
        'Once you have logged into Git, add all the files into that repository.\n' +
        '\n' +
        'First, you will need to clone your repository to your computer. Then move into that directory with the "cd" command\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="bash" class="lang-bash">' +
        '\n' +
        'git clone &lt;yourgithubclonelink>\n' +
        'cd &lt;insertGithubUserNameHere>.github.io\n' +
        '\n' +
        '</code></pre>' +
        '\n' +
        'Open the folder that contained all the website files and copy them over to your repository folder.\n' +
        'Then type the following commands\n' +
        '\n' +
        '<pre class="prettyprint"><code data-language="bash" class="lang-bash">' +
        '\n' +
        'git add .\n' +
        'git commit -m "&lt;Any commit message here>"\n' +
        'git push\n' +
        '\n' +
        '</code></pre>' +
        '\n' +
        '<a href="https://i.imgur.com/jkVeHWa.gif" target="_blank">like this</a>\n' +
        '\n' +
        'Congrats you have successfully created your personal page!\n' +
        '\n' +
        'The page would be at &lt;insertGithubUserNameHere>.github.io\n' +
        '\n' +
        'As an example, the username used in this tutorial would be nvurdienn.github.io\n' +
        '\n' +
        'You can continuously edit this repository by using the last three commands listed above just make sure you are in the correct directory. Make sure you save all files before trying to push them to github. Also, make sure you edit all documents in the folder connected to your github repository.',
        date: new Date(),
        heading: 'Jekyll Personal Site Guide',
        comments: [
            {
                author: 'This is currently a WIP',
                date: new Date(),
                body: 'This is currently a WIP'
            }
        ]
    }
]