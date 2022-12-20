# Updating Stadium blog content

1. Adding a post
2. Adding a category
2. Adding a tag
3. Removing a post
4. Removing a category or tag

## Adding a post
Example posts can be found in the folder \\_posts

1. Posts need to be added as markdown files (.md). They can  be formatted using standard markdown or html. 
2. Every post must have a header section that specifies the meta data for the post. They must contain the following sections
   1. layout (must be *layout: post*)
   2. title (string)
   3. published (a date-formatted string)
   4. image (full url to the main image shown on listing pages for the post)
   5. category (the display name of the category this post belongs to. Posts can only belong to **one** category.)
   6. tags (An array of comma-separated tag names. Tag names may not contain spaces and must be referenced in lower case.)
3. Header sections have the following format:

**POST HEADER EXAMPLE (include starting and ending ---)**
```
---
layout: post
title: The title of the post
published: 19 Dec 2019
image: https://stadium.software/blog/blogimages/blog-headliners-01-650x350.jpg
category: 
  - Category Name
tags: [tag1, tag2]
---

```

3. Images contained in posts must be placed in the /blogimages/ folder and referenced in posts in html or as markdown
```
<img src="/blogimages/StadiumSpeedTest-1-1.gif" alt="Stadium 6 vs Stadium 5 speed test"/>
![Stadium 6 vs Stadium 5 speed test](/blogimages/StadiumSpeedTest-1-1.gif)
```

## Adding a category
Examples of category pages can be found in the \\category folder. 

Posts may only reference one category. For each category referenced in any post a corresponding category file must be created and placed in the \\category folder. 

When adding a new category, a corresponding md file **must** be added to the category folder. Without such a file there will be no corresponding category listing page and clicking on the category in the sidebar will result in a 404 error. 

Category files only consist of a header section and do not have any content. The categories referenced in category files **must** be exactly in the same format as in the post file (same casing and spaces).

Category files must be named according to the name of the category they contain. File names must be in lower case. Spaces must be replaced with dashes (-). 

**Category file example1**

Filename: categoryname.md
```
---
layout: categorypage
category: CategoryName
---

```

**Category file example2**

Filename: category-name.md
```
---
layout: categorypage
category: Category Name
---

```

## Adding a tag
Examples tag pages can be found in the \\tag folder. 

Posts may reference any number of tags. Tags may not contain spaces and must be referenced in lower case. For each tag referenced in any post, a corresponding tag file **must** be created and placed in the \\tag folder. Without such a corresponding tag file there will be no tag listing page and clicking on the tag in the sidebar of at the bottom of posts will result in a 404 error. 

Tag files only consist of a header section and do not have any content. All tags **must** be in lower case and may not contain spaces. 

Tag files must be named according to the name of the tag they contain. File names must be in lower case.

**Tag file example**

Filename: tagname.md
```
---
layout: tagpage
tag: tagname
---

```

## Removing a post
To remove a post, simply remove the post md file from the \\_posts folder

## Removing a category or tag
To remove a category or a tag, simply remove the category or tag md file from the \\category or \\tag folder
