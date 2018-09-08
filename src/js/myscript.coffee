$ ->
  addStyleTag = ->
    styleTag = document.createElement 'style'
    styleTag.appendChild document.createTextNode('')
    document.head.appendChild styleTag
    styleTag

  addCss =  (rule) ->
    addStyleTag().sheet.insertRule rule, 0

  badgeRule = (rid) ->
    addCss """
      li[data-rid="#{rid}"]
      .roomListBadges__unreadBadge:not(
        .roomListBadges__unreadBadge--hasMemtion
      ) {
        display: none;
      }
    """

  fontRule = (rid) ->
    addCss """
      li[data-rid="#{rid}"]
      .roomListItem__roomName--unread {
        font-weight: normal;
      }
    """
  chrome.storage.local.get (item) ->
    rids = item.rids.split(',')
    if rids
      for rid in rids
        badgeRule rid
        fontRule rid
    else
      console.log('rids is no')
