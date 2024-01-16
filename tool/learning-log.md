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

<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
