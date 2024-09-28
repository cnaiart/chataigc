export type DrawingFormType = {    prompt: string      // 是 关键词    action: string      // 是 操作 generate=生成图片 upsample{index}=放大 variation{index}=变换    image_base: string  // 否 图片地址 图生成图时必填    image_id: string    // 否 图片id 图片放大或变换时必填    model: string       // 是 绘画的模型    scale: string       // 否 图片比例    other: string       // 否 其它参数    no_content: string  // 否 不想出现的内容    version: string     // 否 绘画版本    style: string       // 否 风格 动漫-default 可爱-cute 丰富-expressive 风景-scenic    engine: string      // 否 意间sd-绘画引擎    quality: string     // 否 DALLE-3 画质}// 生成图片export function drawing(params: DrawingFormType) {    return $request.post({ url: '/draw/imagine', params, method: 'POST' })}// 生成图片详情export function drawingDetail(params: { records_id: number[] }) {    return $request.post({ url: '/draw_records/detail', params })}// 生成图片记录export function drawingRecord(params: any) {    return $request.get({        url: '/draw_records/records',        params    })}// 删除export function drawingDelete(params: { ids: number[] }) {    return $request.post({ url: '/draw_records/delete', params, method: 'POST' })}// 关键词分类export function keywordCate() {    return $request.get({        url: '/draw_prompt/category'    })}// 关键词export function keywordPrompt(params: any) {    return $request.get({        url: '/draw_prompt/prompt',        params    })}// 绘画示例export function drawingExample() {    return $request.get({ url: '/draw_prompt/example' })}// 关键词翻译export function keywordPromptTranslate(params: any) {    return $request.get({        url: '/draw_prompt/translate',        params    })}// 绘画模型export function drawingModel() {    return $request.get({ url: '/draw/modelConfig' })}// 意间绘画风格选择export function yjStyleSelector() {    return $request.get({ url: '/draw/getSelector' })}// SDexport function sdModelList() {    return $request.get({ url: '/draw/getSdModel' })}