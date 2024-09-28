<?php
// +----------------------------------------------------------------------
// | likeshop开源商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/likeshop_gitee
// | github下载：https://github.com/likeshop-github
// | 访问官网：https://www.likeshop.cn
// | 访问社区：https://home.likeshop.cn
// | 访问手册：http://doc.likeshop.cn
// | 微信公众号：likeshop技术社区
// | likeshop系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  likeshop系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | likeshop团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeshop.cn.team
// +----------------------------------------------------------------------

namespace app\adminapi\controller\setting;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\setting\ContentCensorLogic;
use app\adminapi\validate\setting\ContentCensorValidate;

class ContentCensorController extends BaseAdminController
{
    /**
     * @notes 获取内容审核配置
     * @return mixed
     * @author ljj
     * @date 2023/6/19 5:43 下午
     */
    public function getConfig()
    {
        $config = (new ContentCensorLogic())->getConfig();
        return $this->success('',$config);
    }

    /**
     * @notes 设置内容审核配置
     * @return mixed
     * @author ljj
     * @date 2023/6/19 5:43 下午
     */
    public function setConfig()
    {
        $params = (new ContentCensorValidate())->post()->goCheck('setConfig');
        (new ContentCensorLogic())->setConfig($params);
        return $this->success('设置成功',[],1,1);
    }
}