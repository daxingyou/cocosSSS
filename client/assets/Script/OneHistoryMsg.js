cc.Class({
    extends: cc.Component,

    properties: {
        msg: {
            default: null,
            type: cc.Label
        },
        bubble: {
            default: null,
            type: cc.Node
        },
        role_name: {
            default: null,
            type: cc.Label
        },
        emoji: {
            default: null,
            type: cc.Node
        },
        emoji_prefab: {
            default: null,
            type: cc.Prefab
        },
        atlas_emoji: {
            default: null,
            type: cc.SpriteAtlas
        },
    },
    onLoad: function () {
    },
    init: function (data) {
        if (data.msg[0] == "E") {
            this.emoji.active = true
            let emoji_node = cc.instantiate(this.emoji_prefab)
            let sprite = this.atlas_emoji.getSpriteFrame(data.msg);
            emoji_node.getComponent(cc.Sprite).spriteFrame = sprite
            emoji_node.parent = this.emoji
        } else {
            this.bubble.active = true
            this.msg.string = data.msg
            this.bubble.width = 32 * data.msg.length + 10
        }
        this.role_name.string = data.name + ":"
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {

    // },

    // update (dt) {},
});
