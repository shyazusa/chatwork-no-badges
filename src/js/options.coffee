$ ->
  addBrTag = ->
    roomIdLength = $('.roomId').length
    $('<br>').appendTo "#roomId_#{roomIdLength}"

  addAddButton = ->
    $ '<input>',
      id: 'add',
      class: 'btn btn-primary btn-sm col-sm-6'
      type: 'button'
      value: 'Add'
    .appendTo '#buttons'

  addSaveButton = ->
    $ '<input>',
      id: 'save',
      class: 'btn btn-success btn-sm col-sm-6'
      type: 'button'
      value: 'Save'
    .appendTo '#buttons'

  addRemoveButton = (roomIdLength) ->
    $ '<input>',
      class: 'delete btn btn-danger btn-sm col-sm-6'
      type: 'button'
      "data-id": roomIdLength
      value: 'Delete'
    .appendTo "#roomId_#{roomIdLength}"

  addRoomId = (rid) ->
    roomIdLength = $('.roomId').length
    $ '<div>',
      id: "roomId_#{roomIdLength}"
      class: 'roomId container col-sm-6'
    .appendTo '#roomIds'
    if rid
      $ '<input>',
        class: "roomId #{rid} col-sm-6"
        type: 'text'
        value: rid
      .appendTo "#roomId_#{roomIdLength}"
    else
      $ '<input>',
        id: "roomId_#{roomIdLength}"
        class: 'roomId col-sm-6'
        type: 'text'
      .appendTo "#roomId_#{roomIdLength}"
    addRemoveButton "#{roomIdLength}"
    addBrTag()

  saveRoomIds = ->
    roomIds = []
    $('#roomIds').children('div').each (i) ->
      v = $(@).children('input').val().replace /[^0-9^\.]/g, ''
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
  $ '<div>',
    id: 'buttons'
    class: 'container col-sm-6'
  .appendTo '#mainSetting'
  addAddButton()
  addSaveButton()
