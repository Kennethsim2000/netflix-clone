## **Main Page**

### NextAuth

- We are using `CredentialsProvider` and `GoogleProvider`
- For `CredentialsProvider`, we are comparing the email and password.
- Session strategy we are using JWT tokens.

## **Movie page**

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
- Upon clicking the review button, passes current movie prop to review modal.

### **ReviewModal**

- Makes a post request on the comments table.

## **Favourite Page**

- Calls the `serverAuth` props during getServerSideProp to retrieve the current user.
- Retrieve the `favouriteIds` of the current user.
- Using the favouriteIds of the currentUser, do a request to the `api/findFour` endpoint to retrieve four of the user's favourite movie.

### **MovieDetail**

- Receives a `Movie` as props and displays the Movie accordingly.

### **Pagination**

-

## **Comment Page**

## **Database**

Stored in a NO-SQL database

### User

- Contains fields such as `username`, `email`, `hashedPassword` and `FavouriteIds`(To link a user and his favourite movies).

### Movie

- Contains `title`, `description`, `videoUrl`, `thumbnailUrl`, `genre` and `duration`.
