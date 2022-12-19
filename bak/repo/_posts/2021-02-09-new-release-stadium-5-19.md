---
layout: post
title: New Release&#58; Stadium 5.19
published: Tue, 09 Feb 2021 13:47:21 +0000
image: https://stadium.software/wp-content/uploads/2019/05/blog-headliners-03-650x350.jpg
categories: [announcements]
tags: 
---

<p>The page canvas in the Designer is all about the control layout on your page and not so much about the visual accurateness of those controls. We have taken this a step further by abstracting the controls even more and removing all unnecessary white space between them as much as possible. The result is a better overview of your page and the layout thereof. The <em>before</em> and <em>after</em> screenshots below clearly show the improvement.</p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="1024" height="549" src="https://stadium.software/wp-content/uploads/2021/02/before-1024x549.png" alt="" class="wp-image-1786" srcset="https://stadium.software/wp-content/uploads/2021/02/before-1024x549.png 1024w, https://stadium.software/wp-content/uploads/2021/02/before-300x161.png 300w, https://stadium.software/wp-content/uploads/2021/02/before-768x412.png 768w, https://stadium.software/wp-content/uploads/2021/02/before-1536x824.png 1536w, https://stadium.software/wp-content/uploads/2021/02/before-650x349.png 650w, https://stadium.software/wp-content/uploads/2021/02/before.png 1920w" sizes="(max-width: 1024px) 100vw, 1024px"/>
<figcaption>Before</figcaption>
</figure>



<figure class="wp-block-image size-large">
<img loading="lazy" width="1024" height="549" src="https://stadium.software/wp-content/uploads/2021/02/after-1024x549.png" alt="" class="wp-image-1785" srcset="https://stadium.software/wp-content/uploads/2021/02/after-1024x549.png 1024w, https://stadium.software/wp-content/uploads/2021/02/after-300x161.png 300w, https://stadium.software/wp-content/uploads/2021/02/after-768x412.png 768w, https://stadium.software/wp-content/uploads/2021/02/after-1536x824.png 1536w, https://stadium.software/wp-content/uploads/2021/02/after-650x349.png 650w, https://stadium.software/wp-content/uploads/2021/02/after.png 1920w" sizes="(max-width: 1024px) 100vw, 1024px"/>
<figcaption>After</figcaption>
</figure>



<p>Previously, as seen in ‘<em>before</em>’, the canvas tried to accurately represent the controls during design time &#8211; or that is what it seemed like for most users. But in actual fact, controls were not supposed to mimic the run-time representation but rather simply indicate where the control would be positioned on the page. This misrepresentation confused a lot of users expecting to see a change on the canvas when control properties were changed.</p>



<p>Another issue caused by the misrepresentation was the wasted whitespace on the canvas, distracting the user from the canvas’ actual purpose: page layout. Most of that whitespace was due to how the controls were displayed on the canvas. To understand this, one first needs to understand the framework of a Stadium page. A page could be seen as being divided into many horizontal swimlanes, one below the other. Every swimlane can contain controls side by side, but not above or below each other. This meant when a Label was positioned next to an Image control, a large area of whitespace below the Label control was unusable and therefore “wasted space” (see image below).</p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="1024" height="300" src="https://stadium.software/wp-content/uploads/2021/02/swimlanes-1024x300.png" alt="" class="wp-image-1787" srcset="https://stadium.software/wp-content/uploads/2021/02/swimlanes-1024x300.png 1024w, https://stadium.software/wp-content/uploads/2021/02/swimlanes-300x88.png 300w, https://stadium.software/wp-content/uploads/2021/02/swimlanes-768x225.png 768w, https://stadium.software/wp-content/uploads/2021/02/swimlanes-650x190.png 650w, https://stadium.software/wp-content/uploads/2021/02/swimlanes.png 1199w" sizes="(max-width: 1024px) 100vw, 1024px"/>
</figure>



<p>All of the above considerations led us to what we call the “Blocky Layout”. In the latest canvas, all controls are represented by equally sized blocks containing the control name and the icon differentiating the type of control. These blocks are abstract enough to not mislead anyone into thinking it is the control’s real representation. It also allows for a much neater and minimalistic canvas with almost no wasted space, leaving you to focus on what the canvas was originally intended for &#8211; laying out the controls on your page.</p>



<p>Please <a href="https://stadium.software/contact/">let us know </a>what your impression is of our Blocky Layout! </p>