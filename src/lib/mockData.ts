export default [
  {
    id: 'Mando',
    title: 'Mando',
    startDescription: `Press "Start" when "LucasFilm" appears on screen.`,
    endTime: 2450000,
    notifications: [
      {
        description: 'Light flashing for about 2 seconds',
        fireTime: 53000,
        title: 'Light flashing',
      },
      {
        description: 'Light flashing for about 2 seconds',
        fireTime: 1614000,
        title: 'Light flashing',
      },
    ],
  },
  {
    id: 'Incredibles 2 (1 sec, 10 sec)',
    genre: 'Action',
    grade: 'D+',
    title: 'Incredibles 2 (1 sec, 10 sec)',
    endTime: 60000, // 1 min
    notifications: [
      {
        description: 'Heavy flashing (1 sec)',
        fireTime: 1000, // 1 sec
        title: 'Flashing for 30 seconds',
      },
      {
        description: 'Heavy flashing (10 sec)',
        fireTime: 10000, // 10 sec
        title: 'Crazy stuff here',
      },
    ],
  },
  {
    id: 'Princess Bride (1 min, 10 min)',
    genre: 'Drama',
    grade: 'A-',
    title: 'Princess Bride (1 min, 10 min)',
    endTime: 1020000, // 17 min
    notifications: [
      {
        description: 'Heavy flashing (1 min)',
        fireTime: 60000, // 1 min
        title: 'Light flashing',
      },
      {
        description: 'Heavy flashing (10 mins)',
        fireTime: 600000, // 10 mins
        title: 'Light flashing',
      },
    ],
  },
  {
    id: 'Star Wars Rise of Skywalker(1 hr, 2hr)',
    genre: 'Sci-Fi',
    grade: 'F',
    title: 'Star Wars Rise of Skywalker(1 hr, 2hr)',
    endTime: 9000000, // 2.5 hr
    notifications: [
      {
        description: 'Heavy flashing (1 hr)',
        fireTime: 3600000, // 1 hour
        title: 'Stuff happens',
      },
      {
        description: 'Heavy flashing (2 hr)',
        fireTime: 7200000, // 2 hour
        title: 'Stuff happens',
      },
    ],
  },
];
