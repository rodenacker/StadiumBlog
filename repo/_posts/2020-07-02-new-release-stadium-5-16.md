---
layout: post
title: New Release&#58; Stadium 5.16
published: Thu, 02 Jul 2020 06:35:53 +0000
image: https://interaction-design.co.za/stadiumblog/blogimages/blog-headliners-02-650x350.jpg
category: 
  - Announcements
tags: 
---

<p>The latest version of Stadium is out. <span style="font-weight: 400;">The new feature included in this release is a new Async action. Read on for more detail.</span>
</p>
<p>
<span style="color: #333333; font-size: 1.95em; font-weight: 600;">Async Action</span>
</p>
<p>
<span style="font-weight: 400;">Synchronous programming only allows one thing to happen at a given time. An action starts and waits to complete before starting another action. Asynchronous programming, in contrast, allows multiple things to happen at the same time, i.e. all actions are started at once and the completion of one does not affect the other one. From this, hopefully it can be seen that asynchronicity greatly reduces runtime as tasks do not need to wait on one another before starting. And on a UI, shorter runtime equals happier users!</span>
</p>
<p>
<span style="font-weight: 400;">A new action in Stadium, quite aptly named </span>
<b>
<i>Async</i>
</b>
<span style="font-weight: 400;">, was included exactly because of this reason. Any actions dragged into the new Async action run asynchronously. In addition to this, the developer can decide what should happen at the end of the Async block: Wait or Fire-and-forget. ‘Wait’ allows the Async action to first collect the output of all the child actions as they complete before continuing with the rest of the script &#8211; this behaviour would be the same as querying multiple data sources and waiting for the result of all calls before continuing. ‘Fire-and-forget’ would immediately continue with the script, not bothering to wait for the child actions to complete first &#8211; essentially the same as starting a task in the background and leaving it to complete on its own.</span>
</p>
<p>
<img loading="lazy" class="alignnone  wp-image-1648" src="{{ site.baseurl }}/blogimages/Screenshot-2020-07-02-at-08.34.56-300x178.png" alt="" width="564" height="335"/>
</p>
<p>
<span style="font-weight: 400;">With this new action, web pages using many different connector functions or data sources can be built to be more performant. Also, web pages can now run tasks in the background rather than force the users to sit and wait for them to complete.</span>
</p>
<p>See more of Stadium’s future plans on the <a href="https://stadium.software/stadium-5-roadmap/">roadmap</a>
</p>