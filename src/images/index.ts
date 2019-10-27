
const catImages = [
    require('./cats/Cat1.jpg'),
    require('./cats/Cat2.jpg'),
    require('./cats/Cat4.jpg'),
    require('./cats/Cat3.jpg'),
    require('./cats/Cat5.jpg'),
    require('./cats/Cat6.jpg'),
    require('./cats/Cat7.jpg'),
    require('./cats/Cat8.jpg'),
];

export const getAvatar = (id: number) => catImages[id % 8 + 1];