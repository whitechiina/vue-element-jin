export const NODE_LIST = [
    {
        text: '节点',
        type: 'jiedian',
        class: 'node-jiedian'
    },
    {
        text: '区域',
        type: 'rect',
        class: 'node-rect'
    },
    {
        type: 'famen',
        text: '网关',
        class: 'node-famen'
    },
];

export const config = {
    width: '100%',
    height: '100%',
    background: {
        color: '#f7f9ff',  //画布背景
    },
    grid: {
        type: 'dot',   // 圆点样式
        size: 20,
        config: {
            color: '#1C86EE',  //网格颜色
            thickness: 2 // 网格线宽度
        }
    },
    style: {
        rect: {
            radius: 6,
            stroke : '#0094de',
            fill: '#f0f0f0',
            fillOpacity: 0.7
        },
        
        circle: {
            r: 20,
            stroke: '#F0F0F0',
            strokeWidth: 1,
            fill: '#F0F0F0',
        },

        // 文字颜色
        nodeText: { 
            color: '#0066cc'
        },
    },
}
