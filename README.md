# Wesley's Website README

This website was built on [React.js](https://reactjs.org/) - React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

First, let's talk about just getting into the code.

## Prerequisites

---

- Download [Visual Studio Code](https://code.visualstudio.com/)
- Download [NodeJS](https://nodejs.org/en/)
- Download [GitBash](https://git-scm.com/downloads)
- Create a new folder wherever you like on your computer.
- Clone your repository from Github to that new folder.
- Use `git pull` to make sure you have all the latest changes.
- Right click on the folder you just created and select `Git Bash Here`. That will scope you correctly.
- Run the command `Code .` in your bash window. This will open up VSCode, scoped correctly.

Congrats! You now have your code displayed in front of you, ready to be worked on.

Now while in the code editor, feel free to close out of your bash window. Next, press `ctrl + ~` to open another bash window in your text editor.

Use the command `npm install` to get all of your dependencies installed locally. Without this, your project will not run.

## Starting and Stopping the Server

In your new console window use the command `npm start`. This will spin up your solution on port 3000. Open a browser and navigate to `localhost:3000` and see your site running in all it's glory.

To stop the server and allow you to enter more commands, press `ctrl + c` in the terminal window.

## Quick Overview of the Project

---

Now on to the fun stuff, creating your own content that will instantly be served to your website.

- In your solution explorer (the left panel showing files in VSCode) you'll be able to see a folder called `content`.
- Next open the folder called `posts`. Here is where you'll be working mostly.
- Create a new folder with the same naming convention as the others (YYYY-MM-DD--slug). This is VERY IMPORTANT.
- Inside that folder you'll create a file called `index.md`. This is where the actual content goes.
- You'll also want to put any images in this folder. You MUST have at least one image that will be the cover image.
- THE COVER PHOTO MUST BE PREFIXED WITH `photo-`

## Adding Content

---

At the very top of each post you'll need this block of code, formatted accordingly.

```
---
title: A Facebook Invitation
category: "event"
cover: photo-Event-0003_hdip.jpg
author: Caleb Woods
---
```

- `title:` will be the title of the post.
- `category:` is used for filtering posts by a specific type (post, event, video, etc).
- `cover:` this sets your cover photo.
- `author:` is not needed currently, but provide it anyway or it will break queries.

After that it's all markdown. Here is a [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/) just in case. Look at pre-existing posts to see how to easily inline images in your posts.

Your posts will automatically get the share option at the bottom, as well as the forward and backwords functionality.

After you've finished writing your beautfiul post, make sure to save all your files. Then, in your console window, type the command `git status`. This should show you that you've only added/modified certain files. Once you're satisfied that you didn't accidentally delete your `index.js` file type the command `git add .` followed by `git commit -m "I just added an article"` followed by `git push`.

Just like that your code has been fired up into GitHub, picked up by Netlify, and on its way to deployment.

## Content Meta

---

Under `content/meta/config.js` is where you'll set all the metadata for your site. I've got everything in there already, but make sure to check it out for accuracy.

## Website Development

---

**[YOU PROBABLY SHOULDN'T BE HERE](https://imgur.com/EtRu4BS)**

If you're still reading, proceed at your own risk.

You're going to want to grab a cup of coffee and head over the the `src` folder. Inside you'll find more folders. Let's take a peek into `components`.

- Each of these are small pieces of the site. For example `Hero` contains all the workings of our Hero Image.
- `FeaturedBook.js` contains the featured book section, and so on.
- Gatsby.js is built on React. So if you understand React and GraphQL, you can confidentaly work on this website.
- `Testimonials.js` might be a file that you alter depedning on if you want to prune some, or add new ones. There are comments on the code to copy and alter. You'll be able to see your changes immediatly while `gatsby develop` is running.
- `CalebFooter.js` might be another file you mess with, it should be relatively safe and I've added comments to help guide you.

If you're attempting some bigger architecture changes you'll want to make your way over to `src/pages/index.js` - In here you can see where I'm using certain components and having them rendered in a specific order.
