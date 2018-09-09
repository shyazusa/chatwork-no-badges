$ ->
  addBrTag = ->
    roomIdLength = $('.roomId').length
    $('<br>').appendTo "#roomId_#{roomIdLength}"

  addAddButton = ->
    $ '<input>',
      id: 'add',
      type: 'button'
      value: 'Add'
    .appendTo '#mainSetting'

  addSaveButton = ->
    $ '<input>',
      id: 'save',
      type: 'button'
      value: 'Save'
    .appendTo '#mainSetting'

  addRemoveButton = (roomIdLength) ->
    $ '<input>',
      class: 'delete'
      type: 'button'
      "data-id": roomIdLength
      value: 'Delete'
    .appendTo "#roomId_#{roomIdLength}"

  addRoomId = (rid) ->
    roomIdLength = $('.roomId').length
    $ '<div>',
      id: "roomId_#{roomIdLength}"
      class: 'roomId'
    .appendTo '#roomIds'
    if rid
      $ '<input>',
        class: "roomId #{rid}"
        type: 'text'
        value: rid
      .appendTo "#roomId_#{roomIdLength}"
    else
      $ '<input>',
        id: "roomId_#{roomIdLength}"
        class: 'roomId'
        type: 'text'
      .appendTo "#roomId_#{roomIdLength}"
    addRemoveButton "#{roomIdLength}"
    addBrTag()

  saveRoomIds = ->
    roomIds = []
    $('#roomIds').children('div').each (i) ->
      v = $(@).children('input').val()
      if !isNaN v
        roomIds["#{i}"] = v
    chrome.storage.local.set {rids: roomIds.join ','}

  $(document).on 'click', '#add', ->
    addRoomId()

  $(document).on 'click', '.delete', ->
    roomIdLength = $(@).data().id
    $("#roomId_#{roomIdLength}").remove()
    saveRoomIds()

  $(document).on 'click', '#save', ->
    saveRoomIds()

  chrome.storage.local.get (item) ->
    rids = item.rids.split ','
    if rids
      for rid in rids
        addRoomId rid
  addBrTag()
  addAddButton()
  addSaveButton()
