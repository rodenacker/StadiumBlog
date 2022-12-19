---
layout: post
title: New Release&#58; Stadium 5.24
published: Mon, 08 Nov 2021 15:13:22 +0000
image: https://interaction-design.co.za/stadiumblog/blogimages/blog-headliners-03-650x350.jpg
categories: [announcements]
tags: 
---

<blockquote class="wp-block-quote">
<p>
<span class="has-inline-color has-black-color">
<em>Object-oriented programming (OOP) is a <a href="https://en.wikipedia.org/wiki/Programming_paradigm">programming paradigm</a> based on the concept of &#8220;<a href="https://en.wikipedia.org/wiki/Object_(computer_science)">objects</a>&#8220;, which can contain <a href="https://en.wikipedia.org/wiki/Data">data</a> and code: data in the form of <a href="https://en.wikipedia.org/wiki/Field_(computer_science)">fields</a> (often known as <a href="https://en.wikipedia.org/wiki/Attribute_(computing)">attributes</a> or properties), and code, in the form of procedures (often known as <a href="https://en.wikipedia.org/wiki/Method_(computer_science)">methods</a>).</em> </span>
</p>
<cite>
<a href="https://en.wikipedia.org/wiki/Object-oriented_programming">https://en.wikipedia.org/wiki/Object-oriented_programming</a> </cite>
</blockquote>



<p>
</p>



<p>In OOP, objects are used to pass data around in applications. In Stadium, this is not much different &#8211; the result of web services, databases and more are simply objects. Often, however, the builder of an application wants to create a custom object to either group data together or to simplify working with data in the application. <strong>
<em>Stadium Types</em>
</strong> is the answer to this!</p>



<h2>Types</h2>



<p>A Type is a template to create objects. The Type Editor (seen in the image below), allows the builder to define the properties with a name and a JavaScript type.</p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="1024" height="641" src="{{ site.baseurl }}/blogimages/1-Create-type-1024x641.png" alt="Creating a type" class="wp-image-1813"/>
<figcaption>Creating a type</figcaption>
</figure>



<p>Once created and defined, an object can be instantiated from the type by dragging it into the script or eventhandler. Set the initial values of the object by setting the <em>Value</em> property to a JavaScript object containing the properties you want to set. Be on the lookout for the specialized Object Editor in one of the next releases that will allow the builder to set the initial values via dropdowns instead of hand-typing a JavaScript object. In the image below, the <em>name</em>, <em>email</em> and <em>phone</em> properties are set. The <em>name </em>property is initialized to another object which contains the <em>title</em>, <em>first</em> and <em>last</em> properties.</p>



<figure class="wp-block-image size-large">
<img loading="lazy" width="1024" height="673" src="{{ site.baseurl }}/blogimages/2-Initialize-type-1024x673.png" alt="Setting initial values" class="wp-image-1814"/>
<figcaption>Setting initial values</figcaption>
</figure>



<p>So creating a type simplifies initiating objects of the same type. Are there any other advantages? Yes! Using the type becomes as easy as selecting its properties from the dropdown.</p>



<figure class="wp-block-image size-full">
<img loading="lazy" width="475" height="548" src="{{ site.baseurl }}/blogimages/3-Using-a-type.png" alt="Using a type" class="wp-image-1815"/>
<figcaption>Using a type</figcaption>
</figure>



<p>The next big advantage is the ease of maintenance. Should a property name of a type change, all references across the application are automatically updated &#8211; no need for further interaction from the builder and no more runtime bugs of manually typed references that were overlooked after changing a property name. Deleting a type is just as easy with validations informing you of all the locations in the application where that deleted type was used.&nbsp;</p>



<p>Finally&#8230; is this all there is to Types? No, not by a long shot! This is only the start and from here you will see how tightly integrated Types will become throughout the Stadium Designer. A change that will soon be coming through is the Object Editor (as mentioned before), thereafter a Web Service result type simplifying working with the result even further. We might even go as far as allowing you to drag a type onto a page and then automatically generate a form based on the type properties. Keep your eyes peeled for improvements on Types that will regularly be rolled out.</p>