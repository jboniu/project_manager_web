
export default {
    /**
     * 清空一个字段所有属性
     */
    clear:function (obj) {
        for(var attr in obj){
            obj[attr] = '';
        }
    }
}
