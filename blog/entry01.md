# Entry 1
##### 11/12/23

### Content:

The tool I have chosen is [Firebase](https://firebase.google.com/) because it allows me to create real-time databases, includes built-in user authentication methods, and can easily be combined with [React JS](https://react.dev/). I will use this tool combined with `React JS` to create a grading app with [Zi Xuan Yu](https://github.com/zixuany7791), and [Benjamin Chau](https://github.com/benjaminc8190).

Although the official tool I am learning is `Firebase`, it is equally important that I am experienced with `React JS`. I have been learning `React JS` throughout the summer to get more proficient in Javascript and to be prepared for this school year. One of my projects has been my [portfolio](https://samuelsharivker.com/), which allowed me to learn [routing](https://www.youtube.com/watch?v=TWz4TjSssbg), and component structures, which I still use today. I tinkered with `React` by creating components to use the same code in multiple different places and learned how to host websites on [CloudFlare Pages](https://www.cloudflare.com/). While working on the `JS Project`, I made a pig Latin translator using `React` and had to learn the [state](https://legacy.reactjs.org/docs/hooks-state.html) hook to have real-time changes in my form.

```js
const [eText, setEText] = useState('');
const [pLText, setPLText] = useState('');
```

To learn `firebase` I have been watching several [videos](https://www.youtube.com/watch?v=pP7quzFmWBY&t=527s) on the basics, including how to set up a project and implement the database in a `React` project. Here I learned that you write data to the database in a `JSON` form, which was easy for me to understand because I have used `objects` for months. I followed along with the video and tinkered with my tool by changing the data I sent to the database and the rules.

```js
function writeData(joke, punchline) {
    const db = getDatabase();
    const reference = ref(db, 'jokes/' + joke);

    set(reference, {
        punchline: punchline
    })
}

writeData("What did the Penguin steal from the dental lab?", "A flipper!")
```

I also followed this [tutorial](https://www.youtube.com/watch?v=0gLr-pBIPhI) to create a basic local chat app. I tinkered with the code by modifying the format of messages being sent and the styling of the application. This tutorial was also my first time combining `firebase` and `React`, which taught me that I don't need to create a dedicated backend server, which is nice. I also learned how to combine different react components together and send information between components.

```js
function Message({message}) {
    const rawDate = message.timestamp?.seconds || 0;
    const formattedDate = new Date(rawDate * 1000).toLocaleString();

    return (
        <div className="mt-3 mb-3 pt-3 pb-3 ps-3 pe-3" id="chat-message">
            <h5><img src={message.pfp} class="img-fluid" id="msg-pfp" /> {message.name}</h5>
            <p>{message.text}</p>
            <small>{formattedDate}</small>
        </div>
    );
}
```

### EDP:
I am currently in stages **1 and 2** of the engineering design process. I have defined the problem with my group members which is , **errors and bad features in modern grading apps**. We are researching what we like and dislike in grading apps, such as **Sync Grades**. We will continue to figure out what works and doesn't work to create the best app possible.

### Skill:

I have grown in the skills of **debugging** and **embracing failure** by working on this project. I have improved my debugging skills by helping out my classmates in class whenever they have issues with their code or are unable to complete a specific task. For example, while working on our **JS Project** I helped out the people near me by fixing syntax errors, explaining concepts, and refactoring code. I have gotten better at embracing failure because, while working on my **JS Project** I had to accept and overcome the fustraction of the **Google Photos API**. In addition, while working on my backup project, a **Pig Latin Translator**, I had several issues using the `useState` hook, so I had to read more documentation to fix my errors.

[Next](entry02.md)

[Home](../README.md)
