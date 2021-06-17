export default function registerJiedian (lf) {
  lf.register('jiedian', ({ CircleNode, CircleNodeModel, h }) => {
    class StartNode extends CircleNode {
      getLabelShape () {
        const attributes = this.getAttributes()
        const {
          x,
          y,
          width,
          height
        } = attributes
        return h(
          'svg',
          {
            x: x - width / 2,
            y: y - height / 2,
            width: 40,
            height: 40,
            viewBox: '0 0 1024 1024',
          },
          h(
            'path',
            {
              fill: '#1296db',
              d: 'M512 0c282.752 0 512 229.248 512 512s-229.248 512-512 512S0 794.752 0 512 229.248 0 512 0z m0 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333z m85.333333 256a85.333333 85.333333 0 0 1 85.333334 85.333334v170.666666a85.333333 85.333333 0 0 1-85.333334 85.333334h-170.666666a85.333333 85.333333 0 0 1-85.333334-85.333334v-170.666666a85.333333 85.333333 0 0 1 85.333334-85.333334h170.666666z'
            }
          )
        )
      }
      getShape () {
        const attributes = this.getAttributes();
        const {
          x,
          y,
          r,
          fill,
          stroke,
          strokeWidth
        } = attributes
        return h(
          'g',
          {
          },
          [
            h(
              'circle',
              {
                cx: x,
                cy: y,
                r,
                fill,
                stroke,
                strokeWidth
              }
            ),
            this.getLabelShape(),
          ]
        )
      }
    }
    class StartModel extends CircleNodeModel {
      constructor (data, graphModel) {
        data.text = {
          value: (data.text && data.text.value) || '节点',
          x: data.x,
          y: data.y + 35,
          dragable: false,
          editable: true,
        }
        super(data, graphModel)
      }
      getConnectedTargetRules () {
        const rules = super.getConnectedTargetRules()
        const notAsTarget = {
          message: '起始节点不能作为连线的终点',
          validate: () => false
        }
        rules.push(notAsTarget)
        return rules
      }
    }
    return {
      view: StartNode,
      model: StartModel
    }
  })
}
