import { ref } from 'vue'
import feedback from '@/utils/feedback'
import type { FormRules } from 'element-plus'
import { setOaMenuSave, getOaMenu, setOaMenuPublish } from '@/api/channel/wx_oa'
import type { Menu } from '@/api/channel/wx_oa'
interface RulesConfig {
    menuLength?: number
}
// 菜单实例
export const menuRef = shallowRef()
// 菜单数据
const menuList = ref<Menu[]>([])
const menuIndex = ref<number>(0)
// 校验
export const generateRules = ({ menuLength }: RulesConfig = {}) => {
    const rules = reactive<FormRules>({
        name: [
            {
                required: true,
                message: '必填项不能为空',
                trigger: ['blur', 'change']
            },
            {
                trigger: ['blur', 'change'],
                validator(rule, value, callback, source, options) {
                    const encoder = new TextEncoder()
                    const bytes = encoder.encode(value)
                    if (menuLength !== undefined && bytes.length > menuLength) {
                        callback(new Error('长度超出限制'))
                    } else {
                        callback()
                    }
                }
            }
        ],
        menuType: [
            {
                required: true,
                message: '必填项不能为空',
                trigger: ['blur', 'change']
            }
        ],
        visitType: [
            {
                required: true,
                message: '必填项不能为空',
                trigger: ['blur', 'change']
            }
        ],
        url: [
            {
                required: true,
                message: '必填项不能为空',
                trigger: ['blur', 'change']
            },
            {
                pattern:
                    /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,
                message: '请输入合法的网址链接',
                trigger: ['blur', 'change']
            }
        ],
        appId: [
            {
                required: true,
                message: '必填项不能为空',
                trigger: ['blur', 'change']
            }
        ],
        pagePath: [
            {
                required: true,
                message: '必填项不能为空',
                trigger: ['blur', 'change']
            }
        ]
    })
    return rules
}

export const useMenuOa = (ref: any) => {
    if (ref) menuRef.value = ref

    // 添加主菜单
    const handleAddMenu = () => {
        menuList.value.push({
            name: '菜单名称',
            has_menu: false,
            type: 'view',
            url: '',
            appid: '',
            pagepath: '',
            sub_button: []
        })
    }

    // 添加子菜单
    const handleAddSubMenu = (event?: Menu) => {
        const index = menuIndex.value
        if (menuList.value[index].sub_button.length >= 5) {
            feedback.msgError('已添加上限～')
            return
        }
        menuList.value[index].sub_button.push(event)
    }

    // 编辑子菜单
    const handleEditSubMenu = (event: Menu, subIndex: number) => {
        const index = menuIndex.value
        menuList.value[index].sub_button[subIndex] = event
    }

    // 删除主菜单
    const handleDelMenu = (index: number) => {
        if (index != 0) {
            menuIndex.value--
        }
        menuList.value.splice(index, 1)
    }

    // 删除子菜单
    const handleDelSubMenu = (index: number, subIndex: number) => {
        menuList.value[index].sub_button.splice(subIndex, 1)
    }

    // 获取菜单
    const getOaMenuFunc = async () => {
        try {
            menuList.value = await getOaMenu()
        } catch (error) {
            console.log('获取菜单=>', error)
        }
    }

    // 保存菜单
    const handleSave = async () => {
        const refs = menuRef.value.value
        for (let i = 0; i < refs.length; i++) {
            try {
                await refs[i].menuFormRef.validate()
            } catch (error) {
                menuIndex.value = i
                return
            }
        }
        await setOaMenuSave(menuList.value)
    }

    // 保存菜单
    const handlePublish = async () => {
        const refs = menuRef.value.value
        for (let i = 0; i < refs.length; i++) {
            try {
                await refs[i].menuFormRef.validate()
            } catch (error) {
                menuIndex.value = i
                return
            }
        }
        await setOaMenuPublish(menuList.value)
    }

    return {
        menuList,
        menuIndex,
        handleAddMenu,
        handleAddSubMenu,
        handleEditSubMenu,
        handleDelMenu,
        handleDelSubMenu,
        getOaMenuFunc,
        handleSave,
        handlePublish
    }
}
