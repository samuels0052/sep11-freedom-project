# Tool Learning Log

Tool: **Firebase**

Project: **Grading App**

---

10/29/23:
* Firebase stores data in a JSON structure
* Data is more secure when the file tree is flat and not nested
* Need to set imports as const variables and use require for firebase to work
* You need to create realtime database and an app within project for things to work
* You need to create a reference to make a structure for database


11/19/23:
* You can use firebase to login with username and password, or with a google account using built in `auth` module
* https://youtu.be/9bXhf_TELP4?si=CKlD8dSdjkFUh6wN
* You can change react routes based on the `auth` state in firebase
* https://youtu.be/PKwu15ldZ7k?si=_GW-RKQ96np13LlQ
* I followed along to the video above and modified the content displayed when the user is logged in
* I am going to next try making a full stack app with firebase and react to use what I have learned

12/03/23:
* Watched this [video](https://youtu.be/dx_gkSb-Ch0?si=aesM9zS1EsZ2fAvO) on firebase rules
* if `.read` rule is false you can't access the database
* if `.write` rule is false you can read data but can't modify
* can have child rules where the read and write information is different depending on the user
* you can use `.uid` to have more secure rules
```json
{
    "rules": {
        "users": {
            "$user": {
                "read": '$user == "Bob"'
            }
        }
    }
}
```

12/10/23:
* Learned about structuring data using child nodes
* Organize and structure data by nesting objects inside other objects
* You can use `.ref('name of parent node')` to get all the child nodes
* You can use `.child('name of child node')` to get specific node
* Went over previous concepts to better understand what I learned

12/17/23:
* You can prevent users from going to specific routes by using Route Protection
* Made a test website where you have to login to get access to a page by following a tutorial
* https://youtu.be/PngrpszT3aY?si=Q2iPQ5u2uB3dUY-N
```js
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children, user}) => {
    console.log(user);
    return user ? children : <Navigate to="/private"></Navigate>;
};

```

1/07/24:
* Learned about setting up backup buckets
* Created backups for test projects
* You can use a single command to backup database using `gcloud beta firestore export gs://[name]`
* https://www.youtube.com/watch?v=iWEgpdVSZyg

1/14/24:
* I watched a tutorial on firebase authentication
* I followed along by changing the variables and modifying the HTML in react
* I learned more about firebase authentication and also how to allow password resets
* I learned more about how to hide elements unless a condition is reached
* https://youtu.be/PKwu15ldZ7k?si=sE5aNEtIQedHkwOK
`{currentUser && currentUser.email}`

2/05/24:
* Learned about react Effect Hook
* https://legacy.reactjs.org/docs/hooks-effect.html
* Allows you to create code that updates without having to reload the whole page and perserves the content
```js
const [count, setCount] = useState(0);
```

2/10/24:
* https://youtu.be/-yrnWnN0g9o?si=ddG97tL_p3syFVKf
* Learned that need to establish connection and then use react's *useEffect()* to check for firebase changes
* *collectionRef* is what allows you to check for specific collection or table of database
* I am next going to create a small full stack app as a reference tool for main project

3/4/24:
* I have been learning flexbox to help with the visual design of project
* `display: flex` activates flexbox
* `flex-direction` determines the direction elements are going to be aligned to, either vertically or horizontally
* If you want things to adjust when screen gets too small you can use `flex-wrap` so elements are responsive
* You use `justify-content` for main axis and `align-items` for cross axis
* You can put a space between elements using `gap` property
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties
* https://www.youtube.com/watch?v=3YW65K6LcIA
```css
.about .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5rem 2rem 5rem 2rem;
    gap: 3rem;
}
```

3/10/24:
* You can use Discord Webhooks in support forms to avoid using email services
* Discord Webhooks allow you to send messages to a specific channel in a discord Server
* You can send using a post request in the form of a JSON body structure
* You can ping a user in the format of `<@{User ID}>` for example `<@503673006766161930>`
* https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html
```js
function handleSubmit(event) {
    event.preventDefault();
    let rawName = document.querySelector('#sf-name').value;
    let rawEmail = document.querySelector('#sf-email').value;
    let rawSubject = document.querySelector('#sf-subject').value;
    let rawMessage = document.querySelector('#sf-message').value;

    if(rawMessage.length < 4096) {
        const url = "https://discord.com/api/webhooks/1234567890/dh29s81a028sj32sxa"

        const data = {
            "content": "<@503673006766161930>",
            "embeds": [{
                "title": "New Ticket!",
                "description": rawMessage,
                "color": 11590065,
                "fields": [
                    {
                        "name": "Name:",
                        "value": rawName,
                        "inline": false
                    },
                ],
            }]
        }

        const options = {
            "method": 'POST',
            "headers": {
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify(data)
        }

        fetch(url, options)
        alert("Your message has been sent!")
    } else {
        alert("Your message is too long! Must be under 4096 characters!")
    }
    document.querySelector('form').reset();
}
```

<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
