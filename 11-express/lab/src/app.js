import express from 'express';
import calendarRouter from './routes/calendar.js';

const app = express();

app.use(express.json());

app.use(calendarRouter);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  },
};
