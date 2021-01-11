const Router = require('koa-router')
const router = new Router()
const { ParameterException } = require('../../../core/http-exception')
const { PositiveIntegerValidator } = require('../../validators/validator')

router.get('/book/latest', async (ctx, next) => {
    var valiData = await new PositiveIntegerValidator().validate(ctx)
    // console.log(valiData)
    /* 以下是几种从 validate() 函数的返回值中获取参数的方式 */
    // const path = valiData.data.path
    // const query = valiData.data.query
    // const headers = valiData.data.header.token
    // const body = valiData.data.body

    const { id } = valiData.data.query
    // console.log(name)
    // var exception = new ParameterException('参数异常');
    // throw exception;
    ctx.body = { id: id }
})

module.exports = router