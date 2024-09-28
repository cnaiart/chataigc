<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\adminapi\controller\setting\pay;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\setting\pay\PayConfigLists;
use app\adminapi\logic\setting\pay\PayConfigLogic;
use app\adminapi\validate\setting\PayConfigValidate;

/**
 * 支付配置
 * Class PayConfigController
 * @package app\adminapi\controller\setting\pay
 */
class PayConfigController extends BaseAdminController
{


    /**
     * @notes 设置支付配置
     * @return \think\response\Json
     * @author 段誉
     * @date 2023/2/23 16:14
     */
    public function setConfig()
    {
        $params = (new PayConfigValidate())->post()->goCheck('set');
        PayConfigLogic::setConfig($params);
        return $this->success('设置成功', [], 1, 1);
    }


    /**
     * @notes 获取支付配置
     * @return \think\response\Json
     * @author 段誉
     * @date 2023/2/23 16:14
     */
    public function getConfig()
    {
        $id = (new PayConfigValidate())->goCheck('get');
        $result = PayConfigLogic::getConfig($id);
        return $this->success('获取成功', $result);
    }


    /**
     * @notes
     * @return \think\response\Json
     * @author 段誉
     * @date 2023/2/23 16:15
     */
    public function lists()
    {
        return $this->dataLists(new PayConfigLists());
    }

    /***
     * @notes 获取ios支付配置
     * @author cjhao
     * @date 2023/7/25 17:04
     */
    public function getIosPayConfig()
    {
        $config = PayConfigLogic::getIosPayConfig();
        return $this->success('', $config);
    }

    /**
     * @notes 设置ios支付配置
     * @author cjhao
     * @date 2023/7/25 17:11
     */
    public function setIosPayConfig()
    {
        $params = $this->request->post();
        PayConfigLogic::setIosPayConfig($params);
        return $this->success('设置成功', [], 1, 1);

    }


    /**
     * @notes 获取易支付配置
     * @return mixed
     * @author ljj
     * @date 2024/1/9 10:04 上午
     */
    public function getEpayConfig()
    {
        $result = PayConfigLogic::getEpayConfig();
        return $this->success('获取成功', $result);
    }

    /**
     * @notes 设置易支付配置
     * @return mixed
     * @author ljj
     * @date 2024/1/9 10:05 上午
     */
    public function setEpayConfig()
    {
        $params = (new PayConfigValidate())->post()->goCheck('setEpayConfig');
        PayConfigLogic::setEpayConfig($params);
        return $this->success('设置成功', [], 1, 1);
    }
}