## **Main Page**

### NextAuth

- We are using `CredentialsProvider` and `GoogleProvider`
- For `CredentialsProvider`, we are comparing the email and password.
- Session strategy we are using JWT tokens.

## **Movie**

### Session Checking

- Calls `getServerSideProps` to check for user session. Else, redirect them to userpage.

### useEffect

- Makes a post Request to the User table if the user is not yet added to the database(login through google authentication)

### **Billboard**

- We first fetch data from this `useMovieList` hook.
- We set a timer on `useEffect` to ensure that the description is no longer displayed after 5 seconds.

#### useMovieList

- Uses `useSWR` React hook to fetch data from the backend.
- `SWR`(stale-while-revalidate) is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.

### **MovieList**

- Accepts **Data** as props from the `Movie` parent, and maps the data as `MovieCard`

### **MovieCard**

- Retrieves User Session from NextAuth and executes post request add a favourite movie using user `email`

### HelpPanel

Ui of the Chat Panel.

### Box

Ui of the buttons to connect.

## Admin Page

Page that allows admin to handle client Help Requests

#### On Page Render: `useEffect`

- Create an Agora instance.
- Establish connection to AgoraRTM channel(Default channel and GoodBye channel).
- Listen to the Default channel as well as the GoodBye channel in order to invalidate the HelpRequest after each creation/deletion of HelpRequest.

#### Clicking Help Request: `handleHelpRequestClicked`

- Leave any previous channel it was connected to.
- Establish connection to AgoraRTM channel(HelpRequestId).
- Listen on channel for incoming messages.
- Upon receiving an incoming Message, it will update its local state.

#### Sending Message: `handleSendMessage`

- Execute Post Request of message to database.
- Sends a message via the channel.

## **Database**

Stored in a NO-SQL database

### User

- Contains fields such as `username`, `email`, `hashedPassword` and `FavouriteIds`(To link a user and his favourite movies).

### Movie

- Contains `title`, `description`, `videoUrl`, `thumbnailUrl`, `genre` and `duration`.
