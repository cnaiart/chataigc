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

namespace app\adminapi\logic\setting;


use app\common\logic\BaseLogic;
use app\common\service\ConfigService;

class MindmapLogic extends BaseLogic
{
    /**
     * @notes 获取思维导图配置
     * @return array
     * @author ljj
     * @date 2023/9/21 10:39 上午
     */
    public function getConfig():array
    {
        return [
            'is_example'       => ConfigService::get('mindmap_config', 'is_example',config('project.mindmap_config.is_example')),
            'example_content'     => ConfigService::get('mindmap_config', 'example_content',config('project.mindmap_config.example_content')),
            'cue_word'     => ConfigService::get('mindmap_config', 'cue_word',config('project.mindmap_config.cue_word')),
        ];
    }

    /**
     * @notes 设置思维导图配置
     * @param $params
     * @return bool
     * @author ljj
     * @date 2023/9/21 10:44 上午
     */
    public static function setConfig($params)
    {
        ConfigService::set('mindmap_config', 'is_example', $params['is_example']);
        ConfigService::set('mindmap_config', 'example_content', $params['example_content']);
        ConfigService::set('mindmap_config', 'cue_word', $params['cue_word']);
        return true;
    }
}