# JS Task List

Run `json-server db.json` in a terminal.

This creates a RESTful API at `http://localhost:3000/tasks`.

## Step 1

In `index.js`, make a request to the API to retrieve all the tasks.

Each task is an object with this structure:

```json
{
  "id": 3,
  "text": "Learn Javascript",
  "priority": 1,
  "completed": true
}
```

Render them into `div#tasks`. Each tasks should have this HTML structure:

```html
<div>
  Learn Javascript
  <span>HIGH</span>
</div>
```

The task `div` should also have the class `completed` if the task is completed.

## Step 2

When the form is submitted, `POST` the data to the API. Remember to stop the page from reloading and clear the form after the task has been sent to the API.

Once you recieve the response from the API, render that new task into the page.

## Step 3

When a task is clicked, send a request to update the task to toggle it's completed status from `true` to `false` and vice versa.
