"use strict";
cc._RF.push(module, '23889liMxhPjZBWLQVF7BW3', 'OneClub');
// Script/OneClub.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        bg_selected: cc.Node,
        club_name: cc.Label,
        label_club_id: cc.Label,
        hongdian: cc.Node
    },
    init: function init(data, cb) {
        this.club_type = data.club_type;
        this.club_id = data.club_id;
        this.label_club_id.string = "ID: " + data.club_id;
        this.club_name.string = data.club_name + "(" + data.cur_num + "人)";
        this.cb = cb;
        this.admin = data.admin;
    },
    selected: function selected() {
        this.club_name.node.color = new cc.color(255, 255, 255, 255);
        this.label_club_id.node.color = new cc.color(255, 255, 255, 255);
        this.bg_selected.active = true;
    },
    unSelected: function unSelected() {
        this.club_name.node.color = new cc.color(255, 40, 0, 255);
        this.label_club_id.node.color = new cc.color(255, 40, 0, 255);
        this.bg_selected.active = false;
    },
    onClick: function onClick() {
        this.cb && this.cb(this);
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {

    // },

    // update (dt) {},
});

cc._RF.pop();