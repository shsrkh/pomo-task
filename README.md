# PomoTask

A **Pomodoro-based task tracker** built with React and TypeScript. Manage daily tasks, run focus timers with configurable work and break intervals, and review productivity statistics.

## Live demo
- 

## Screenshots
- Login page:

- Main page:

- Statistics page:

- Settings form:

## Tech stack

- **Language:** TypeScript  
- **UI:** React 18  
- **State:** Redux, Redux Thunk  
- **Routing:** React Router v6  
- **Styling:** CSS Modules, `classnames`  
- **Animations / transitions:** `react-transition-group`  
- **Tooling:** Create React App (`react-scripts`), ESLint  

## Features

- **Tasks:** add, edit, delete, and reorder tasks; estimate pomodoros per task; mark tasks complete.  
- **Timer:** start, pause, stop, skip, and extend sessions; supports work / short break / long break based on settings.  
- **Settings:** configurable durations (focus, breaks), long-break frequency, optional notifications (where implemented).  
- **Statistics:** weekly overview, charts, and metrics such as focus ratio, pause time, and stops.  
- **Auth flow:** simple client-side flow to access the app (see codebase for details).  
- **Persistence:** application state persisted locally (see `useLoadLocal` and related store logic).

## Project structure
- src/App.tsx — router, page transitions, Redux Provider
- src/store/ — reducers, actions, async logic
- src/shared/pages/ — main screens (auth, pomodoro, statistics)
- src/shared/components/ — reusable UI
- src/hooks/ — custom React hooks

## Getting started

**Requirements:** Node.js and npm (npm ≥ 6.14 recommended).

```bash
npm install
npm start          # development server (http://localhost:3000)
npm run build      # production build in /build
npm test           # run tests