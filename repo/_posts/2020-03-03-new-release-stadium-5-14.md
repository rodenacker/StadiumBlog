---
layout: post
title: New Release&#58; Stadium 5.14
published: Tue, 03 Mar 2020 12:20:50 +0000
image: https://interaction-design.co.za/stadiumblog/blogimages/blog-headliners-02-650x350.jpg
category: 
  - Announcements
tags: 
---

<p>The latest version of Stadium is out. This release contains some nifty new features that will make building your next great web application even easier.</p>
<p>The new features are;</p>
<h2>Session Variables</h2>
<p>
<span style="font-weight: 400;">Stadium has two types of variables &#8211; ‘script variables’ and now also ‘session variables’. Script variables have been around for quite a while and are defined in a script by dragging the Variable action onto the script. Once this has been done, the variable can only be used throughout that specific script and ceases to exist as soon as the script completes. Session variables, on the other hand, are defined on the Application level. They can be used across all of the application’s pages and exist for as long as the user’s session is active in the application.</span>
</p>
<h2>Application Properties</h2>
<p>
<span style="font-weight: 400;">Set both the </span>
<i>
<span style="font-weight: 400;">HTTP Response Headers</span>
</i>
<span style="font-weight: 400;"> and the </span>
<i>
<span style="font-weight: 400;">Maximum File Upload Size</span>
</i>
<span style="font-weight: 400;"> for your application from within the Designer. This allows you to set them up as you are building the application and removes the need for you to remember to set them up when eventually deploying your application to the Stadium Server.</span>
</p>
<h2>Find References</h2>
<p>
<span style="font-weight: 400;">Where did I use that query in my application? Where is the control value being changed? ‘Find References’ answers all these questions by displaying all locations where a specific control, action, setting, page parameter, script parameter, etc. is used or accessed.</span>
</p>
<h2>Preview Logging</h2>
<p>
<i>
<span style="font-weight: 400;">Preview</span>
</i>
<span style="font-weight: 400;"> was added in the previous release. It not only allowed you to quickly and easily view the application you built on your local computer, but also logged some basic information to the browser dev console while a script was executing. In this release, we improved the logging by adding detailed logs when a web service is executed. Before now, when a web service call failed, you were pretty much left guessing what could have gone wrong. With the new web service logs, you are able to see in detail what Stadium did and where it failed. Information like&nbsp; authentication details, URL, headers, querystring, response, etc are all logged to the browser dev console allowing you to easily investigate and pinpoint the problem. If you need to resend the request, simply use the logged information to feed it into a tool like <a href="https://www.postman.com/">Postman</a> and resend it.</span>
</p>
<p>See more of Stadium’s future plans on the <a href="https://stadium.software/stadium-5-roadmap/">roadmap</a>
</p>