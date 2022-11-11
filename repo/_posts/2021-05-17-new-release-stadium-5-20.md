---
layout: post
title: New Release&#58; Stadium 5.20
published: Mon, 17 May 2021 12:00:29 +0000
image: https://stadium.software/wp-content/uploads/2019/05/blog-headliners-02-650x350.jpg
categories: [announcements]
tags: 
---

<p>
</p>



<h2>Single Sign-on</h2>


<p>
<span style="font-weight: 400;">Single Sign-on is used by most web apps these days and is now also available in Stadium as an authentication type for its applications. To achieve this, we used the OpenID Connect authentication protocol.<br/>
<br/>
</span>
</p>


<blockquote class="wp-block-quote">
<p>OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol. It allows Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner.</p>
<cite>
<em>Extract from </em>
<a href="https://openid.net/connect/">
<em>https://openid.net/connect/</em>
</a>
<br>
</cite>
</blockquote>



<p>Our main goal with SSO in Stadium was to enable central user management across several different applications. With this in mind, we had a look at several well-known and popular OIDC providers and, as a start, decided to support Okta, Auth0, and Google with Azure AD soon to follow.</p>



<p>An essential part of user management is the assignment of roles to a user. For Stadium, this can be done solely in the OIDC provider, within the generated application itself, or independently in both. Should role assignments be done in both, a merged set will be applied to the user when they log in.</p>



<p>See <a href="https://stadium.software/docs/HowItWorks/ApplicationManager#loginmode">here</a> for more on SSO in Stadium and how to use it.</p>



<h2>URL Editor</h2>



<p>Our UX tests indicated that some users struggle to pass parameters between pages.&nbsp;</p>



<p>To address this problem, we completely revisited and redesigned the way URLs are handled in Stadium. Instead of a series of dropdowns, we now opted to display a URL in a javascript templated string. The result is a much more URL-like string than before, easy to understand, read and edit.</p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="493" height="70" src="https://stadium.software/wp-content/uploads/2021/05/Screenshot-2021-05-17-at-13.58.54.png" alt="" class="wp-image-1791" srcset="https://stadium.software/wp-content/uploads/2021/05/Screenshot-2021-05-17-at-13.58.54.png 493w, https://stadium.software/wp-content/uploads/2021/05/Screenshot-2021-05-17-at-13.58.54-300x43.png 300w" sizes="(max-width: 493px) 100vw, 493px"/>
</figure>



<p>We also added a new URL Editor to quickly and easily build this templated string. In this editor, users can select the destination and select parameters from the dropdowns or just type them in.</p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="523" height="348" src="https://stadium.software/wp-content/uploads/2021/05/Screenshot-2021-05-17-at-13.59.03.png" alt="" class="wp-image-1792" srcset="https://stadium.software/wp-content/uploads/2021/05/Screenshot-2021-05-17-at-13.59.03.png 523w, https://stadium.software/wp-content/uploads/2021/05/Screenshot-2021-05-17-at-13.59.03-300x200.png 300w, https://stadium.software/wp-content/uploads/2021/05/Screenshot-2021-05-17-at-13.59.03-272x182.png 272w" sizes="(max-width: 523px) 100vw, 523px"/>
</figure>