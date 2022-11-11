---
layout: post
title: New Release&#58; Stadium 5.25
published: Fri, 14 Jan 2022 12:50:23 +0000
image: https://stadium.software/wp-content/uploads/2019/05/blog-headliners-03-650x350.jpg
categories: [announcements]
tags: 
---

<p>
</p>



<p>Last year a lot happened!! We moved from 32 bit to 64 bit and added lots of new features. Among these were:</p>



<ul>
<li>Blocky Layout</li>
<li>OAuth &amp; Azure Active Directory</li>
<li>URL Editor</li>
<li>Three new Layout Controls &#8211; Grid, Flexbox and Container</li>
<li>Repeater</li>
<li>Types</li>
</ul>



<p>But that is not where we stopped… The devs were hard at work over the festive season, and we are kicking this new year off with a new Stadium 5 release! This release focuses on improving the UX when building an application, specifically setting values in the Property Grid. Or, even more specifically, the Property Grid ReferenceComboBox.</p>



<h2>The ReferenceComboBox filter</h2>



<p>The ReferenceComboBox is the dropdown in the Property Grid where you select Settings, Control properties, Variables, create Expressions, etc. Unfortunately, on control- or action-heavy pages, this dropdown grows to an excessively long list and results in a scrolling nightmare for the builder. The image below is a screenshot of such a case.</p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="531" height="571" src="https://stadium.software/wp-content/uploads/2022/01/Screenshot-2022-01-14-at-14.46.31.png" alt="" class="wp-image-1822" srcset="https://stadium.software/wp-content/uploads/2022/01/Screenshot-2022-01-14-at-14.46.31.png 531w, https://stadium.software/wp-content/uploads/2022/01/Screenshot-2022-01-14-at-14.46.31-279x300.png 279w" sizes="(max-width: 531px) 100vw, 531px"/>
<figcaption>Creating a type</figcaption>
</figure>



<p>To address this, we added a filter box to the top of the ReferenceComboBox, which filters on the item name. As the name is typed in, the contents in the dropdown will be restricted to only those items satisfying the filter criteria.</p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="374" height="330" src="https://stadium.software/wp-content/uploads/2022/01/Screenshot-2022-01-14-at-14.46.35.png" alt="" class="wp-image-1823" srcset="https://stadium.software/wp-content/uploads/2022/01/Screenshot-2022-01-14-at-14.46.35.png 374w, https://stadium.software/wp-content/uploads/2022/01/Screenshot-2022-01-14-at-14.46.35-300x265.png 300w" sizes="(max-width: 374px) 100vw, 374px"/>
<figcaption>Setting initial values</figcaption>
</figure>



<p>Adding this filter reduces the amount of scrolling and searching around in the ReferenceComboBox and allows you to focus on what is most important &#8211; the application logic. So please try it out and let us know what you think!</p>