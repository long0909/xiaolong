export default {
  queryRouteList: '/routes',

  queryUserInfo: '/user',
  logoutUser: '/user/logout',
  loginUser: 'POST /user/login',

  queryUser: '/user/:id',
  queryUserList: '/users',
  updateUser: 'Patch /user/:id',
  createUser: 'POST /user',
  removeUser: 'DELETE /user/:id',
  removeUserList: 'POST /users/delete',
  queryPostList: '/posts',
  queryDashboard: '/dashboard',
  

  LoginHandler:'/user/login',
  RegisterHandler:'/user/register',
  FarmAddHandler:'/farm/add',
  FarmDeleteHandler:'/farm/delete',
  FarmListHandler:'/farm/update',
  FarmUpdateHandler:'/farm/list',
  FeedAddHandler:'/feed/add',
  FeedDeleteHandler:'/feed/delete',
  FeedUpdateHandler:'/feed/update',
  FeedListHandler:'/feed/list',
  WarningUpdateHandler:'/warning/update',
  WarningGetHandler:'/warning/get',

}
