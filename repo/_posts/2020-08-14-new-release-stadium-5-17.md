---
layout: post
title: New Release&#58; Stadium 5.17
published: Fri, 14 Aug 2020 11:56:17 +0000
image: https://interaction-design.co.za/stadiumblog/blogimages/blog-headliners-02-650x350.jpg
categories: [announcements]
tags: 
---

<p>
<span style="font-weight: 400;">Every application you build in Stadium contains confidential data. Data relevant only to you or meant for your eyes only. Passwords, API keys and tokens are all examples of this kind of data. The world calls these secrets &#8211; so do we. </span>
</p>
<p>
<span style="font-weight: 400;">Up until now Stadium had no concept of secrets and everything was stored inside the application file, better known as the “sapz” (</span>
<span style="font-weight: 400;">sæp zɛd</span>
<span style="font-weight: 400;">). To avoid exposing your secrets, you had to scrub the sapz of any sensitive information before sharing or committing it into source control. Not anymore though. </span>
</p>
<p>
<i>
<span style="font-weight: 400;">Secrets</span>
</i>
<span style="font-weight: 400;"> is the new <a href="https://stadium.software/">feature in Stadium</a>. Any data marked as a secret in Stadium remains your data and is not stored in the sapz but in a secured vault, specific to that logged-in windows user and computer. That means if you enter a secret value on your home laptop and then later open the same sapz on your work laptop that secret will be blank. Or, should someone else log onto your computer and open your sapz, all secrets will be blank. Your secret remains exactly that &#8211; a secret. </span>
</p>
<p>
<span style="font-weight: 400;">Secrets on SAM work exactly the same with one difference. Secrets are not stored under the logged-in user profile but rather under the user profile SAM runs underneath, usually the ApplicationPoolIdentity. The implication of this is that when you deploy an application for the first time to SAM after starting to use secrets, you will be required to re-enter those secrets on SAM. Storing secrets under a single account, the ApplicationPoolIdentity, also allows multiple admin users to administer the same applications on SAM and still be able to view and edit secrets entered by another admin. For example, when you log into SAM and enter a secret, that secret is not stored under your profile but under the ApplicationPoolIdentity profile. Because all other users logging into SAM use the same profile, they will be able to see and edit that secret entered by you and vice versa.  </span>
</p>
<p> </p>
<p>
<span style="font-weight: 400;">“So how do I use secrets in Stadium?” I hear you asking. Here’s how</span>
</p>
<p> </p>
<h3>1. Create a Setting</h3>
<p>
<span style="font-weight: 400;">Click on Settings in the Application Explorer and type a name and value for your setting.</span>
</p>


<figure class="wp-block-image size-large">
<img loading="lazy" width="1024" height="356" src="{{ site.baseurl }}/blogimages/1-Create-a-setting-1024x356.png" alt="" class="wp-image-1658"/>
</figure>



<h3>2. Mark the Setting as a secret</h3>



<p>In this step, you tell Stadium that the value should not be stored in the SAPZ but rather in your personal secured vault on your laptop or computer. Immediately when the secret checkbox is checked, the value of your setting will be masked. To view it in plaintext again, simply click the eye in the textbox. This only displays the value in plaintext but it remains stored in your encrypted vault on your laptop or computer.</p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="1024" height="362" src="{{ site.baseurl }}/blogimages/2-Mark-the-setting-as-a-secret-1024x362.png" alt="" class="wp-image-1659"/>
</figure>



<h3>3. Use the Setting</h3>



<p>All the hard work has been done at this point 🙂 Now you can simply assign the setting to any property in Stadium by selecting it from the dropdown. In the image below I am selecting MySetting1 as the value of the Northwind ConnectionString. When the application runs, the value of the secret setting will be used as the connectionstring.<br>
</p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="535" height="747" src="{{ site.baseurl }}/blogimages/3-Use-the-setting.png" alt="" class="wp-image-1660"/>
</figure>