$ ->
  chrome.storage.local.get (item) ->
    if item.rids
      $('#rids').val(item.rids)

  $('#save').on 'click', ->
    chrome.storage.local.set {rids: $('#rids').val()}, ->
      console.log('save?')
