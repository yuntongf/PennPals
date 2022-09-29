# PennPals 

## Description
Deployed on www.pennpals.app, PennPals is platform for Penn students to talk about anything🗣. The main page includes a NavBar and a message board with all the posts, where users can like, downvote and delete. Clicking on each message can lead to a reply page. Users can post comments and like or downvote replies. The Compose section allows users to create their own posts. To use the app, please go to https://penn-pals.herokuapp.com/MessageBoard.

## Motivation
In the past year as a freshman, I saw many of my friends at college struggle with life issues like finding good class recommendation, navigating campus resources, selling and buying second-hand goods, finding sublets for summer, etc. More importanly, many are fighting the battle of mental illness on their own. College can be hard. Hopefully having a supportive community to be there will make it easier❤️. 

the message board is anonynous because I believe true heart-reaching communications can happen without the presence of real names, and people are generally more willing to be open to share thoughts under anonymity. However, I'm fully aware that having anonymity in place magnifies both sides of the human nature, which is why I set up mechanisms such as downvote and admin delete to hopefully maintain a supportive and friendly environment.

## Tools I used

Built backend with Node.js, database with MongoDB and Mongoose, frontend with React and Bootstrap; deployed with Heroku.

## Improvements and bug fixes to be implemented

1. Enable user authentication and athorization; give only admin the ability to delete posts

2. Keep track of Likes for users so when they refresh the page they cannot like again the post they have liked earlier. 

3. Error logging

4. Implement the "Categories", "Liked", and search bar feature for NavBar.

