# Task Tracker App

A modern, feature-rich task management application built with React. Track your daily tasks with an intuitive interface, complete with filtering, local storage persistence, and a professional design.

## Features

- ✅ **Add Tasks** - Quickly add new tasks with Enter key support
- ✅ **Mark Complete** - Check off completed tasks with visual feedback
- ✅ **Delete Tasks** - Remove tasks you no longer need
- ✅ **Filter System** - View All, Active, or Completed tasks
- ✅ **Local Storage** - Tasks persist across browser sessions
- ✅ **Unique IDs** - Each task has a unique identifier for reliable tracking
- ✅ **Clean Component Structure** - Modular, maintainable code architecture
- ✅ **Professional UI** - Modern gradient design with smooth animations

## Tech Stack

- **React** - UI library with Hooks (useState, useEffect)
- **CSS3** - Custom styling with gradients, transitions, and flexbox
- **LocalStorage API** - Client-side data persistence

## Project Structure

```
task-app/
├── src/
│   ├── components/
│   │   ├── TaskInput.js      # Input field and Add button
│   │   ├── FilterButtons.js  # Filter controls (All/Active/Completed)
│   │   ├── TaskList.js       # Task list container
│   │   └── TaskItem.js       # Individual task item
│   ├── App.js                # Main component with state management
│   ├── App.css               # Professional styling
│   └── index.js              # Entry point
├── public/
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd task-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Adding Tasks
- Type your task in the input field
- Press **Enter** or click the **Add** button

### Completing Tasks
- Click the checkbox next to a task to mark it as complete
- Completed tasks show with a strikethrough and gray color

### Filtering Tasks
- **All** - Shows all tasks
- **Active** - Shows only incomplete tasks
- **Completed** - Shows only completed tasks

### Deleting Tasks
- Click the **Delete** button on any task to remove it

## Key Implementation Details

### Unique ID System
Each task uses `Date.now()` for unique identification instead of array indices, ensuring reliable deletion and updates.

### LocalStorage Persistence
- Tasks automatically save to browser storage on every change
- Data persists across page refreshes and browser sessions
- Uses `JSON.stringify()` and `JSON.parse()` for data conversion

### Component Architecture
- **App.js** - Manages state and business logic
- **TaskInput** - Handles user input
- **FilterButtons** - Controls task filtering
- **TaskList** - Renders list of tasks
- **TaskItem** - Displays individual task with actions

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

## Future Enhancements

- Edit task functionality
- Task categories/tags
- Due dates and reminders
- Dark mode toggle
- Task search functionality
- Export/Import tasks

## License

This project is open source and available under the MIT License.

## Author

Built with ❤️ using React
