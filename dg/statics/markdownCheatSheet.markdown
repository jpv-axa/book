# Markdown Cheat Sheet

These are tips about the Markdown format.
You can use this content directly in a Note panel and see how it is intepreted

``` javascript
import buttonMarkdown from '!raw-loader!../statics/markdownCheatSheet.markdown';
let code = `<axa-button>Primary button</axa-button>`;
storiesOf(`Atoms|Buttons`, module)
    .add('All variations', () => code
        , {
            notes: {
                markdown: buttonMarkdown
            }
        }
    )
```

## Titles

>```
># H1
>## H2
>### H3
>#### H4
>##### H5
>###### H6
>```

# H1
## H2
### H3
#### H4
##### H5
###### H6


Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======


Alt-H2
------

## Escaping text
How to display text that won't be interpreted by markdown ? With backquotes :

>```
```
>#This is not a Title
```
>```

## Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

1. First ordered list item
2. Another item
  * Unordered sub-list. 

Write some text to break numbers order

5. You can't start from where you want
  1. Ordered sub-list
4. But numbers will follow, regardless of what you wrote
   
   Some text that should be aligned with the above item.


## Links
[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][1]

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images
Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Code

### Javascript
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

### Python
```python
s = "Python syntax highlighting"
print s
```

### No language
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```

## Tables

### Columns alignment 
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


### Inline Markdown
The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

