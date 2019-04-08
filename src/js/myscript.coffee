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
      ._unreadBadge {
        display: none;
      }
    """

  fontRule = (rid) ->
    addCss """
      li[data-rid="#{rid}"]
      .ijcItZ {
        color: rgb(77, 77, 77);
        font-weight: normal;
      }
    """

  allRoomsBadgeRule = () ->
    addCss """
      ._unreadBadge {
        display: none;
      }
    """

  allRoomsFontRule = () ->
    addCss """
      .ijcItZ {
        color: rgb(77, 77, 77);
        font-weight: normal;
      }
    """

  chrome.storage.local.get (item) ->
    all_rooms = item.all_rooms
    if all_rooms
      allRoomsBadgeRule()
      allRoomsFontRule()
    else
      rids = item.rids.split(',')
      if rids
        for rid in rids
          badgeRule rid
          fontRule rid
