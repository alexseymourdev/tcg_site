---
title: Post for employers
meta_title: Post for employers
meta_description: Post for employers
time: 5 mnins
author: Helen
avatar: ../images/team/helen.jpeg
featured_image: /images/blog/interviews2.jpg
excerpt: Post for employers
date: 2020-12-16T06:51:27.586Z
tags:
  - Digital Skills
  - blog
---
## Intro


## Enquiry form
<div class="overflow-hidden md:max-w-xs md:mx-auto">
  <div>
    <h2 class="leading-3xl text-2xl">Send us a message</h2>
  </div>
  <form  method="POST" action="https://formspree.io/f/mknqeplz" id="contact-form" class="relative">
    <div class="required-pop-up absolute text-red-100 w-full text-xs leading-xs text-right mb-2 hidden">*Required</div>
    <div>
      <div class="mb-4">
        <label for="full_name" class="sr-only">Name</label>
        <div class="relative">
          <input id="name" name="name" type="text" class="form-input-field rounded block w-full py-2 px-3 border-1 placeholder-black required" placeholder="Your Name*" maxlength="50" data-regex="^[a-zA-Z ]+$" data-valid="false" required/>
          <span class="form-error text-xs leading-xs text-red-100" data-message="Only alphabetical values are allowed" aria-hidden="true" role="alert"></span>
        </div>
      </div>
      <div class="mb-4">
        <label for="org" >Organisation</label>
        <div class="relative">
          <input id="org" name="org" type="text" class="form-input-field rounded block w-full py-2 px-3 border-1 placeholder-black required" placeholder="Organisation Name*" maxlength="80" />
        </div>
      </div>
      <div class="mb-4">
        <label for="email" class="sr-only">Email</label>
        <div class="relative">
          <input name="_replyto" id="email" type="email" class="form-input-field rounded block w-full py-2 px-3 border-1 placeholder-black required" placeholder="Email*" maxlength="50" data-regex="\S+@\S+\.\S+" data-valid="false" required />
          <span class="form-error text-xs leading-xs text-red-100" data-message="Please check if provided email is correct" aria-hidden="true" role="alert"></span>
        </div>
      </div>
      <div class="mb-4">
        <label for="phone" class="sr-only">Phone</label>
        <div class="relative">
          <input id="phone" class="form-input-field rounded block w-full py-2 px-3 border-1 placeholder-black" maxlength="14" placeholder="Phone" data-valid="false" data-regex="^[+0-9]+$"/>
          <span class="form-error text-xs leading-xs text-red-100" data-message="Only numeric values are allowed" aria-hidden="true" role="alert"></span>
        </div>
      </div>
    <div>
      <button type="submit" id="submit" class="contact-btn rounded font-heading font-bold w-full block py-2 px-6 border border-transparent text-white bg-blue-200 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-100 transition duration-150 ease-in-out" disabled>
        Submit
      </button>
    </div>
  </form>
</div>