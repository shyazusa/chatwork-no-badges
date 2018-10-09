$(function() {
  var addCss, addStyleTag, allRoomsBadgeRule, allRoomsFontRule, badgeRule, fontRule;
  addStyleTag = function() {
    var styleTag;
    styleTag = document.createElement('style');
    styleTag.appendChild(document.createTextNode(''));
    document.head.appendChild(styleTag);
    return styleTag;
  };
  addCss = function(rule) {
    return addStyleTag().sheet.insertRule(rule, 0);
  };
  badgeRule = function(rid) {
    return addCss(`li[data-rid="${rid}"]\n.roomListBadges__unreadBadge:not(\n  .roomListBadges__unreadBadge--hasMemtion\n) {\n  display: none;\n}`);
  };
  fontRule = function(rid) {
    return addCss(`li[data-rid="${rid}"]\n.roomListItem__roomName--unread {\n  font-weight: normal;\n}`);
  };
  allRoomsBadgeRule = function() {
    return addCss(".roomListBadges__unreadBadge:not(\n  .roomListBadges__unreadBadge--hasMemtion\n) {\n  display: none;\n}");
  };
  allRoomsFontRule = function() {
    return addCss(".roomListItem__roomName--unread {\n  font-weight: normal;\n}");
  };
  return chrome.storage.local.get(function(item) {
    var all_rooms, i, len, rid, rids;
    all_rooms = item.all_rooms;
    if (all_rooms) {
      allRoomsBadgeRule();
      allRoomsFontRule();
    } else {
      rids = item.rids.split(',');
      if (rids) {
        for (i = 0, len = rids.length; i < len; i++) {
          rid = rids[i];
          badgeRule(rid);
          fontRule(rid);
        }
      }
    }
    return console.log(item);
  });
});
