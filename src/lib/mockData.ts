export default [
  {
    genre: 'Action',
    grade: 'D+',
    title: 'Incredibles 2 (1 sec, 10 sec)',
    totalTime: 50000,
    notifications: [
      {
        description: 'Heavy flashing (1 sec)',
        endTime: 1200,
        startTime: 1000, // 1 sec
        title: 'Flashing for 30 seconds',
      },
      {
        description: 'Heavy flashing (10 sec)',
        endTime: 11000,
        startTime: 10000, // 10 sec
        title: 'Crazy stuff here',
      },
    ],
  },
  {
    genre: 'Drama',
    grade: 'A-',
    title: 'Princess Bride (1 min, 10 min)',
    totalTime: 100000,
    notifications: [
      {
        description: 'Heavy flashing (1 min)',
        endTime: 9100,
        startTime: 60000, // 1 min
        title: 'Light flashing',
      },
      {
        description: 'Heavy flashing (10 mins)',
        endTime: 9100,
        startTime: 600000, // 10 mins
        title: 'Light flashing',
      },
    ],
  },
  {
    genre: 'Sci-Fi',
    grade: 'F',
    title: 'Star Wars Rise of Skywalker(1 hr, 2hr)',
    totalTime: 3000,
    notifications: [
      {
        description: 'Heavy flashing (1 hr)',
        endTime: 500,
        startTime: 3600000, // 1 hour
        title: 'Stuff happens',
      },
      {
        description: 'Heavy flashing (2 hr)',
        endTime: 500,
        startTime: 7200000, // 2 hour
        title: 'Stuff happens',
      },
    ],
  },
];
