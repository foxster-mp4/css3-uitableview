# css3-uitableview
CSS3 UITableView

<img src=".screenshot.png" alt="phone-browser-screenshot" width="300"/>
<img src=".screenshot-dark.png" alt="phone-browser-screenshot" width="300"/>

## See It in Action
* Demo: https://foxster-mp4.github.io/css3-uitableview/

* Working project: https://foxster-mp4.github.io/everywhere/


## Get Started
Include **uitableview.css**:
```html
<link rel="stylesheet" href="https://foxster-mp4.github.io/css3-uitableview/src/uitableview.css">
```

Include one of the following:
* **uitableview.auto-dark.css** to have the page automatically switch between light/dark appearance to match the system appearance
```html
<link rel="stylesheet" href="https://foxster-mp4.github.io/css3-uitableview/src/uitableview.auto-dark.css">
```

* **uitableview.js** if you plan on toggling light/dark appearance manually in your code. Make sure to NOT include **uitableview.auto-dark.css**, since the table would be matching the system appearance by default and the some functions might not have any visible effect
```html
<script src="https://foxster-mp4.github.io/css3-uitableview/src/uitableview.js"></script>
```

You may also include [Bootstrap Icons](https://icons.getbootstrap.com) to easily add cell icons (using `<i class="bi bi-<icon-name>>"`; see [icon font usage](https://icons.getbootstrap.com/#external-image)):
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
```

## Recommended Structure
```
body#uitableview | div#uitableview
-- [h1#title]
-- div.section-container [.rounded]
---- div.section
------ [p.section-header]
------ a.cell | div.cell [.clickable] [.disabled]
-------- [div.cell-icon]
---------- [img.icon] | [i.bi]
-------- div.cell-inner
---------- div.cell-labels
------------ p.cell-text
------------ [p.cell-detail-text]
---------- [div.cell-accessory-icon [.grey]]
------------ [i.bi]
------ [p.section-footer]
```
### NOTES
* Selectors in square brackets are optional
* In a section, all cells should be of the same tag

## License
[The MIT License](LICENSE.md)