$(function() {
  var addAddButton, addBrTag, addRemoveButton, addRoomId, addSaveButton, saveRoomIds;
  addBrTag = function() {
    var roomIdLength;
    roomIdLength = $('.roomId').length;
    return $('<br>').appendTo(`#roomId_${roomIdLength}`);
  };
  addAddButton = function() {
    return $('<input>', {
      id: 'add',
      class: 'btn btn-primary btn-sm col-sm-6',
      type: 'button',
      value: 'Add'
    }).appendTo('#buttons');
  };
  addSaveButton = function() {
    return $('<input>', {
      id: 'save',
      class: 'btn btn-success btn-sm col-sm-6',
      type: 'button',
      value: 'Save'
    }).appendTo('#buttons');
  };
  addRemoveButton = function(roomIdLength) {
    return $('<input>', {
      class: 'delete btn btn-danger btn-sm col-sm-6',
      type: 'button',
      "data-id": roomIdLength,
      value: 'Delete'
    }).appendTo(`#roomId_${roomIdLength}`);
  };
  addRoomId = function(rid) {
    var roomIdLength;
    roomIdLength = $('.roomId').length;
    $('<div>', {
      id: `roomId_${roomIdLength}`,
      class: 'roomId container col-sm-6'
    }).appendTo('#roomIds');
    if (rid) {
      $('<input>', {
        class: `roomId ${rid} col-sm-6`,
        type: 'text',
        value: rid
      }).appendTo(`#roomId_${roomIdLength}`);
    } else {
      $('<input>', {
        id: `roomId_${roomIdLength}`,
        class: 'roomId col-sm-6',
        type: 'text'
      }).appendTo(`#roomId_${roomIdLength}`);
    }
    addRemoveButton(`${roomIdLength}`);
    return addBrTag();
  };
  saveRoomIds = function() {
    var roomIds;
    roomIds = [];
    $('#roomIds').children('div').each(function(i) {
      var v;
      v = $(this).children('input').val();
      if (!isNaN(v)) {
        return roomIds[`${i}`] = v;
      }
    });
    return chrome.storage.local.set({
      rids: roomIds.join(',')
    });
  };
  $(document).on('click', '#add', function() {
    return addRoomId();
  });
  $(document).on('click', '.delete', function() {
    var roomIdLength;
    roomIdLength = $(this).data().id;
    $(`#roomId_${roomIdLength}`).remove();
    return saveRoomIds();
  });
  $(document).on('click', '#save', function() {
    return saveRoomIds();
  });
  chrome.storage.local.get(function(item) {
    var j, len, results, rid, rids;
    rids = item.rids.split(',');
    if (rids) {
      results = [];
      for (j = 0, len = rids.length; j < len; j++) {
        rid = rids[j];
        results.push(addRoomId(rid));
      }
      return results;
    }
  });
  addBrTag();
  $('<div>', {
    id: 'buttons',
    class: 'container col-sm-6'
  }).appendTo('#mainSetting');
  addAddButton();
  return addSaveButton();
});
