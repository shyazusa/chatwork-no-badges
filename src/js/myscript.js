$(function() {
  var addCss, addStyleTag, badgeRule, fontRule;
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
  return chrome.storage.local.get(function(item) {
    var i, len, results, rid, rids;
    rids = item.rids.split(',');
    if (rids) {
      results = [];
      for (i = 0, len = rids.length; i < len; i++) {
        rid = rids[i];
        badgeRule(rid);
        results.push(fontRule(rid));
      }
      return results;
    } else {
      return console.log('rids is no');
    }
  });
});
