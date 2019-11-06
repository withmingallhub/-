import Mock from 'mockjs';
const vehicle = Mock.mock(
  '/api/login', 'post', (req, res) => {
    return {
      code: 200,
      message: '登陆成功'
    }
  })
const user = Mock.mock(
  '/api/register', 'get', (req, res) => {
    return {
      code: 200,
      data: {
        id: 1,
        sex: 1,
        age: 25,
        createTime: '2017-04-01'
      },
      message: '查询成功'
    }
  })

export default {
  vehicle,
  user
}

