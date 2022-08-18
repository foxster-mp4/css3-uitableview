# css3-uitableview
CSS3 UITableView

## Demo
https://foxster-mp4.github.io/css3-uitableview/

## Example Project
https://foxster-mp4.github.io/everywhere/

## Get Started
Include **uitableview.css**
```html
<!-- Before </head> -->
<link rel="stylesheet" href="https://foxster-mp4.github.io/css3-uitableview/src/uitableview.css">
```

Include one of the following:
* **uitableview.auto-dark.css** to have the page automatically switch between light/dark appearance to match the system appearance
```html
<!-- Before </head> -->
<link rel="stylesheet" href="https://foxster-mp4.github.io/css3-uitableview/src/uitableview.auto-dark.css">
```

* **uitableview.js** if you plan on toggling light/dark appearance in your code. Make sure to NOT include **uitableview.auto-dark.css** since the table would be matching the system appearance by default and the some functions won't have any visible effect
```html
<!-- Must NOT use with uitableview.auto-dark.css -->
<!-- Before </body> -->
<script src="https://foxster-mp4.github.io/css3-uitableview/src/uitableview.js"></script>
```

## Recommended Structure
```
body#uitableview | div#uitableview
-- [h1#title]
-- div.section-container [.rounded]
---- [p.section-header]
---- div.section
------ a.cell | div.cell [.clickable] [.disabled]
-------- [div.cell-icon]
---------- [img.icon] | [i.bi]
-------- div.cell-inner
---------- div.cell-labels
------------ p.cell-text
------------ [p.cell-detail-text]
---------- [div.cell-accessory-icon [.grey]]
------------ [i.bi]
---- [p.section-footer]
```
### NOTES
* Selectors in square brackets are optional
* In a section, all cells should be of the same tag

## License
[The MIT License](LICENSE.md)