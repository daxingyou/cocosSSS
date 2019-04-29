(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Progress.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ccd6a29pU1P87WpsdEoiy4y', 'Progress', __filename);
// Script/Progress.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        bar: {
            default: null,
            type: cc.Node
        }
    },
    onLoad: function onLoad() {
        var _this = this;

        this.node.setPositionX((this.bar.name == "bgm" ? cc.mj.user.bgm : cc.mj.user.sfx) * 500);
        var progress = this.node.position.x / 500;
        this.bar.getComponent(cc.ProgressBar).progress = progress;
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (evt) {
            var dx = evt.getLocationX() - evt.getPreviousLocation().x;
            _this.node.setPositionX(Math.min(500, Math.max(0, _this.node.position.x + dx)));
            var progress = _this.node.position.x / 500;
            _this.bar.getComponent(cc.ProgressBar).progress = progress;
            _this.bar.name == "bgm" ? cc.mj.user.setVolumeBGM(progress) : cc.mj.user.setVolumeSFX(progress);
        });
    },
    setValue: function setValue(progress) {
        this.bar.getComponent(cc.ProgressBar).progress = progress;
        this.bar.name == "bgm" ? cc.mj.user.setVolumeBGM(progress) : cc.mj.user.setVolumeSFX(progress);
        this.node.setPositionX(progress * 500);
    },
    // called every frame
    update: function update(dt) {}
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Progress.js.map
        