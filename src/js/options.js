$(function() {
  chrome.storage.local.get(function(item) {
    if (item.rids) {
      return $('#rids').val(item.rids);
    }
  });
  return $('#save').on('click', function() {
    return chrome.storage.local.set({
      rids: $('#rids').val()
    }, function() {
      return console.log('save?');
    });
  });
});
