
// 富文本编辑配置
export function useGetModules() {
    const modules = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'], // 加粗，斜体，下划线，删除线
                ['blockquote', 'code-block'], // 字体样式
                ['link', 'image'], // 上传图片、上传视频
                [{ list: 'ordered' }, { list: 'bullet' }], // 有序列表，无序列表
                [{ script: 'sub' }, { script: 'super' }], // 下角标，上角标
                // [{ indent: '-1' }, { indent: '+1' }], // 缩进
                [{ align: [] }], // 居中
                // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ color: [] }, { background: [] }], // 文字颜色、背景颜色选择
                [{ direction: 'rtl' }], // 文字输入方向
                [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
                ['clean'], // 清除样式
            ],
        }
    }
    return modules;
}