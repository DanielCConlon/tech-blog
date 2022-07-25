const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Risus sed vulputate odio ut enim blandit volutpat maecenas. Viverra maecenas accumsan lacus vel facilisis volutpat est velit.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Diam maecenas sed enim ut sem viverra. Libero id faucibus nisl tincidunt eget nullam non. Penatibus et magnis dis parturient montes nascetur ridiculus. Congue quisque egestas diam in arcu. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Pharetra convallis posuere morbi leo urna molestie at.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'Euismod nisi porta lorem mollis aliquam ut porttitor leo. Mollis aliquam ut porttitor leo a diam sollicitudin. Auctor eu augue ut lectus arcu bibendum. Sem et tortor consequat id porta nibh.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Integer vitae justo eget magna fermentum iaculis. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'In vitae turpis massa sed elementum tempus egestas. At quis risus sed vulputate odio ut enim blandit. ',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Semper risus in hendrerit gravida rutrum quisque non. ',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'Et tortor at risus viverra adipiscing at in tellus. ',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Imperdiet massa tincidunt nunc pulvinar. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'In metus vulputate eu scelerisque felis imperdiet proin fermentum. Mi bibendum neque egestas congue.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'Feugiat nisl pretium fusce id. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'Egestas congue quisque egestas diam in arcu cursus euismod. Tempor nec feugiat nisl pretium fusce id velit.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Aliquam vestibulum morbi blandit cursus.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: 'Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Integer vitae justo eget magna fermentum iaculis. Sapien pellentesque habitant morbi tristique.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'Semper risus in hendrerit gravida rutrum quisque non.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Nec ultrices dui sapien eget mi.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Aliquam sem et tortor consequat id porta nibh venenatis.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
