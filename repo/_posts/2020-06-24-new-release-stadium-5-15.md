---
layout: post
title: New Release&#58; Stadium 5.15
published: Wed, 24 Jun 2020 08:13:23 +0000
image: https://stadium.software/wp-content/uploads/2019/05/blog-headliners-02-650x350.jpg
categories: [announcements]
tags: 
---

<p>The latest version of Stadium is out. This release contains some nifty new features that will make building your next great web application even easier.</p>
<p>The new features are;</p>
<h2>
<span style="font-weight: 400;">Styles</span>
</h2>
<p>
<span style="font-weight: 400;">Stadium provides you with default styles for your generated applications. At times however, you might want to change the default look of your application to reflect the colours of your business or change the style to better accommodate your design. The new Style tab now allows you, whether a beginner or expert CSS user, to easily override the default styles and customize the application to your exact styling requirement.</span>
</p>
<p>
<img loading="lazy" class="wp-image-1641 alignnone" src="https://stadium.software/wp-content/uploads/2020/06/2020-04-14_15h44_39-1-300x156.png" alt="" width="600" height="312" srcset="https://stadium.software/wp-content/uploads/2020/06/2020-04-14_15h44_39-1-300x156.png 300w, https://stadium.software/wp-content/uploads/2020/06/2020-04-14_15h44_39-1-1024x532.png 1024w, https://stadium.software/wp-content/uploads/2020/06/2020-04-14_15h44_39-1-768x399.png 768w, https://stadium.software/wp-content/uploads/2020/06/2020-04-14_15h44_39-1-1536x798.png 1536w, https://stadium.software/wp-content/uploads/2020/06/2020-04-14_15h44_39-1-650x338.png 650w, https://stadium.software/wp-content/uploads/2020/06/2020-04-14_15h44_39-1.png 1920w" sizes="(max-width: 600px) 100vw, 600px"/>
</p>
<p>
<span style="font-weight: 400;">The Style editor consists of 4 parts:</span>
</p>
<ol>
<li style="font-weight: 400;">
<span style="font-weight: 400;">the </span>
<i>
<span style="font-weight: 400;">selector</span>
</i>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">the </span>
<i>
<span style="font-weight: 400;">pseudo classes</span>
</i>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">basic CSS properties</span>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Free-text CSS area</span>
</li>
</ol>
<p>
<span style="font-weight: 400;">The </span>
<i>
<span style="font-weight: 400;">selector</span>
</i>
<span style="font-weight: 400;"> determines what element(s) the style will be applied to in the generated application. It is divided into two categories, </span>
<i>
<span style="font-weight: 400;">Controls</span>
</i>
<span style="font-weight: 400;"> and </span>
<i>
<span style="font-weight: 400;">Pages</span>
</i>
<span style="font-weight: 400;">. Any style you change under the </span>
<i>
<span style="font-weight: 400;">Controls</span>
</i>
<span style="font-weight: 400;"> section will be applied to all controls of the same type across your entire application. Styles under </span>
<i>
<span style="font-weight: 400;">Pages</span>
</i>
<span style="font-weight: 400;"> will only be applied to that one specific control. </span>
</p>
<p>
<span style="font-weight: 400;">The </span>
<i>
<span style="font-weight: 400;">pseudo classes</span>
</i>
<span style="font-weight: 400;"> (section 2) allows you to define different styles for the different states a control can be in, e.g you can create a different style for each one of the states a hyperlink can be in: ‘Normal’, ‘Visited’, ‘Hover’ or ‘MouseDown’.</span>
</p>
<p>
<span style="font-weight: 400;">Section (3) allows you to easily change the basic styling by simply setting the appropriate properties. As a property changes, the section marked as (4) updates to reflect the CSS that will be applied. </span>
</p>
<p>
<span style="font-weight: 400;">The </span>
<i>
<span style="font-weight: 400;">free-text CSS area </span>
</i>
<span style="font-weight: 400;">is where the advanced CSS user can make the real magic happen by adding any advanced CSS declarations that he wishes to.</span>
</p>
<h2>
<span style="font-weight: 400;">
</p>
<p>Preview Logging</span>
</h2>
<p>
<span style="font-weight: 400;">In the previous release we introduced Preview Logs which expose detailed runtime information of the actions. Database and web service calls are now also being logged to the preview logs. This enables you to debug and correct any possible issues that might occur while making such calls. </span>
</p>
<p>
<span style="font-weight: 400;">For database calls, the information logged differs for the type of query being executed. Below is the info logged for a standard SELECT query:</span>
</p>
<ul>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Connection String</span>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Command Type</span>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Nr of rows returned in the result</span>
</li>
</ul>
<p>
<span style="font-weight: 400;">
<br/>
For Web Service calls, the following info is logged:</span>
</p>
<ul>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Authentication details</span>
<ul>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Type </span>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Username (for Auth Type ‘Basic’)</span>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Password (for Auth Type ‘Basic’)</span>
</li>
</ul>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Request details</span>
<ul>
<li style="font-weight: 400;">
<span style="font-weight: 400;">URL</span>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">HTTP Method</span>
</li>
</ul>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Response details</span>
<ul>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Status Code</span>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Reason Phrase</span>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Media Type</span>
</li>
<li style="font-weight: 400;">
<span style="font-weight: 400;">Content</span>
</li>
</ul>
</li>
</ul>
<p>
<span style="font-weight: 400;">Below you can see an example of the preview logs of a web service call to the Random User API.</span>
</p>
<p>
<img loading="lazy" class="alignnone wp-image-1644" src="https://stadium.software/wp-content/uploads/2020/06/2020-04-14_17h02_08-1-300x223.png" alt="" width="600" height="446" srcset="https://stadium.software/wp-content/uploads/2020/06/2020-04-14_17h02_08-1-300x223.png 300w, https://stadium.software/wp-content/uploads/2020/06/2020-04-14_17h02_08-1-1024x761.png 1024w, https://stadium.software/wp-content/uploads/2020/06/2020-04-14_17h02_08-1-768x571.png 768w, https://stadium.software/wp-content/uploads/2020/06/2020-04-14_17h02_08-1-650x483.png 650w, https://stadium.software/wp-content/uploads/2020/06/2020-04-14_17h02_08-1.png 1161w" sizes="(max-width: 600px) 100vw, 600px"/>
</p>