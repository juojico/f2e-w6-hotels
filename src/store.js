import { writable, readable } from 'svelte/store';

export const onHome = writable(true);
export const onPage = writable(true);
export const rooms = writable([]);

<<<<<<< HEAD
export const rooms = readable(MOCK_ROOMS);

export const bgImgs = readable(BG_IMGS);
=======
export const MOCK_ROOMS = readable([
  {
    imageUrl:'img/room1/photo-1515511856280-7b23f68d2996.jpeg',
    name: '房間一',
    id: 13213213132,
    normalDayPrice: 1699,
    holidayPrice: 2000
  },
  {
    imageUrl:'img/room2/photo-1558211583-03ed8a0b3d5f.jpeg',
    name: '房間二',
    id: 35370768753,
    normalDayPrice: 1899,
    holidayPrice: 2200
  },
  {
    imageUrl:'img/room3/photo-1501127122-f385ca6ddd9d.jpeg',
    name: '房間三',
    id: 75070350753,
    normalDayPrice: 2800,
    holidayPrice: 3100
  },
  {
    imageUrl:'img/room4/photo-1519710164239-da123dc03ef4.jpeg',
    name: '房間四',
    id: 3453707563,
    normalDayPrice: 2900,
    holidayPrice: 3200
  },
  {
    imageUrl:'img/room5/photo-1558976825-6b1b03a03719.jpeg',
    name: '房間五',
    id: 755354530753,
    normalDayPrice: 3500,
    holidayPrice: 3900
  },
  {
    imageUrl:'img/room6/photo-1552902019-a6dddd56544a.jpeg',
    name: '房間六',
    id: 123457807756,
    normalDayPrice: 4000,
    holidayPrice: 4500
  }
]);

export const BG_IMGS = readable([
  'img/house/photo-1549490148-d7304e934d25.jpeg',
  'img/house/photo-1551516594-56cb78394645.jpeg',
  'img/house/photo-1507149833265-60c372daea22.jpeg',
  'img/house/photo-1523217582562-09d0def993a6.jpeg'
]);
>>>>>>> 27ea41bcf41a5ae647c155912d4a50eee91b29a7
