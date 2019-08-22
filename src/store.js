import { writable, readable } from 'svelte/store';

let BG_IMGS = ['img/house/photo-1549490148-d7304e934d25.jpeg','img/house/photo-1551516594-56cb78394645.jpeg','img/house/photo-1507149833265-60c372daea22.jpeg','img/house/photo-1523217582562-09d0def993a6.jpeg'];


const MOCK_ROOMS = [{imageUrl:'img/room1/photo-1515511856280-7b23f68d2996.jpeg'},{imageUrl:'img/room2/photo-1558211583-03ed8a0b3d5f.jpeg'},{imageUrl:'img/room3/photo-1501127122-f385ca6ddd9d.jpeg'},{imageUrl:'img/room4/photo-1519710164239-da123dc03ef4.jpeg'},{imageUrl:'img/room5/photo-1558976825-6b1b03a03719.jpeg'},{imageUrl:'img/room6/photo-1552902019-a6dddd56544a.jpeg'}]

export const onHome = writable(true);

export rooms = readable(MOCK_ROOMS);

export bgImgs = readable(BG_IMGS);
