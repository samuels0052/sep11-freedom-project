# Entry 3
##### 02/11/24

### Content:
Because of all the challenging components of Firebase, I have decided to slow down and focus on just a few specific details at a time so that I can better learn this tool. My main focus has been on learning how to work with **inserting and reading** data in a Firebase real-time database.

To do this, I have been watching videos such as this [one](https://youtu.be/pP7quzFmWBY?si=bxqmcn_iWVsOl22Z) on how to manipulate data. I started off by learning how to structure my data in the most efficient way by using a **JSON** tree file structure with different reference points depending on the information. For example, if the data is talking about colors, I might have a **primary/** and a **secondary/** reference to keep things more organized and fast because there is less data to parse through. I have also learned about the **snapshot** method, which allows you to read a specific piece of information by looking at the reference provided as well as an ID. To learn more about snapshots, I read this [this](https://firebase.google.com/docs/reference/node/firebase.database.DataSnapshot) article. Here I learned you need to use the *value* function to read anything. I also learned that to handle lists of data you need to use the **.forEach()** method for snapshot.

```js
const a = firebase.database().ref();
a.once("value")
  .then(function(snapshot) {
    var key = snapshot.key;
    var childKey = snapshot.child("colors/primary").key;
  });
```

The next part of my tool that I plan on learning is [Cloud Functions](https://firebase.google.com/docs/functions) which allows you to create a backend for your application without a dedicated server. This will be very useful for my project because I won't have to worry about finding the machine to host code and how to sync things up when something updates or needs to be changed. This would also be useful because there is one less thing to maintain, which will allow my team to focus more on getting the website done instead of hardware and server maintenance, which can take a lot of time, especially if you miss configuring something. One less thing to mess up will be a huge time saver.

### EDP:
I am currently in stages **3 and 4** of the engineering design process. I have been researching templates on [Start Bootstrap](https://startbootstrap.com/) to design a layout for my application. I have been experimenting with different templates because I am not the best at designing, and I think it is more important for the application to be good-looking and usable than completely made by me. I have also continued to plan different features with my team to have the best possible project.

### Skill:
I have grown in the skills of **debugging** and **problem decomposition** because, over the past couple of weeks, I have been constantly helping my classmates when they face technological errors. I have had to get better at breaking down problems so I can quickly find and solve them, which has led to improvements in my **logical reasoning** skills. I think I have overall become a more useful and knowledgeable classmate who is better able to assist my peers. I have also developed my **debugging** skills because I recently purchased a [Raspberry Pi 5](https://www.raspberrypi.com/products/raspberry-pi-5/). I have constantly needed to figure out technical issues such as OS issues and fixing Docker containers. However, this has made me more knowledgeable about computer parts and how to deploy and dockerize my workload.

[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
