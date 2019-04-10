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
    return addCss(`li[data-rid="${rid}"]\n._unreadBadge:not(.kDzFLX) {\n  display: none;\n}`);
  };
  fontRule = function(rid) {
    return addCss(`li[data-rid="${rid}"]\n.ijcItZ {\n  color: rgb(77, 77, 77);\n  font-weight: normal;\n}`);
  };
  allRoomsBadgeRule = function() {
    return addCss("._unreadBadge:not(kDzFLX) {\n  display: none;\n}");
  };
  allRoomsFontRule = function() {
    return addCss(".ijcItZ {\n  color: rgb(77, 77, 77);\n  font-weight: normal;\n}");
  };
  return chrome.storage.local.get(function(item) {
    var all_rooms, i, len, results, rid, rids;
    all_rooms = item.all_rooms;
    if (all_rooms) {
      allRoomsBadgeRule();
      return allRoomsFontRule();
    } else {
      rids = item.rids.split(',');
      if (rids) {
        results = [];
        for (i = 0, len = rids.length; i < len; i++) {
          rid = rids[i];
          badgeRule(rid);
          results.push(fontRule(rid));
        }
        return results;
      }
    }
  });
});
