export type DashItem = {
  link: string;
  name: string;
};

export const itemsDash: DashItem[] = [
  {
    link: '/dashboard/list/',
    name: 'List of Events',
  },
  {
    link: '/dashboard/attendee/',
    name: 'Attendee Registrations',
  },
  {
    link: '/dashboard/transaction/',
    name: 'Transactions',
  },
  {
    link: '/dashboard/statistic/',
    name: 'Event Statistics',
  },
];
