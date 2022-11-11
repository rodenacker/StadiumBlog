---
layout: post
title: New Release&#58; Stadium 5.22
published: Wed, 08 Sep 2021 07:42:50 +0000
image: https://stadium.software/wp-content/uploads/2019/05/blog-headliners-03-650x350.jpg
categories: [announcements]
tags: 
---

<p>We are really excited to release this version! It includes the first release of the <strong>
<em>Repeater</em>
</strong> control that we have been working very hard on! </p>



<h2>Repeater</h2>



<p>Cards, lists, tables are just some of the ways to display a dataset on a webpage. In Stadium, we wanted to introduce a control that allows you to display your dataset on your page without restricting you in how you want to display it.&nbsp;</p>



<p>The Repeater control is a visual template that allows you total freedom to design a view for the dataset. At design time, the visual template represents the view of one object in the dataset. At runtime, this visual template you designed is taken and applied uniformly to every item in the dataset. To control the layout of the repeated items on your page, simply drop the Repeater into a <a href="https://stadium.software/new-release-stadium-5-21/">Layout Control</a>. </p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="1024" height="689" src="https://stadium.software/wp-content/uploads/2021/09/Image-a-1024x689.png" alt="" class="wp-image-1807" srcset="https://stadium.software/wp-content/uploads/2021/09/Image-a-1024x689.png 1024w, https://stadium.software/wp-content/uploads/2021/09/Image-a-300x202.png 300w, https://stadium.software/wp-content/uploads/2021/09/Image-a-768x517.png 768w, https://stadium.software/wp-content/uploads/2021/09/Image-a-650x438.png 650w, https://stadium.software/wp-content/uploads/2021/09/Image-a-272x182.png 272w, https://stadium.software/wp-content/uploads/2021/09/Image-a.png 1132w" sizes="(max-width: 1024px) 100vw, 1024px"/>
<figcaption>View at design time</figcaption>
</figure>



<figure class="wp-block-image size-large">
<img loading="lazy" width="1024" height="650" src="https://stadium.software/wp-content/uploads/2021/09/Image-b-1024x650.png" alt="" class="wp-image-1808" srcset="https://stadium.software/wp-content/uploads/2021/09/Image-b-1024x650.png 1024w, https://stadium.software/wp-content/uploads/2021/09/Image-b-300x191.png 300w, https://stadium.software/wp-content/uploads/2021/09/Image-b-768x488.png 768w, https://stadium.software/wp-content/uploads/2021/09/Image-b-1536x976.png 1536w, https://stadium.software/wp-content/uploads/2021/09/Image-b-2048x1301.png 2048w, https://stadium.software/wp-content/uploads/2021/09/Image-b-650x413.png 650w" sizes="(max-width: 1024px) 100vw, 1024px"/>
<figcaption>View at runtime</figcaption>
</figure>



<p>Using the Repeater is a 3 step process:</p>



<ol>
<li>Build the template</li>
<li>Create the ItemLoad event</li>
<li>Assign the dataset</li>
</ol>



<p>Look at the <a href="https://stadium.software/docs/Controls/Repeater">Repeater </a>in our <a href="https://stadium.software/docs/">docs</a> for more info on each of these steps.</p>



<h2>Application Head Property</h2>



<p>When building applications, one often requires a 3rd party javascript library. It is now possible to include such a library in Stadium by adding it into the Head property of the application. Whatever you type into the Head property, is included as-is into the HTML &lt;head&gt; element of the application. That means, whatever is allowed in a normal HTML head, can also be typed into the Head property in Stadium.</p>



<p>Let’s look at an example. A while ago I came across this great markdown editor created by ToastUI, and luck so has it that it would work extremely well in the current application I am building in Stadium. So I head over to the Application node in the Application Explorer and open the Head editor. Once there, I add the script and stylesheet of the ToastUI Editor and hit Save. Once this has been done, I can now use the ToastUI library in any JavaScript action or expression throughout my application.</p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="948" height="500" src="https://stadium.software/wp-content/uploads/2021/09/Image-c.png" alt="" class="wp-image-1809" srcset="https://stadium.software/wp-content/uploads/2021/09/Image-c.png 948w, https://stadium.software/wp-content/uploads/2021/09/Image-c-300x158.png 300w, https://stadium.software/wp-content/uploads/2021/09/Image-c-768x405.png 768w, https://stadium.software/wp-content/uploads/2021/09/Image-c-650x343.png 650w" sizes="(max-width: 948px) 100vw, 948px"/>
</figure>



<p>I hope that my explanation of the new Stadium features here has inspired you to go and try out the Repeater! And when you have, please let us know what your experience was using it. Read further on all our other controls in our <a href="https://stadium.software/docs/Controls">docs</a>.</p>