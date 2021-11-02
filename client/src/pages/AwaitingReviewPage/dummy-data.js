import { format } from 'date-fns';

export const dummyData = [
  {
    date: format(new Date(2020, 7, 17), 'yyyy-MMMM-dd'),
    title: 'Arequipa general strike against forced labour',
    name: 'test article1',
    content:
      'In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it !!!TEST!!! In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it',
    id: '1',
  },
  {
    date: format(new Date(2021, 3, 3), 'yyyy-MMMM-dd'),
    name: 'test article2',
    title: 'Arequipa general strike against forced labour',
    content:
      'In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it !!!TEST!!! In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it',
    id: '2',
  },
  {
    name: 'test article3',
    date: format(new Date(1994, 3, 30), 'yyyy-MMMM-dd'),
    title: 'Arequipa general strike against forced labour',
    content:
      'In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it !!!TEST!!! In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it',
    id: '3',
  },
];
