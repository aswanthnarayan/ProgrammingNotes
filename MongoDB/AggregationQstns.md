**refer the previous document for inserted document**

### Count the number of active users:

1. How many users have isActive set to true?

ans:

```js
db.persons.aggregate([
  { $match: { isActive: true } },
  { $count: "Total Active Users" },
]);
```

### Group users by gender and count them:

2. What is the total number of male and female users?

ans:

```js
db.persons.aggregate([
  {
    $group: {
      _id: "$gender", // Groups documents by the "gender" field
      noOfUsers: { $sum: 1 }, // Counts the number of documents in each group
    },
  },
]);
```

### Find the average age of users by gender:

3. What is the average age of male and female users?

ans:

```js
db.persons.aggregate([
  {
    $group: {
      _id: "$gender", // Groups documents by the "gender" field
      averageAge: { $avg: "$age" }, // Calculates the average age for each group
    },
  },
]);
```

### Find the most common favorite fruit among users:

4. What is the most frequently mentioned favoriteFruit?

ans:

```js
db.persons.aggregate([
  {
    $group: {
      _id: "$favoriteFruit", // Groups documents by the "favoriteFruit" field
      count: { $sum: 1 }, // Counts the number of documents for each group
    },
  },
  { $sort: { count: -1 } }, // Sorts the results in descending order by count
  { $limit: 1 }, // Limits the output to the top 1 result
]);
```

### Find the count of users for each eyeColor:

5. How many users have each type of eyeColor?

ans:

```js
db.persons.aggregate([
  {
    $group: {
      _id: "$eyeColor", // Groups documents by the "eyeColor" field
      count: { $sum: 1 }, // Counts the number of documents in each group
    },
  },
]);
```

### Group by country and count users:

6. How many users are there in each country based on the company.location.country?

ans:

```js
db.persons.aggregate([
  {
    $group: {
      _id: "$company.location.country", // Groups documents by the "country" field inside "company.location"
      count: { $sum: 1 }, // Counts the number of documents in each group
    },
  },
]);
```

### Get the earliest and latest registered users:

7. Who are the earliest and latest registered users based on the registered field?

ans:

#### Finding the Latest Registered User

```js
db.persons.aggregate([
  { $sort: { registered: -1 } }, // Sorts documents by the "registered" field in descending order (most recent first)
  { $limit: 1 }, // Limits the output to the top 1 document, which is the latest registered user
]);
```

#### Finding the Earliest Registered User

```js
db.persons.aggregate([
  { $sort: { registered: -1 } }, // Sorts documents by the "registered" field in descending order (most recent first)
  { $limit: 1 }, // Limits the output to the top 1 document, which is the latest registered user
]);
```

**also can done using**

```js
db.persons.aggregate([
  {
    $facet: {
      latestRegistered: [
        { $sort: { registered: -1 } }, // Sort by registered date in descending order
        { $limit: 1 }, // Limit to the most recent document
      ],
      earliestRegistered: [
        { $sort: { registered: 1 } }, // Sort by registered date in ascending order
        { $limit: 1 }, // Limit to the earliest document
      ],
    },
  },
]);
```

### Calculate the average age of users per country:

8. What is the average age of users grouped by their company.location.country?

ans:

```js
db.persons.aggregate([
  {
    $group: {
      _id: "$company.location.country", // Groups documents by the "country" field inside "company.location"
      averageAge: { $avg: "$age" }, // Calculates the average age for each group
    },
  },
]);
```

### Find users registered after a specific date:

9. How many users were registered after '2020-01-01'?

### Get a list of all unique tags:

10. What are all the unique tags used across all users?

**Using distinct**

```js
db.persons.distinct("tags");
```

**_Using aggregation_**

```js
db.persons.aggregate([
  { $unwind: "$tags" }, // Deconstructs the "tags" array, creating a separate document for each tag
  { $group: { _id: "$tags" } }, // Groups the documents by each unique "tag"
]);
```

### Count users having a specific tag:

11. How many users have the tag "culpa"?

```js
db.persons.aggregate([
  { $match: { tags: "culpa" } }, // Filters documents where the "tags" array contains the value "culpa"
]);
```

### Sort users by their age:

12. Get a sorted list of users in descending order of age.

### Find users having specific tags:

13. Find all users having both 'eiusmod' and 'culpa' tags.

ans:

```js
db.persons.aggregate([{ $match: { tags: { $all: ["id", "ad"] } } }]);
```

**or**

```js
db.persons.find({ tags: { $all: ["culpa", "eiusmod"] } });
```

### Group users by age range and count them:

14. How many users fall into age groups like 20-29 etc.?

```js
db.persons.aggregate([
  { $match: { $and: [{ age: { $gte: 20 }, age: { $lte: 29 } }] } },
  { $count: "People with age between 20 and 29" },
]);
```

**without aggregation**

```js
db.persons.find({ $and: [{ age: { $gte: 20 }, age: { $lte: 29 } }] }).count();
```

### Calculate the average number of tags per user:

15. What is the average number of tags a user has?

### Find top 5 countries with the most users:

16. Which 5 countries have the most users?

ans:

```js
db.persons.aggregate([
  { $group: { _id: "$company.location.country", userCount: { $sum: 1 } } },
]);
```

### Calculate the distribution of users registration year:

17. How many users registered each year?

```js
db.persons.aggregate([
  {
    $group: {
      _id: { $year: { $dateFromString: { dateString: "$registered" } } }, // Extracts the year from the registered field
      count: { $sum: 1 }, // Counts the number of users registered each year
    },
  },
]);
```

### Find users with a specific domain in their email:

18. How many users have emails ending with '@artworlds.com'?

```js
db.persons.aggregate([
  {
    $match: {
      "company.email": { $regex: /@artworlds\.com$/, $options: "i" }, // Match emails ending with '@artworlds.com'
    },
  },
  {
    $count: "emailCount", // Count the number of matching documents
  },
]);
```

### Calculate the ratio of active to inactive users:

19. What is the ratio of active (isActive: true) to inactive users?

```js
db.persons.aggregate([
  {
    $facet: {
      activeUsers: [{ $match: { isActive: true } }, { $count: "count" }],
      inactiveUsers: [{ $match: { isActive: false } }, { $count: "count" }],
    },
  },
  {
    $project: {
      activeToInactiveRatio: {
        $cond: [
          { $eq: [{ $arrayElemAt: ["$inactiveUsers.count", 0] }, 0] },
          "Infinity",
          {
            $divide: [
              { $arrayElemAt: ["$activeUsers.count", 0] },
              { $arrayElemAt: ["$inactiveUsers.count", 0] },
            ],
          },
        ],
      },
    },
  },
]);
```

### Find the top 3 companies with the most users:

19. Which companies have the highest number of users associated with them?

```js
db.persons.aggregate([
  {
    $group: {
      _id: "$company.title", // Group by company title
      userCount: { $sum: 1 }, // Count the number of users per company
    },
  },
  {
    $sort: { userCount: -1 }, // Sort the results in descending order of user count
  },
  {
    $limit: 3, // Limit the results to the top 3 companies with the highest user count
  },
]);
```

### Get the age distribution of users by gender:

20. What is the age distribution (e.g., count by age range) for male and female users?

```js
db.persons.aggregate([
  {
    $bucket: {
      groupBy: "$age", // Field to group by
      boundaries: [0, 18, 35, 50, 100], // Define age ranges
      default: "Unknown", // Handle any ages outside the specified ranges
      output: {
        totalCount: { $sum: 1 }, // Count total users in each bucket
        maleCount: { $sum: { $cond: [{ $eq: ["$gender", "male"] }, 1, 0] } }, // Count male users in each age range
        femaleCount: {
          $sum: { $cond: [{ $eq: ["$gender", "female"] }, 1, 0] },
        }, // Count female users in each age range
      },
    },
  },
]);
```

### Find users with missing or null fields:

21. How many users have missing or null values for critical fields such as name, age, or company.email?

```js
db.persons.aggregate([
  {
    $match: {
      $or: [
        { name: { $in: [null, ""] } }, // Check for null or empty name
        { age: { $in: [null, ""] } }, // Check for null or empty age
        { "company.email": { $in: [null, ""] } }, // Check for null or empty company.email
      ],
    },
  },
  {
    $count: "missingFieldsCount", // Count the number of users with missing critical fields
  },
]);
```

### Find users with a specific country and favorite fruit:

22. How many users from 'Italy' have 'banana' as their favoriteFruit?

```js
db.persons.aggregate([
  {
    $match: {
      "company.location.country": "Italy", // Filter users from Italy
      favoriteFruit: "banana", // Filter users whose favorite fruit is banana
    },
  },
  {
    $count: "bananaLoversCount", // Count the number of users matching the criteria
  },
]);
```

### Find the maximum, minimum, and average age:

23. What is the maximum, minimum, and average age of all users?

```js
db.persons.aggregate([
  {
    $group: {
      _id: null, // We don't need to group by any specific field, so we set _id to null
      maxAge: { $max: "$age" }, // Calculate the maximum age
      minAge: { $min: "$age" }, // Calculate the minimum age
      avgAge: { $avg: "$age" }, // Calculate the average age
    },
  },
  {
    $project: {
      _id: 0, // Exclude the _id field from the result
      maxAge: 1,
      minAge: 1,
      avgAge: 1,
    },
  },
]);
```

### Top 5 tags by frequency:

24. What are the 5 most frequently used tags?

```js
db.persons.aggregate([
  {
    $unwind: "$tags", // Deconstructs the tags array into individual documents
  },
  {
    $group: {
      _id: "$tags", // Groups by each tag
      count: { $sum: 1 }, // Counts the occurrences of each tag
    },
  },
  {
    $sort: { count: -1 }, // Sorts the tags by their count in descending order
  },
  {
    $limit: 5, // Limits the result to the top 5 most frequent tags
  },
]);
```

### Users with the longest time since registration:

25. Who are the top 10 users with the longest time since they registered?

```js
db.persons.aggregate([
  {
    $sort: { registered: 1 }, // Sorts by registration date in ascending order
  },
  {
    $limit: 10, // Limits to the top 10 users
  },
]);
```

### Find users grouped by both favoriteFruit and eyeColor:

26. How many users prefer each combination of favoriteFruit and eyeColor?

```js
db.persons.aggregate([
  {
    $group: {
      _id: { favoriteFruit: "$favoriteFruit", eyeColor: "$eyeColor" }, // Group by both favoriteFruit and eyeColor
      count: { $sum: 1 }, // Count the number of users for each combination
    },
  },
  {
    $sort: { count: -1 }, // Optional: Sort the results by count in descending order
  },
]);
```
