# Micro Blog

## Important Notes

* Each time `TopPosts` is being asked, time check will be performed, if the last time `TopPosts` has been asked was X seconds ago, an update to `TopPosts` will occur.
* Storing large post documents (large votes array) can cause performance impact (consider preallocating)
* MongoDB operations are atomic

## Models

### Post

```
{
    content: String
    createdBy: <user_id>,
    createdOn: Date,
    upVotesCount: Number, `Index`
    upVotes: [
        {
            voteBy: <user_id>,
        }
    ],
    downVotesCounter: Number, `Index`
    downVotes: [
        {

        }
    ]
}
```

### User

```
{
    username: String,
}
```

## Performance

| Action                                        | DB       |
| :-------------------------------------------: | :------: |
| Access (Specially non index)                  | SQL      |
| Sorting                                       | SQL      |
| Complex Joins                                 | SQL      |
| Insertion                                     | MongoDB  |
| Simple queries (avoid joins)                  | MongoDB  |
| Insert nested element (avoid fk constraints)  | MongoDB  |
| Query nested element (avoid fk constraints)   | MongoDB  |